---
sidebar_position: 5
---

# The Pending References System
How are references retrieved when loading? 

You might have wondered why the restrictions explained in other sections exist. Some of them are due to this.

:::note
You do not need to know how this works to use Persyst.
:::

## The UID Manager
References are serialized through the use of UIDs. The `UIDManager`, which sits somewhere in your scene, is responsible for turning a UID read from the file into an actual C# reference to an object. This is done by using a `Dictionary`, where the keys are UIDs and the values are the references.

When retrieving a reference to another object, you need the UID Manager to have that reference. However, because Unity objects (specially those that live in scenes) have somewhat convoluted life cycles (the fact that this is all running on top of a C++ application is mostly to blame for this), it's possible that the object that your script is trying to reference does not exist *yet*. Or, it is marked as destroyed wven though it exists. Or it is part of another scene. Or...

Long story short, there is no assurance the UID Manager will have the reference ready when the `PersistentObject` that wants it is loaded. This could, to some extent, be handled by carefully managing the order in which objects are loaded through their reference dependencies. However, this would be very difficult, would run into problems with reference loops, and would not fix the cases that are due to cross-scene references.

And so, the pending references system.

## Pending references
When an object `a` is loaded and it requests a reference to another object `b` through b's UID, but the UID Manager does not have the reference to `b` ready, `a` gets added to an internal list of pending references. Really, it's another `Dictionary`, where a key is the UID of a not-yet-loaded object, and the value is a list of all the objects that want a reference to it. 

When a new object is loaded, the UIDManager checks whether someone was waiting to get a reference to it, and, if so, sets the value of the reference automatically. And so, objects can generally be loaded in any order, regardless of their reference dependencies (although it might still be a good idea to [manually handle the order](/Tutorial/Getting%20started/saving_and_loading) when setting properties that do further initialization as part of their setter.)

While this is almost entirely opaque to the user, there are some cases where understanding the behaviour of this system can be important. For example, when using cross-scene references, which will remain `null` while the scene of the target is unloaded, but automatically update when the scene is loaded.