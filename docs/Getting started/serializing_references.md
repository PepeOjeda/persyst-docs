---
sidebar_position: 6
---

# Serializing references

Beyond the same [basics](script_annotation) that apply to serializing everything else, there are some extra rules when serializing references. 

## Persistent objects for everyone

If you have a `MonoBehaviour` like this:

```
public class MyData : MonoBehaviour, ISaveable
{
    [SaveThis] GameObject otherGO;
}
```

In order for the reference to be properly serialized, you need to add a `PersistentObject` to **both** this object and the referenced one. This is required because only objects with a `PersistentObject` component have a UID, and UIDs are [how references are serialized](Fundamentals_of_serialization). This also applies to referencing a `Component`, like this:

```
public class MyData : MonoBehaviour, ISaveable
{
    [SaveThis] Transform otherTransform;
    [SaveThis] MB otherMonoBehaviour;
}
```

:::tip
In the case above, the custom `MonoBehaviour` class MB **does not need** to implement `ISaveable`. The only important thing is that it is attached to a `GameObject` that has a `PersistentObject`.
:::

Again all of this is necesary because the only objects with a UID are those with a `PersistentObject`. 

Wait... the only ones?

## ScriptableObjects

You can reference `ScriptableObjects` too! But wait, a `ScriptableObject` can't have `Components`... so how does it get a UID? Well, like this:

```
public class SO : SerializableScriptableObject{ 
}
```

The base class `SerializableScriptableObject` does everything you need, so  you just need to inherit from it. If you already have a complex inheritance tree with ropes and pulleys, and are despairing over not being able to use this, may I reming you that every tree has a root. If the base class derives from `SerializableScriptableObject`, then they all do. And thus, they can all be referenced.

:::caution
If you are using a [one-manager-per-scene](scene_setup) setup, the UIDs of `ScriptableObject` instances will be stored in all of them (it gets stored the first time you open the scene after creating the `ScriptableObject`). This is fine, and actually desirable, as it means you can reference it from anywhere. However, when you delete the `ScriptableObject`, it's UID will only be removed from the manager which is open at that point in time. This won't break the system or anything, but if for some reason you are creating and deleting lots of `ScriptableObjects`, it will create lots of useless entries in every UID manager, adding (a bit) to the memory footprint of the application for no good reason at all.

That's mainly why the [one-manager-in-its-own-scene](scene_setup) setup is preferable.
:::