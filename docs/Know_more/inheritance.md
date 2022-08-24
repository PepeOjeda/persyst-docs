---
sidebar_position: 3
---

# Inheritance

Does inheritance work? Yes.

Are there any limitations you need to keep in mind? Also yes.

## Private fields of the parent class

Persyst will only inspect the class it's given for members tagged as `[SaveThis]`. It will not examine the base class. 

That means `private` members of the parent class will not be serialized, only those that are `protected` and `public`.

```cs
public class MyMB : MonoBehaviour, ISaveable
{
    [SaveThis] ChildClass child;
}

public class ParentClass : ISaveable
{
    [SaveThis] int aPrivateInt; //no
    [SaveThis] public int aPublicInt; //yes
    [SaveThis] protected int aProtectedInt; //yes
}

public class ChildClass : ParentClass
{
    [SaveThis] int myInt; //yes
}
```

## Type of the reference vs type of the object

With inheritance, you can have something like this:

```cs
public class MyMB : MonoBehaviour, ISaveable
{
    [SaveThis] ParentClass child = new ChildClass();
}
```

In this case, Persyst would serialize `child` as a `ChildClass` object, not a `ParentClass` one. This means all the values that are specific to the `ChildClass` get serialized correctly, which is good, but all the private fields of the parent are ignored, which is bad.

:::caution
This is not how the built-in Unity serializer works. There, the objects get serialized as the type of the class member, not the underlying type of the instance. Keep in mind this discrepancy when serializing this kind of thing with both systems at the same time.
:::

## Deserializing with a type mismatch

This won't *break* the serialization, but you probably want to avoid doing it, for it will be confusing and probably end up causing bugs.

If you have this class:

```cs
public class MyMB : MonoBehaviour, ISaveable
{
    [SaveThis] ParentClass field = new ParentClass();
}
```

and read a file where `field` was serialized as a `ParentClass`, then the current instance that `field` refers to is maintained, and only the relevant members are updated. Meaning that, for this definition of `ParentClass`:

```cs
public class ParentClass : ISaveable
{
    [SaveThis] int myInt;
    [SaveThis] protected int protectedInt;
    int anotherInt;
    protected int anotherProtectedInt;
}
```
`myInt` and `protectedInt` get updated by the Persyst-serialized value, while `anotherInt` and `anotherProtectedInt` retain the value that they already have.

...

However, if `field` was serialized as a `ChildClass`, and its current value is an instance of `ParentClass`, then the current instance is **discarded** and the system creates a new object of `ChildClass` that gets populated with the serialized values. But, since the only one of these values that is both serialized by Persyst and visible by `ChildClass` is `protectedInt`, that is **the only one** that will be recovered.

:::warning
This means the value of all other members of the existing `ParentClass` instance will be lost. Not overwritten by a meaningful serialized value, but instead reset to the default value of that datatype. You probably never want this to happen.

While this is not undefined behaviour (what I've just explained is exactly what will happen), this can *very easily* cause bugs if you are using both the Unity serialization and Persyst to serialize polymorphic objects. You might expect the Unity-serialized values of the parent to remain unchanged, as Persyst will not explicitly overwrite them, but **that's not what will happen. Those values will be lost.**

I would recommend never doing this at all. 

Unless you **really** know what you're doing, I guess. After all, I'm not your dad.
:::