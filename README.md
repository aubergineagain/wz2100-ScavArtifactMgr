# ScavArtifactMgr

This mod deletes scavenger artifacts so your minimap doesn't get spammed with green flashing beacons.

* Designed for skirmish and multiplayer games. _(see compatibility section below)_
* Does not affect campaign or challenge maps.
* Does not affect human or AI player artifacts.
* It won't delete any scav artifacts that were dropped prior to installing the mod.

### Compatibility

I've only tested this on Warzone 2100 v4.6.1, but it will likely work on version 3.2 or above.

The mod alters `init.js` and is thus not compatible with other mods that alter the same file. If you want that
to change, please comment or emoji [this github issue](https://github.com/Warzone2100/warzone2100/issues/4649).

I've not tested this in multiplayer game, but it "should" work fine.

### Installation

1. Go to [Releases](https://github.com/aubergineagain/wz2100-ScavArtifactMgr/releases) page and download latest *`ScavArtifactMgr.zip`* file
2. Launch Warzone 2100, open `Options` menu, click `Open Configuration Directory` button (bottom left of menu)
3. Go in to `mods` then the version folder (eg. `4.6.1`) then `autoload`
4. Place the downloaded zip in the `autoload` folder

### Future plans

In future, I hope to add a `tweakOption` to allow replacing the artifacts with
oil drums. [API updates required for that to happen](https://github.com/Warzone2100/warzone2100/issues/4649)
