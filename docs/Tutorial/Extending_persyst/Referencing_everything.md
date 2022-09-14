---
sidebar_position: 2
---

# Referencing everything

This is not really an easy thing to do. At this point, you are kind of implementing new features for Persyst, so the code you need to write is no longer just a copule of attributes and a property here and there. 

I would still recommend not getting into this at all, and trying to organize your data in a way that only requires the features of base Persyst. I'm honestly not sure this is the best way to handle reference serialization anyways. That being said, I will give a working example, so that you can at least get an idea of how to make things work for your project.

The general idea is one that should be familiar by now: serializing UIDs. We will have this class: 
```cs
public class Item_tracker : MonoBehaviour, ISaveable
{
	public static Dictionary<ulong, Item> items = new Dictionary<ulong, Item>();
    public static Item_tracker instance;

	[SaveThis] Dictionary<ulong, Item> _items{
		get{return items;}
		set{items = value;}
	}

	void OnEnable(){
		if(instance!=null && instance != this)
			Destroy(instance);

		instance = this;
	}

	public ulong registerItem(Item item){
        System.Random random = new System.Random();
		byte[] buf = new byte[8]; 
		ulong value;
		do{
			random.NextBytes(buf);
			value = (ulong)System.BitConverter.ToInt64(buf, 0);
		}while(items.ContainsKey(value));
		
		items.Add(value, item);
		return value;
	}

}
```

to manage that. You can see that we are serializing a dictionary that maps UIDs to instances of our `Item` class. When we deserialize it, we will be creating all the instances and storing them in memory. Now, for the other part of the puzzle:

```cs
public class Item {
	public ulong uid {get;} //the uid is set in the constructor and cannot be modified

	//you can put any other data in here and make this class ISaveable, if you want it to actually do something

	public Item(){
		uid = Item_tracker.instance.registerItem(this);
	}
}

public class ItemWrapper : ISaveable{
	[SaveThis] ulong uid{
		get{return item!=null? item.uid : 0;}
		set{item = Item_tracker.items[value];} //the object instance is recovered automatically when you read the UID from the savefile!
	}

	public Item item;
}
```

The whole game here is that we are not going to serialize references to `Item` directly, but instead we are going to serialize `ItemWrapper`. Thus, the only thing we are going to serialize is the UID of the referenced `Item`. When that is deserialized, the setter of the property will query `Item_tracker` and retrieve a reference to the actual object.

Now, this works, but there are several problems with it. 

For starters, you have to [manually manage the loading order](/docs/Tutorial/Getting%20started/saving_and_loading.md), to make sure the `Item_tracker` is loaded before any references are to be retrieved. Otherwise, you will be tryig to reference objects that have not been created yet. You can always try to implement your own version of the [pending references system](/docs/Tutorial/Know_more/Pending_references.md), but I would not recommend going that way.

Also, none of this plays nicely with Unity's serialization, so you kind of need to choose which one it's going to be: serializing references with Persyst, or using Unity's ` [SerializeField]`. "Both" is a headache waiting to happen. This does not apply to regular by-value Persyst serialization.