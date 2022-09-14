---
sidebar_position: 2
---
# UIDManager

Class that handles turning UIDs into references and vice-versa. It should always exist in every scene where you intend to use Persyst.

#### `public static UIDManager instance`
UIDManager is a Singleton. `instance` is a static reference to the instance (duh).

#### `public UnityEngine.Object GetObject(ulong UID)`
Returns the object registered with that UID. Can return `null` even if the UID is valid, if the object is not currently loaded.

#### `public static event System.Action OnManagerAvailable`
Invoked as soon as the `instance` variable becomes non-null. Useful for initializing things that require access to the UID manager.