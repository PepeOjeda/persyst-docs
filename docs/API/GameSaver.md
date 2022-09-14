---
sidebar_position: 3
---
# GameSaver
Class that handles file reading and writing. Can also fire events to trigger saving and loading on the `PersistentObjects` that are marked as automatic.

#### `public void readFile(string path = "Assets/saveFile.json", bool fireLoadEvent = true)`
Reads the file and stores its contents in an internal `Dictionary`. If `fireLoadEvent` is true (default), it will invoke `OnSaveFileLoaded`.

#### `public static event System.Action OnSaveFileLoaded`
Event called after loading a file with `readFile`, if `fireLoadEvent` is `true`.


#### `public void writeToFile(string path = "Assets/saveFile.json", bool fireSaveEvent = true)`
Writes to the file from the internal `Dictionary`. If `fireSaveEvent` is true (default), it will invoke `OnSavingGame`.

#### `public static event System.Action OnSavingGame`
Event called before writing to a file with `writeToFile`, if `fireSaveEvent` is `true`.