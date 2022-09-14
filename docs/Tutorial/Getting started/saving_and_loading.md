---
sidebar_position: 5
---

# Saving and loading

How to trigger the saving and loading.

The `GameSaver` component is responsible for moving data in and out of files, but it's the `PersistenObjects` that actually read and set the variables to the appropriate values. How do you get them to do it when you want?

## Automatically
The easiest option is to let Persyst handle this for you. By default, all `PersistentObjects` will have both `automaticallySave` and `automaticallyLoad` set to `true` (although you can change this in the inspector). When this is the case, the `PersistentObject` will be listening to events sent by the `GameSaver` component. These events are invoked when you call `readFile()` or `writeFile()`. 

When calling `readFile()`, all `PersistentObjects` will retrieve their own data from the `GameSaver` and update the relevant values. When calling `writeFile()`, the `PersistentObjects` will send their information to the `GameSaver` so it can be serialiazed.

While this is *super* easy (you literally have to do nothing), there are many situations where you might want to control the order in which objects are loaded.

:::caution
If using additive scene loading, fully automatic behaviour is not advised. The objects that are loaded "late" (object whose scene is not loaded when you call `readFile()`) will retrieve their data correctly, but objects that are unloaded when you call `writeFile()` will **not** write their data (as they do not exist at that time, and thus cannot receive the event). See the [Custom Events](#with-custom-events) section for a way to handle this while maintaining mostly-automatic behaviour.
:::

## Not automatically
This automatic behaviour can be disabled in two ways: changing the `automaticallySave` and `automaticallyLoad` variables in each individual `PersistentObject`, or passing an optional `bool` parameter to the `readFile()` and `writeFile()` functions, which makes them not fire the events. 

The first method can be used to single out specific `PersistentObjects` that have particular needs (for example, something that needs to be loaded after everything else), while the second method lets you handle the loading of everything yourself.

If you decide to do things yourself, there is even more control you can have over the granularity of the loading and saving processes. 

### By hand
You can call the `LoadObject()` and `SaveObject()` methods of a single `PersistentObject` manually.

```cs
//no parameters or anything: 
//these methods use reflection find everything tagged as saveable in this gameobject
GetComponent<PersistentObject>().LoadObject();
GetComponent<PersistentObject>().SaveObject();
```

### With custom events
You can create your own events to trigger the saving and loading. This is a very powerful option, as you can make all objects of a certain type load at the same time, but still after all objects of another:

```cs
public class MyManagerClass{
	public static System.EventHandler loadPlayer;
	public static System.EventHandler loadEnemies;
	
	void Start(){
		//you can be sure the player will load first, and then all the enemies
		//but oyu don't need to get a reference to each enemy to call their LoadObject()
		loadPlayer?.Invoke();
		loadEnemies?.Invoke()
	}
}

public class Enemy{
	//OnEnable because this should run before the event is called!
	void OnEnable(){
		GetComponent<PersistentObject>().registerCustomLoadEvent(MyManagerClass.loadEnemies);
	}
}
```

This method is also particularly important if you have multiple scenes that are loaded and unloaded additively. If you remove a scene, all `PersistentObjects` that live in it become no longer able to listen to the `GameSaver` events. As such, if you want their data to be serialized you would need to save it just before the scene is unloaded. For example, something like this:

```cs
public class MySceneManager{
	//instead of making this static, 
	//it might be a good idea to have an instance of this class in each scene, and use a tag to find it
	//that way, only objects in that particular scene receive the event
	public static System.EventHandler BeforeSceneUnloaded;

	void unloadScene(){
		BeforeSceneUnloaded?.Invoke();
		UnityEngine.SceneManager.UnloadSceneAsync("scene");
	}
}

```