---
sidebar_position: 2
---

# Nesting classes

The one rule you can't break when serializing nested classes (doctors hate him!).

## TL;DR

Nesting classes works well if you are only serializing values.

However, if you want to serialize references contained in the inner classes, you need to make sure that all the classes in the nesting chain are `ISaveable`. **And they do have to be classes, not structs!**

All of this is because the `[SaveThis]` attribute only makes a difference if it is applied to a member of an `ISaveable` class. Members of types that are not `ISaveable` are just directly passed along to the Json serializer.

## A bit more detail

Essentially, the thing is that when Persyst encounters a member marked as `SaveThis` in a class, it asks "how do I serialize this thing?". That's where the whole value-vs-reference thing is sorted out.

If the type of the member is an `ISaveable` class, it will open up that `ISaveable` class to figure out how to serialize it. It will look for members marked as `[SaveThis]`, and then process each of those members individually, in what is basically a recursion process. 

When a class is not marked as `ISaveable`, however, you can't have decided what to serialize with the `[SaveThis]` attribute. So, that member is just passed along to the Newtosoft Json library as-is, rather than iterating over its fields and looking for attributes. And so, any references that may be further down the line are lost, for the whole thing is now in the Json library's hands.

As for why structs containing references are a problem, see [The Pending References System](Pending_references).

## Some examples
I wouldn't recommend reading this entire thing without context. It's more so that you can look for an example that's similar to the case you are dealing with.

### Values

```cs
public class MyMB : MonoBehaviour, ISaveable
{
    [SaveThis] AnotherClass field;
}

//not ISaveable, so [SaveThis] does nothing
public AnotherClass{
    [SaveThis] int myInt; //yup, serialized
    int anotherInt; //yup, serialized
}
```

```cs
public class MyMB : MonoBehaviour, ISaveable
{
    [SaveThis] AnotherClass field;
}

public AnotherClass : ISaveable{
    [SaveThis] int myInt; //yup, serialized
    int anotherInt; //nope
}
```

### References

```cs
public class MyMB : MonoBehaviour, ISaveable
{
    [SaveThis] AnotherClass field;
}

//not ISaveable, so [SaveThis] does nothing
public AnotherClass{
    [SaveThis] GameObject myRef; //nope
    GameObject anotherRef; //nope
}
```

```cs
public class MyMB : MonoBehaviour, ISaveable
{
    [SaveThis] AnotherClass field;
}

public AnotherClass: ISaveable{
    [SaveThis] GameObject myRef; //yup, serialized
    GameObject anotherRef; //nope
}
```

### Going deep

```cs
public class MyMB : MonoBehaviour, ISaveable
{
    [SaveThis] AnotherClass field;
}

public AnotherClass: ISaveable{
    [SaveThis] GameObject myRef; //yup, serialized
    [SaveThis] ADeeperClass deeper; //yup, serialized
}

//not ISaveable, so [SaveThis] does nothing
public class ADeeperClass{
    [SaveThis] int anInt; //yup, serialized
    int anotherInt; //yup, serialized
    [SaveThis] GameObject myRef; //nope
    GameObject anotherRef; //nope
}
```

```cs
public class MyMB : MonoBehaviour, ISaveable
{
    [SaveThis] AnotherClass field;
}

//not ISaveable, so [SaveThis] does nothing
public AnotherClass{
    GameObject myRef; //nope
    ADeeperClass deeper; //yup, serialized
}

public class ADeeperClass : ISaveable{
    [SaveThis] int anInt; //yup, serialized
    int anotherInt; //yup, serialized
    [SaveThis] GameObject myRef; //nope
    GameObject anotherRef; //nope
}
```