---
sidebar_position: 4
---

# Script annotation

Mostly, using Persyst consists on annotating scripts to tell the [PersistentObject](/) what to serialize. This comes in two forms: the `ISaveable` interface, and the `[SaveThis]` attribute. Both of them live in the namespace `Persyst`.

### ISaveable

You can mark any MonoBehaviour as saveable by implementing the `ISaveable` interface, like so:

```
using Persyst;

public class SerializableMB : MonoBehaviour, ISaveable
{
}
```

The interface does not contain any methods that you need to implement. It's just a tag.

<details>
  <summary>Why an interface, then? Why not an attribute?</summary>
  <div>
    If you must know, it's because it lets me gather all the relevant components doing <code>GetComponents&lt;ISaveable&gt;()</code> inside of the PersistentObject. It could have been an attribute as well, this is just very slightly more convenient.
  </div>
</details>

This is absolutely required for `MonoBehaviours`, but objects of a class that does not inherit from `UnityEngine.Object` can still be serialized even if not tagged as `ISaveable`, so long as they are members of a saveable `MonoBehaviour`. [Next chapter](Serializable_data) will explain this in more detail.


### The \[SaveThis\] Attribute

Inside of an `ISaveable` `MonoBehaviour`, you can mark any field (and [most properties](Serializable_data)) to be serialized with the attribute `[SaveThis]`. The `PersistentObject` component attached to this `GameObject` will take it from there.

```
using Persyst;

public class SerializableMB : MonoBehaviour, ISaveable
{
    [SaveThis] int someValue;
    [SaveThis] GameObject someReference;
}
```