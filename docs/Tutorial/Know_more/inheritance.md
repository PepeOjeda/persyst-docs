---
sidebar_position: 3
keywords: [Unity, serialization, inheritance]
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

When using inheritance, you can have something like this:

```cs
public class MyMB : MonoBehaviour, ISaveable
{
    [SaveThis] ParentClass child = new ChildClass();
}
```

In this case, the attribute `[SaveThis]` would make Persyst serialize `child` as an instance of `ParentClass`, rather than `ChildClass`. This is also the default behaviour of the built-in Unity serializer.

However, most of the time you will want to keep the actual type of the instace (serialize `child` as a `ChildClass` object, not a `ParentClass` one). You can do this by using the attribute `[SaveAsInstanceType]`. Effectively, this will behave the same way as `[SerializeReference]` does for the built-in serializer.

:::note
Remember the previous point. Serializing `child` as `ChildClass` means all the values that are specific to the `ChildClass` get serialized correctly, which is good, but all the private fields of the parent are ignored.
:::

:::caution
What I've just described is the behaviour of the types handled directly by Persyst (that is, those that implement `ISaveable`). It is designed to work the same way as the Unity serialization, for the sake of clarity. 

The Newtonsoft JSON library does not follow these rules. It always serializes the object as the type of the instance. So, if the type you are serializing is not `ISaveable`, `[SaveThis]` will behave like `[SaveAsInstanceType]`.
:::

## Deserializing with a type mismatch
:::note
This section is just warning you about a thing that won't really happen unless you are actively trying to make it happen. Even if it does happen, it won't *break* the serialization, and it's perfectly coherent with how serialization is meant to work. But it's also counterintuitive and confusing.

You probably want to avoid doing it, for it will be probably end up causing bugs.

Unless you are already running into problems and are searching for an explanation, you might want to ignore this rambling mess altogether.
:::


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
    [SaveThis] int privateInt;
    [SaveThis] protected int protectedInt;
    int anotherPrivateInt;
    protected int anotherProtectedInt;
}
```
`myInt` and `protectedInt` get updated by the Persyst-serialized value, while `anotherInt` and `anotherProtectedInt` retain the value that they already have.

...

However, if `field` was serialized at runtime as a `ChildClass`, and its current value is an instance of `ParentClass`, then the current instance is **discarded** and the system creates a new object of `ChildClass` that gets populated with the serialized values. But, since the only one of these values that is both serialized by Persyst and visible by `ChildClass` is `protectedInt`, that is **the only one** that will be recovered.

:::warning
This means the value of all other members of the existing `ParentClass` instance will be lost. Not overwritten by a meaningful serialized value, but instead reset to the default value of that datatype.

While this is not undefined behaviour (what I've just explained is exactly what will happen), this can *very easily* cause bugs. You might expect the values of the parent that are not marked as `[SaveThis]` to remain unchanged, as Persyst will not explicitly overwrite them, but **that's not what will happen. Those values will be lost.**
:::

### How to avoid this?

Honestly, this is a difficult to make happen. It will be literally be shorter to explain how to *cause* the situation than how to avoid it.

These:

```cs
[SerializeField][SaveThis] ParentClass a;
[SerializeField][SaveAsInstanceType] ParentClass b;
[SerializeReference][SaveThis] ParentClass c;
[SerializeReference][SaveAsInstanceType] ParentClass d;
```

are **all** fine. This "problem" is not the two serialization systems clashing. It's something that can only happen because of changes made at runtime.

If you do this:


```cs
[SerializeField][SaveAsInstanceType] ParentClass b;
```
`b` is serialized by Unity as `ParentClass`. So, on loading the scene, `b` is an instance of `ParentClass`. Now, during runtime, you do something like this:

```cs
b = new ChildClass();
```

Now you save the game with Persyst, and `b` is serialized as a `ChildClass` instance. If you now close the application and open it again, `b` gets initialized by Unity to be an instance of `ParentClass`.

If you now make some modifications to the `private` fields of `b`, and ***afterwards*** load the Persyst save file, **that** is when you run into the problem. `b` gets set to a new instance of `ChildClass`, and the modifications you have made during this session are lost as the existing instance of `ParentClass` is discarded.

:::note
To re-iterate, this will not happen if the current value of `b` matches the type of the serialized value. In that case, no new instance is created, and only the values of the serialized fields are changed.
::: 