---
sidebar_position: 1
---

# Fundamentals of serialization

A quick overview of the topic of serializing C# objects, on a purely conceptual level. You are likely familiar with most this already. If you just want to get to the tutorials, feel free to skip this section. 

## Serialization, the concept

Serializing is just getting data into a format that can be stored. In the context that concerns us right now, that means taking the state of your application at runtime, and generating from it a file that can sit on your computer's hard drive. That file must contain all necessary information for us to then turn it back into the original data (*deserialize* it).

## C#
C# is an object-oriented language, so much so that *all* the code you write is always part of a class (or a struct, but structs are just [value-type](https://docs.microsoft.com/en-gb/dotnet/csharp/language-reference/builtin-types/value-types) classes). Therefore, serializing C# code is serializing classes.

Now, if we ignore [static](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/static) members for the moment (or, y'know, altogether; because they are currently not supported by Persyst), that means that what we are serializing is just a set of objects, where an object is just an instance of a class. Those objects can contain [Fields](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/fields) and [Properties](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties), which are information that is specific to that object. That's the stuff we want to serialize.


### Value and reference types

Fields and Properties have a [type](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/types/), and depending on the type, they are either [values](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types) or [references](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types). A value-type variable just contains the information itself. For example, let's take an `int`:

```cs
int i = 3;
```

If you were to look at the actual memory of the computer, you would find that the bit of it that corresponds to the variable `i` is just `3`. Pretty straightforward.

Reference-type variables, on the other hand, don't actually hold the information itself, but rather a... well, a reference to it. That means the information is stored somewhere else, and all the variable contains is the directions on how to find it. This is basically the same concept as [pointers](https://en.wikipedia.org/wiki/Pointer_(computer_programming)), except the conversions between addresses and values all happen implicitly (more convenient to use, and also a bit more opaque to the user, which can be confusing if you are just starting out). For example:

```cs
public class A{
    //....
}

A a = new A();
```

In this case, the variable `a` is not the information itself (an instance of the class `A`), but only a reference to it. You can think of this as an address, or an arrow pointing to it, or whatever you like. A very important implication of this is that, with reference types, you can have multiple variables that all share the same information.

```cs
A a = new A();
A anotherA = a;
```

Now, there is **only one** instance of `A`, but we have two references to it. If we use one of the references to modify the object (like `a.modify()`), accessing the object through the other reference will show the changes as well, because it's the same object. On the contrary, for a value type:

```cs
int i = 3;
int j = i;
```

Now there are two separate values. If you do `j=5`, you are only modifying `j`, and `i` is still equal to `3`. 

When you perform an assignment, you are copying **the contents** of the variable. For a value type, that is the actual value. But for a reference type, that is the reference itself, **not the thing that is referenced**.

## Serializing values vs serializing references

As you can imagine, serializing a value is easier. You just need to come up with a way to represent the value with, say, a string of characters. Just make sure you write down all the information you need, and that's it. 

Serializing references is trickier. 

Do you store the referenced object's information? Well, you could, but then when you deserialize reference-type variables with equal information, there is no way to tell wether they are references to the same object, or multiple objects that happen to be equal.

Do you store the value of the reference variable itself? Nope, that won't work, as the value of the reference will be meaningless when you load it back into a different session, because the object won't be there. Also, this information is not actually available to you as a programmer.

What you really want, to preserve references, is some kind of object-ID system that lets you find the referenced object in a way that does not depend on the memory layout of the application. This is one of the more trickier parts of serialization that Persyst can help with.

In the next chapters, we will talk about what information can be serialized with Persyst, and wether it is serialized as values or references. Also, for the particularly bold, we will discuss some ways to extend the system so you can [reference anything](/Know_more/Referencing_everything).