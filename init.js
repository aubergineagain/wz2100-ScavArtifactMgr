// @ts-check

namespace('ScavArtifactMgr_');

// Mod state
const mod = {
    enabled: false,
    replaceWithDrum: false,
}

/*
Initialize mod for session.
*/
function ScavArtifactMgr_eventStartLevel()
{
    // TODO: Tweaks don't currently work for non-campaign mods yet
    const tweakOptions = { ScavArtifactMgr_ReplaceWithOilDrum: false };

    mod.enabled = scavengers && !challenge;
    mod.replaceWithDrum = tweakOptions.ScavArtifactMgr_ReplaceWithOilDrum;

    if (mod.enabled)
    {
        const mode = mod.replaceWithDrum
            ? 'Replace with oil drum'
            : 'Delete artifacts';

        // TODO: `eventStartLevel()` fires before game UI visible so this won't show
        // See: https://github.com/Warzone2100/warzone2100/issues/4599
        chat(ALL_PLAYERS, '[Mod] ScavArtifactMgr: ' + mode);
    }
}

/**
 * @param {DroidObject|StructureObject|FeatureObject} obj Object that was destroyed
*/
function ScavArtifactMgr_eventDestroyed(obj)
{
    if (!mod.enabled || obj.type !== STRUCTURE || obj.player !== scavengerPlayer)
    {
        return;
    }

    // Get whatever is now at site of destruction
    const { x, y } = obj
    const loot = getObject(x, y);
    if (!loot || loot.stattype !== ARTIFACT)
    {
        return;
    }

    // Delete artifact
    removeObject(loot);

    if (mod.replaceWithDrum)
    {
        hackNetOff();
        addFeature('OilDrum', x, y);
        hackNetOn();
    }
}
