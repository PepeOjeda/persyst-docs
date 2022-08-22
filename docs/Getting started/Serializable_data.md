---
sidebar_position: 5
---

# What can be serialized?

We will now talk about the types of data that can be serialized with Persyst, and whether they are [serialized as values or references](Fundamentals_of_serialization).

:::note
Please keep in mind that the point of Persyst is to serialize *runtime* data. It does not ***replace*** Unity's built-in serialization. In fact, it handles an entirely separate task that Unity's serialization simply does not do. What that means is that some of the limitations we are about to discuss are way less important than they might initially seem. 

For example, not being able to serialize a reference to an AudioClip with Persyst is fairly irrelevant, as you are probably going to be assigning that reference in the Unity Editor, and using Unity's serialization for that.
:::

All primitive datatypes (`int`, `string`, `bool`) are serializable with Persyst, and will be serialized as **values**.

References to `GameObjects`, `Components`, and `Scriptable Objects`can be serialized, and will be serialized as **references**. See [serializing references](serializing_references) for details. 
Other `UnityEngine.Objects` (e.g. `AudioClip`) are currently not supported. 

Instances of objects that do not inherit from `UnityEngine.Object` can be serialized, but only as **values**. [Unless](/).

Collections can be serialized, but they are kind of [a long story](/Know%20more/Collections.md).

You can serialize any `Fields`. You can also serialize `Properties`, as long as they have both a `getter` and a `setter`. Visibility (`public`, `private`, etc.) is irrelevant. 

:::tip
You can serialize the same member with both Persyst and the Unity serialization system, and that will work just fine too. In fact, this is a very common thing to do. Usually, you want to use Unity's serialization to set the "default value" of something &mdash;the value that it will have when you start a new game, or when you reach a certain level for the first time&mdash; in the editor. Then, you use Persyst to update the value as it's changed during playing.


Of course, when both serialized values exist, Persyst wins, as loading the save file data happens **after** the object is loaded into the scene, and thus the "default value" assigned by Unity's serialization is then overwritten.
:::

## Where can the serialized data be?

`MonoBehaviours` that implement `ISaveable`. That's it.

Wait, wait! I can already hear you yelling "Is there no way to serialize the values of other components? Can I not store the position of a `Transform`? This plugin is useless!".

But here's the thing. You actually can store it. Because the question of *where* the data is... well, it's a matter of perspective, really.

Take this property, as an example:

```
[SaveThis] Vector3 position{
    get{return transform.position;}
    set{transform.position = value;}
}
```
Well, the data is *really* stored in the `Transform` component... but the property's right here, in my conveniently serializable `MonoBehaviour`. And the property lets me `get` and `set` the data. So, in a way, it's as if the data was here, isn't it?

Well, that argument might not convince **you**, but it convinces the C# Reflection system, whose opinion somewhat is more important for getting Persyst to work. 

So, if you add that code to your `MonoBehaviour`, the position of the object will be saved and loaded automatically.

:::note
Just to be clear, this does not mean you now need to always access transform.position though this property. You can keep using it as you always have. This property is only important because having something inside the `MonoBehaviour` means the `PersistentObject` can see it.
:::

Alternatively, instead of adding the property to a `MonoBehaviour` that is already handling other game logic, you could have a completely separate `MonoBehaviour` component whose whole job is to contain this property. And that works! In fact, that is exactly what the [Transform Saver](/) component, which you can find in the `Utils` directory, does.

Hopefully you can see that this is not because of some special quirk of `Transforms`, but rather it is a trick that we can use for everything. Any value on any other `Component` (`Colliders`, `Rigidbodies`) that you can `set` and `get` from your `MonoBehaviour` can get the same treatment.


...


And how about serializing private members of other `Components`? Well... few things are impossible if you are [really bold](/).