---
sidebar_position: 1
---

# Collections

You can serialize collections, but there are some caveats.

## Which collections

Currently, only some collections are supported. 

Those would be: `Lists`, `Arrays`, and `Dictionaries`. Support for more of them will be added at some point in the not-too-distant future. Adding support for custom-made collections is also planned, by having an interface that your custom collection should implement. But, alas, not yet.

## Collections of references and the RefWrapper class

A variable of type `List<GameObject>` (or `List<Component>`, or any other `UnityEngine.Object`) is a collection of references. This would *technically* work with the current serialization system, but it would create some issues with the [Pending References System](Pending_references). And by "issues", I mean the pending references would be entirely ignored. I felt this half-working, half-not behaviour would create a lot of confusion, so I made the call to make collections of `UnityEngine.Object` **not a thing**. 

:::caution
If you try to serialize a `List<UnityEngine.Object>`, you will get an error message and the collection will be ignored.
:::

:::tip Rejoice!
But, good news! You can still serialize collections of references. You just need to add a RefWrapper around the reference itself. `List<RefWrapper<UnityEngine.Object>>` serializes just fine, and maintains your references, including those that are pending at the time of loading.
:::

<details>
  <summary>Why do collections of naked references not work?</summary>
  <div>
    As I said, it's because of how the Pending References system works. Essentially, the system stores a MemberInfo variable to the Field of Property that wanted to get a reference. You can think of this as a reference-to-the-reference (not really in the sense of C-style pointers-to-pointers, this is just some Reflection data, not actual memory addresses). 
    <br/>
    <br/>
    Sadly, as far as I know there is no way to get a similar thing for elements of a collection, because any specific element in the collection is not a members of the collection class. Therefore, there is no way to recover the variable that wanted to get a reference when the referenced object does become available.
  </div>
</details>
 