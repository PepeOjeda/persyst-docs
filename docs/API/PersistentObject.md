---
sidebar_position: 1
---

# PersistentObject
The interface between Persyst and your `ISaveable` `MonoBehaviours`. It reads and writes the fields and properties that are marked with `[SaveThis]` or `[SaveAsInstanceType]`.


#### `public void SaveObject()`
Gathers all the saveable data and sends it to the `GameSaver` component. This does not trigger file-writing (see [GameSaver](GameSaver)) for that).

#### `public void LoadObject()`
Reads the saved data from the `GameSaver` component and writes it to the corresponding fields and properties. Does not trigger file-reading (the data needs to have already been read).

#### `public void registerCustomSaveEvent(System.EventHandler eventHandler)`
Sets a custom event that will trigger `SaveObject()`

#### `public void registerCustomLoadEvent(System.EventHandler eventHandler)`
Sets a custom event that will trigger `LoadObject()`

#### `public void removeCustomSaveEvent(System.EventHandler eventHandler)`
Removes a previously set event.

#### `public void removeCustomLoadEvent(System.EventHandler eventHandler)`
Removes a previously set event.

#### `bool loadAutomatically`
If true (default), will call `LoadObject()` as soon as the savefile is read and the `PersistentObject` is active.

#### `bool saveAutomatically`
If true (default), will call `SaveObject()` just before the `GameSaver` writes the data to a file.