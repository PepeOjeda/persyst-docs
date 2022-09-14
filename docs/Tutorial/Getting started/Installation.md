---
sidebar_position: 2
---

# Installation

How to install?

## Dependencies

### Newtonsoft Json

Find it [here](https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@3.0/manual/index.html). I believe these days it comes pre-installed with all Unity versions, but if you need help with this, see [this guide](https://github.com/jilleJr/Newtonsoft.Json-for-Unity/wiki/Install-official-via-UPM).

### SRP Core Library

[This](https://docs.unity3d.com/Packages/com.unity.render-pipelines.core@12.1/manual/index.html) is only required for the SerializedDictionary class. Honestly, I could use a different implementation of it that's not part of a big library, but I figured this was actually more convenient since most people will be either be using URP or HDRP and thus have the SRP Core installed anyways. If you are using the built-in RP, you need to install this on its own through the Package Manager.

### NaughtyAttributes

Available [here](https://github.com/dbrizov/NaughtyAttributes). Used to make some buttons in the inspector. Feel free to edit the files and remove the attributes if for some reason you don't want to install NaughtyAttributes, as none the buttons are technically required (although they are quite convenient). 

## Installing Persyst itself

Once that's done, installing [Persyst](https://github.com/PepeOjeda/Persyst) is as easy as dragging the '*scripts*' folder into your Unity project's '*Assets*' folder. 

Yup. That's it.