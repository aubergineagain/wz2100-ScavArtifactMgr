# ScavArtifactMgr

This mod deletes scav artifacts so your minimap doesn't get spammed with green flashing beacons.

* Does not affect campaign or challenge maps.
* Does not affect human or AI player artifacts.

### Compatibility

I've only tested this on Warzone 2100 v4.6.1, but it will likely work on version 3.2 or above.

The mod alters `init.js` and is thus not compatible with other mods that alter the same file. If you want that
to change, please comment or emoji [this github issue](https://github.com/Warzone2100/warzone2100/issues/4649).

I've not tested this in multiplayer game, but it "should" work fine.

### Future plans

In future, I hope to add a `tweakOption` to allow replacing the artifacts with
oil drums. [API updates required for that to happen](https://github.com/Warzone2100/warzone2100/issues/4649)
