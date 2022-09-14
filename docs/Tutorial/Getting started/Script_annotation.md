---
sidebar_position: 4
---

# Script annotation

Mostly, using Persyst consists on annotating scripts to tell the [PersistentObject](/) what to serialize. This comes in two forms: the `ISaveable` interface, and the `[SaveThis]` attribute. Both of them live in the namespace `Persyst`.

### ISaveable

You can mark any class as saveable by implementing the `ISaveable` interface, like so:

```cs
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


### The \[SaveThis\] Attribute

Inside of an `ISaveable` class, you can mark any field (and [most properties](Serializable_data)) to be serialized with the attribute `[SaveThis]`. The `PersistentObject` component attached to this `GameObject` will take it from there.

```cs
using Persyst;

public class SerializableMB : MonoBehaviour, ISaveable
{
    [SaveThis] int someValue;
    [SaveThis] GameObject someReference;
}
```

### Serializing classes that are not `ISaveable`

This interface is absolutely required for `MonoBehaviours`, but objects that are nested inside a `MonoBehaviour` can still be serialized even if their class is not tagged as `ISaveable`.

```cs
using Persyst;

public class SerializableMB : MonoBehaviour, ISaveable
{
  //both of these will be serialized
  [SaveThis] AnISaveableClass isaveableField;
  [SaveThis] NotISaveable nonIsaveableField; 
}

public class AnISaveableClass : ISaveable{
  //...
}

public class NotISaveable{
  //...
}
```

However, there are some restriction as to how the fields inside of `NotISaveable` will be serialized. `[SaveThis]` only really does something if it is inside of an `ISaveable` class. See [Nesting classes](/Tutorial/Know_more/Nesting_classes) and [Inheritance](/Tutorial/Know_more/inheritance) for more details on this.

:::tip
In general, I would recommend that **every** user-defined class that needs to be serialized implements `ISaveable`. It will make your life easier.
:::