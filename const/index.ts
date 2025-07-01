import { AdvancementType, Version } from "@/enums";
import { Advancement } from "@/types";

export const advancements: Record<Version, Advancement[]> = {
  [Version.V1_13]: [
    {
      type: AdvancementType.ADVENTURE,
      name: "Adventuring Time",
      description: "Discover every biome",
    },
    {
      type: AdvancementType.NETHER,
      name: "How Did We Get Here?",
      description: "Have every effect applied at the same time",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Furious Cocktail",
      description: "Have every potion effect applied at the same time",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Balanced Diet",
      description:
        "Eat everything that is edible, even if it's not good for you",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Serious Dedication",
      description:
        "Completely use up a diamond hoe, and then reevaluate your life choices",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Two by Two",
      description: "Breed all the animals!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Parrots and the Bats",
      description: "Breed two animals together",
    },
    {
      type: AdvancementType.NETHER,
      name: "Local Brewery",
      description: "Brew a potion",
    },
    {
      type: AdvancementType.NETHER,
      name: "Bring Home the Beacon",
      description: "Construct and place a Beacon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Beaconator",
      description: "Bring a beacon to full power",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Zombie Doctor",
      description: "Weaken and then cure a Zombie Villager",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Not Today, Thank You",
      description: "Deflect an arrow with a shield",
    },
    {
      type: AdvancementType.END,
      name: "You Need a Mint",
      description: "Collect dragon's breath in a glass bottle",
    },
    {
      type: AdvancementType.END,
      name: "The Next Generation",
      description: "Hold the Dragon Egg",
    },
    {
      type: AdvancementType.END,
      name: "Sky's the Limit",
      description: "Find Elytra",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Enchanter",
      description: "Enchant an item at an Enchanting Table",
    },
    {
      type: AdvancementType.END,
      name: "Remote Getaway",
      description: "Escape the island",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "The End?",
      description: "Enter the End Portal",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "We Need to Go Deeper",
      description: "Build, light and enter a Nether Portal",
    },
    {
      type: AdvancementType.NETHER,
      name: "Subspace Bubble",
      description: "Use the Nether to travel 7 km in the Overworld",
    },
    {
      type: AdvancementType.END,
      name: "The City at the End of the Game",
      description: "Go on in, what could happen?",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Terrible Fortress",
      description: "Break your way into a Nether Fortress",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Fishy Business",
      description: "Catch a fish",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Eye Spy",
      description: "Follow an Eye of Ender",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Ice Bucket Challenge",
      description: "Form and mine a block of Obsidian",
    },
    {
      type: AdvancementType.NETHER,
      name: "Spooky Scary Skeleton",
      description: "Obtain a Wither Skeleton's skull",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Isn't It Iron Pick",
      description: "Upgrade your pickaxe",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monsters Hunted",
      description: "Kill one of every hostile monster",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monster Hunter",
      description: "Kill any hostile monster",
    },
    {
      type: AdvancementType.END,
      name: "Free the End",
      description: "Good luck",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Hot Stuff",
      description: "Fill a bucket with lava",
    },
    {
      type: AdvancementType.END,
      name: "Great View From Up Here",
      description: "Levitate up 50 blocks from the attacks of a Shulker",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Diamonds!",
      description: "Acquire diamonds",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Stone Age",
      description: "Mine stone with your new pickaxe",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Suit Up",
      description: "Protect yourself with a piece of iron armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Into Fire",
      description: "Relieve a Blaze of its rod",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Seedy Place",
      description: "Plant a seed and watch it grow",
    },
    {
      type: AdvancementType.END,
      name: "The End... Again...",
      description: "Respawn the Ender Dragon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Return to Sender",
      description: "Destroy a Ghast with a fireball",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Cover Me With Diamonds",
      description: "Diamond armor saves lives",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Take Aim",
      description: "Shoot something with a bow and arrow",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sweet Dreams",
      description: "Change your respawn point",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Acquire Hardware",
      description: "Smelt an iron ingot",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sniper Duel",
      description: "Kill a Skeleton from at least 50 meters away",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hired Help",
      description: "Summon an Iron Golem to help defend a village",
    },
    {
      type: AdvancementType.NETHER,
      name: "Withering Heights",
      description: "Summon the Wither",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Tactical Fishing",
      description: "Catch a fish... without a fishing rod!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Best Friends Forever",
      description: "Tame an animal",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "A Throwaway Joke",
      description:
        "Throw a trident at something. Note: Throwing away your only weapon is not a good idea.",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Postmortal",
      description: "Use a Totem of Undying to cheat death",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "What a Deal!",
      description: "Successfully trade with a Villager",
    },
    {
      type: AdvancementType.NETHER,
      name: "Uneasy Alliance",
      description:
        "Rescue a Ghast from the Nether, bring it safely home to the Overworld... and then kill it",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Getting an Upgrade",
      description: "Construct a better pickaxe",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Very Very Frightening",
      description: "Strike a Villager with lightning",
    },
  ],
  [Version.V1_14]: [
    {
      type: AdvancementType.ADVENTURE,
      name: "Adventuring Time",
      description: "Discover every biome",
    },
    {
      type: AdvancementType.NETHER,
      name: "How Did We Get Here?",
      description: "Have every effect applied at the same time",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Furious Cocktail",
      description: "Have every potion effect applied at the same time",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Arbalistic",
      description: "Kill five unique mobs with one crossbow shot",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Balanced Diet",
      description:
        "Eat everything that is edible, even if it's not good for you",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Serious Dedication",
      description:
        "Completely use up a diamond hoe, and then reevaluate your life choices",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Two by Two",
      description: "Breed all the animals!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Parrots and the Bats",
      description: "Breed two animals together",
    },
    {
      type: AdvancementType.NETHER,
      name: "Local Brewery",
      description: "Brew a potion",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Complete Catalogue",
      description: "Tame all cat variants!",
    },
    {
      type: AdvancementType.NETHER,
      name: "Bring Home the Beacon",
      description: "Construct and place a Beacon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Beaconator",
      description: "Bring a beacon to full power",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Zombie Doctor",
      description: "Weaken and then cure a Zombie Villager",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Not Today, Thank You",
      description: "Deflect an arrow with a shield",
    },
    {
      type: AdvancementType.END,
      name: "You Need a Mint",
      description: "Collect dragon's breath in a glass bottle",
    },
    {
      type: AdvancementType.END,
      name: "The Next Generation",
      description: "Hold the Dragon Egg",
    },
    {
      type: AdvancementType.END,
      name: "Sky's the Limit",
      description: "Find Elytra",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Enchanter",
      description: "Enchant an item at an Enchanting Table",
    },
    {
      type: AdvancementType.END,
      name: "Remote Getaway",
      description: "Escape the island",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "The End?",
      description: "Enter the End Portal",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "We Need to Go Deeper",
      description: "Build, light and enter a Nether Portal",
    },
    {
      type: AdvancementType.NETHER,
      name: "Subspace Bubble",
      description: "Use the Nether to travel 7 km in the Overworld",
    },
    {
      type: AdvancementType.END,
      name: "The City at the End of the Game",
      description: "Go on in, what could happen?",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Terrible Fortress",
      description: "Break your way into a Nether Fortress",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Fishy Business",
      description: "Catch a fish",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Eye Spy",
      description: "Follow an Eye of Ender",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Ice Bucket Challenge",
      description: "Form and mine a block of Obsidian",
    },
    {
      type: AdvancementType.NETHER,
      name: "Spooky Scary Skeleton",
      description: "Obtain a Wither Skeleton's skull",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hero of the Village",
      description: "Successfully defend a village from a raid",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Isn't It Iron Pick",
      description: "Upgrade your pickaxe",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monsters Hunted",
      description: "Kill one of every hostile monster",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monster Hunter",
      description: "Kill any hostile monster",
    },
    {
      type: AdvancementType.END,
      name: "Free the End",
      description: "Good luck",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Hot Stuff",
      description: "Fill a bucket with lava",
    },
    {
      type: AdvancementType.END,
      name: "Great View From Up Here",
      description: "Levitate up 50 blocks from the attacks of a Shulker",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Diamonds!",
      description: "Acquire diamonds",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Stone Age",
      description: "Mine stone with your new pickaxe",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Suit Up",
      description: "Protect yourself with a piece of iron armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Into Fire",
      description: "Relieve a Blaze of its rod",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Ol' Betsy",
      description: "Shoot a crossbow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Seedy Place",
      description: "Plant a seed and watch it grow",
    },
    {
      type: AdvancementType.END,
      name: "The End... Again...",
      description: "Respawn the Ender Dragon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Return to Sender",
      description: "Destroy a Ghast with a fireball",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Cover Me With Diamonds",
      description: "Diamond armor saves lives",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Take Aim",
      description: "Shoot something with a bow and arrow",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sweet Dreams",
      description: "Change your respawn point",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Acquire Hardware",
      description: "Smelt an iron ingot",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sniper Duel",
      description: "Kill a Skeleton from at least 50 meters away",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hired Help",
      description: "Summon an Iron Golem to help defend a village",
    },
    {
      type: AdvancementType.NETHER,
      name: "Withering Heights",
      description: "Summon the Wither",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Tactical Fishing",
      description: "Catch a fish... without a fishing rod!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Best Friends Forever",
      description: "Tame an animal",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "A Throwaway Joke",
      description:
        "Throw a trident at something. Note: Throwing away your only weapon is not a good idea.",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Postmortal",
      description: "Use a Totem of Undying to cheat death",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "What a Deal!",
      description: "Successfully trade with a Villager",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Two Birds, One Arrow",
      description: "Kill two Phantoms with a piercing arrow",
    },
    {
      type: AdvancementType.NETHER,
      name: "Uneasy Alliance",
      description:
        "Rescue a Ghast from the Nether, bring it safely home to the Overworld... and then kill it",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Getting an Upgrade",
      description: "Construct a better pickaxe",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Very Very Frightening",
      description: "Strike a Villager with lightning",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Voluntary Exile",
      description:
        "Kill a raid captain. Maybe consider staying away from villages for the time being...",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Who's the Pillager Now?",
      description: "Give a Pillager a taste of their own medicine",
    },
  ],
  [Version.V1_15]: [
    {
      type: AdvancementType.ADVENTURE,
      name: "Adventuring Time",
      description: "Discover every biome",
    },
    {
      type: AdvancementType.NETHER,
      name: "How Did We Get Here?",
      description: "Have every effect applied at the same time",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Furious Cocktail",
      description: "Have every potion effect applied at the same time",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Arbalistic",
      description: "Kill five unique mobs with one crossbow shot",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Balanced Diet",
      description:
        "Eat everything that is edible, even if it's not good for you",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Serious Dedication",
      description:
        "Completely use up a diamond hoe, and then reevaluate your life choices",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Two by Two",
      description: "Breed all the animals!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Parrots and the Bats",
      description: "Breed two animals together",
    },
    {
      type: AdvancementType.NETHER,
      name: "Local Brewery",
      description: "Brew a potion",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Complete Catalogue",
      description: "Tame all cat variants!",
    },
    {
      type: AdvancementType.NETHER,
      name: "Bring Home the Beacon",
      description: "Construct and place a Beacon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Beaconator",
      description: "Bring a beacon to full power",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Zombie Doctor",
      description: "Weaken and then cure a Zombie Villager",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Not Today, Thank You",
      description: "Deflect an arrow with a shield",
    },
    {
      type: AdvancementType.END,
      name: "You Need a Mint",
      description: "Collect dragon's breath in a glass bottle",
    },
    {
      type: AdvancementType.END,
      name: "The Next Generation",
      description: "Hold the Dragon Egg",
    },
    {
      type: AdvancementType.END,
      name: "Sky's the Limit",
      description: "Find Elytra",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Enchanter",
      description: "Enchant an item at an Enchanting Table",
    },
    {
      type: AdvancementType.END,
      name: "Remote Getaway",
      description: "Escape the island",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "The End?",
      description: "Enter the End Portal",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "We Need to Go Deeper",
      description: "Build, light and enter a Nether Portal",
    },
    {
      type: AdvancementType.NETHER,
      name: "Subspace Bubble",
      description: "Use the Nether to travel 7 km in the Overworld",
    },
    {
      type: AdvancementType.END,
      name: "The City at the End of the Game",
      description: "Go on in, what could happen?",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Terrible Fortress",
      description: "Break your way into a Nether Fortress",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Fishy Business",
      description: "Catch a fish",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Eye Spy",
      description: "Follow an Eye of Ender",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Ice Bucket Challenge",
      description: "Form and mine a block of Obsidian",
    },
    {
      type: AdvancementType.NETHER,
      name: "Spooky Scary Skeleton",
      description: "Obtain a Wither Skeleton's skull",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hero of the Village",
      description: "Successfully defend a village from a raid",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sticky Situation",
      description: "Jump into a Honey Block to break your fall",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Isn't It Iron Pick",
      description: "Upgrade your pickaxe",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monsters Hunted",
      description: "Kill one of every hostile monster",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monster Hunter",
      description: "Kill any hostile monster",
    },
    {
      type: AdvancementType.END,
      name: "Free the End",
      description: "Good luck",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Hot Stuff",
      description: "Fill a bucket with lava",
    },
    {
      type: AdvancementType.END,
      name: "Great View From Up Here",
      description: "Levitate up 50 blocks from the attacks of a Shulker",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Diamonds!",
      description: "Acquire diamonds",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Stone Age",
      description: "Mine stone with your new pickaxe",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Suit Up",
      description: "Protect yourself with a piece of iron armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Into Fire",
      description: "Relieve a Blaze of its rod",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Ol' Betsy",
      description: "Shoot a crossbow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Seedy Place",
      description: "Plant a seed and watch it grow",
    },
    {
      type: AdvancementType.END,
      name: "The End... Again...",
      description: "Respawn the Ender Dragon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Return to Sender",
      description: "Destroy a Ghast with a fireball",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Bee Our Guest",
      description:
        "Use a Campfire to collect Honey from a Beehive using a Bottle without aggravating the bees",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Cover Me With Diamonds",
      description: "Diamond armor saves lives",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Take Aim",
      description: "Shoot something with a bow and arrow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Total Beelocation",
      description: "Move a Bee Nest, with 3 bees inside, using Silk Touch",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sweet Dreams",
      description: "Change your respawn point",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Acquire Hardware",
      description: "Smelt an iron ingot",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sniper Duel",
      description: "Kill a Skeleton from at least 50 meters away",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hired Help",
      description: "Summon an Iron Golem to help defend a village",
    },
    {
      type: AdvancementType.NETHER,
      name: "Withering Heights",
      description: "Summon the Wither",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Tactical Fishing",
      description: "Catch a fish... without a fishing rod!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Best Friends Forever",
      description: "Tame an animal",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "A Throwaway Joke",
      description:
        "Throw a trident at something. Note: Throwing away your only weapon is not a good idea.",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Postmortal",
      description: "Use a Totem of Undying to cheat death",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "What a Deal!",
      description: "Successfully trade with a Villager",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Two Birds, One Arrow",
      description: "Kill two Phantoms with a piercing arrow",
    },
    {
      type: AdvancementType.NETHER,
      name: "Uneasy Alliance",
      description:
        "Rescue a Ghast from the Nether, bring it safely home to the Overworld... and then kill it",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Getting an Upgrade",
      description: "Construct a better pickaxe",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Very Very Frightening",
      description: "Strike a Villager with lightning",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Voluntary Exile",
      description:
        "Kill a raid captain. Maybe consider staying away from villages for the time being...",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Who's the Pillager Now?",
      description: "Give a Pillager a taste of their own medicine",
    },
  ],
  [Version.V1_16]: [
    {
      type: AdvancementType.ADVENTURE,
      name: "Adventuring Time",
      description: "Discover every biome",
    },
    {
      type: AdvancementType.NETHER,
      name: "How Did We Get Here?",
      description: "Have every effect applied at the same time",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Furious Cocktail",
      description: "Have every potion effect applied at the same time",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Arbalistic",
      description: "Kill five unique mobs with one crossbow shot",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Balanced Diet",
      description:
        "Eat everything that is edible, even if it's not good for you",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Two by Two",
      description: "Breed all the animals!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Parrots and the Bats",
      description: "Breed two animals together",
    },
    {
      type: AdvancementType.NETHER,
      name: "Local Brewery",
      description: "Brew a potion",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Bullseye",
      description:
        "Hit the bullseye of a Target block from at least 30 meters away",
    },
    {
      type: AdvancementType.NETHER,
      name: 'Not Quite "Nine" Lives',
      description: "Charge a Respawn Anchor to the maximum",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Complete Catalogue",
      description: "Tame all cat variants!",
    },
    {
      type: AdvancementType.NETHER,
      name: "Bring Home the Beacon",
      description: "Construct and place a beacon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Beaconator",
      description: "Bring a beacon to full power",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Zombie Doctor",
      description: "Weaken and then cure a Zombie Villager",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Not Today, Thank You",
      description: "Deflect a projectile with a shield",
    },
    {
      type: AdvancementType.NETHER,
      name: "Oh Shiny",
      description: "Distract Piglins with gold",
    },
    {
      type: AdvancementType.END,
      name: "You Need a Mint",
      description: "Collect dragon's breath in a glass bottle",
    },
    {
      type: AdvancementType.END,
      name: "The Next Generation",
      description: "Hold the Dragon Egg",
    },
    {
      type: AdvancementType.END,
      name: "Sky's the Limit",
      description: "Find elytra",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Enchanter",
      description: "Enchant an item at an Enchanting Table",
    },
    {
      type: AdvancementType.END,
      name: "Remote Getaway",
      description: "Escape the island",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "The End?",
      description: "Enter the End Portal",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "We Need to Go Deeper",
      description: "Build, light and enter a Nether Portal",
    },
    {
      type: AdvancementType.NETHER,
      name: "Hot Tourist Destinations",
      description: "Explore all Nether biomes",
    },
    {
      type: AdvancementType.NETHER,
      name: "Subspace Bubble",
      description: "Use the Nether to travel 7 km in the Overworld",
    },
    {
      type: AdvancementType.NETHER,
      name: "Those Were the Days",
      description: "Enter a Bastion Remnant",
    },
    {
      type: AdvancementType.END,
      name: "The City at the End of the Game",
      description: "Go on in, what could happen?",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Terrible Fortress",
      description: "Break your way into a Nether Fortress",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Fishy Business",
      description: "Catch a fish",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Eye Spy",
      description: "Follow an Eye of Ender",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Ice Bucket Challenge",
      description: "Obtain a block of obsidian",
    },
    {
      type: AdvancementType.NETHER,
      name: "Spooky Scary Skeleton",
      description: "Obtain a Wither Skeleton's skull",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hero of the Village",
      description: "Successfully defend a village from a raid",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sticky Situation",
      description: "Jump into a Honey Block to break your fall",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Isn't It Iron Pick",
      description: "Upgrade your pickaxe",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monsters Hunted",
      description: "Kill one of every hostile monster",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monster Hunter",
      description: "Kill any hostile monster",
    },
    {
      type: AdvancementType.END,
      name: "Free the End",
      description: "Good luck",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Hot Stuff",
      description: "Fill a bucket with lava",
    },
    {
      type: AdvancementType.END,
      name: "Great View From Up Here",
      description: "Levitate up 50 blocks from the attacks of a Shulker",
    },
    {
      type: AdvancementType.NETHER,
      name: "War Pigs",
      description: "Loot a chest in a Bastion Remnant",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Diamonds!",
      description: "Acquire diamonds",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Stone Age",
      description: "Mine stone with your new pickaxe",
    },
    {
      type: AdvancementType.NETHER,
      name: "Cover Me in Debris",
      description: "Get a full suit of Netherite armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Hidden in the Depths",
      description: "Obtain Ancient Debris",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Suit Up",
      description: "Protect yourself with a piece of iron armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Into Fire",
      description: "Relieve a Blaze of its rod",
    },
    {
      type: AdvancementType.NETHER,
      name: "Who is Cutting Onions?",
      description: "Obtain Crying Obsidian",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Serious Dedication",
      description:
        "Use a Netherite ingot to upgrade a hoe, and then reevaluate your life choices",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Ol' Betsy",
      description: "Shoot a crossbow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Seedy Place",
      description: "Plant a seed and watch it grow",
    },
    {
      type: AdvancementType.END,
      name: "The End... Again...",
      description: "Respawn the Ender Dragon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Return to Sender",
      description: "Destroy a Ghast with a fireball",
    },
    {
      type: AdvancementType.NETHER,
      name: "This Boat Has Legs",
      description: "Ride a Strider with a Warped Fungus on a Stick",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Bee Our Guest",
      description:
        "Use a Campfire to collect Honey from a Beehive using a Bottle without aggravating the bees",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Cover Me With Diamonds",
      description: "Diamond armor saves lives",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Take Aim",
      description: "Shoot something with an arrow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Total Beelocation",
      description: "Move a Bee Nest, with 3 bees inside, using Silk Touch",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sweet Dreams",
      description: "Sleep in a bed to change your respawn point",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Acquire Hardware",
      description: "Smelt an iron ingot",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sniper Duel",
      description: "Kill a Skeleton from at least 50 meters away",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hired Help",
      description: "Summon an Iron Golem to help defend a village",
    },
    {
      type: AdvancementType.NETHER,
      name: "Withering Heights",
      description: "Summon the Wither",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Tactical Fishing",
      description: "Catch a fish... without a fishing rod!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Best Friends Forever",
      description: "Tame an animal",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "A Throwaway Joke",
      description:
        "Throw a trident at something. Note: Throwing away your only weapon is not a good idea.",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Postmortal",
      description: "Use a Totem of Undying to cheat death",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "What a Deal!",
      description: "Successfully trade with a Villager",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Two Birds, One Arrow",
      description: "Kill two Phantoms with a piercing arrow",
    },
    {
      type: AdvancementType.NETHER,
      name: "Uneasy Alliance",
      description:
        "Rescue a Ghast from the Nether, bring it safely home to the Overworld... and then kill it",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Getting an Upgrade",
      description: "Construct a better pickaxe",
    },
    {
      type: AdvancementType.NETHER,
      name: "Country Lode, Take Me Home",
      description: "Use a compass on a Lodestone",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Very Very Frightening",
      description: "Strike a Villager with lightning",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Voluntary Exile",
      description:
        "Kill a raid captain. Maybe consider staying away from villages for the time being...",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Who's the Pillager Now?",
      description: "Give a Pillager a taste of their own medicine",
    },
  ],
  [Version.V1_17]: [
    {
      type: AdvancementType.ADVENTURE,
      name: "Adventuring Time",
      description: "Discover every biome",
    },
    {
      type: AdvancementType.NETHER,
      name: "How Did We Get Here?",
      description: "Have every effect applied at the same time",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Furious Cocktail",
      description: "Have every potion effect applied at the same time",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Arbalistic",
      description: "Kill five unique mobs with one crossbow shot",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Cutest Predator",
      description: "Catch an axolotl in a bucket",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Balanced Diet",
      description:
        "Eat everything that is edible, even if it's not good for you",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Two by Two",
      description: "Breed all the animals!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Parrots and the Bats",
      description: "Breed two animals together",
    },
    {
      type: AdvancementType.NETHER,
      name: "Local Brewery",
      description: "Brew a potion",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Bullseye",
      description:
        "Hit the bullseye of a Target block from at least 30 meters away",
    },
    {
      type: AdvancementType.NETHER,
      name: 'Not Quite "Nine" Lives',
      description: "Charge a Respawn Anchor to the maximum",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Complete Catalogue",
      description: "Tame all cat variants!",
    },
    {
      type: AdvancementType.NETHER,
      name: "Bring Home the Beacon",
      description: "Construct and place a beacon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Beaconator",
      description: "Bring a beacon to full power",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Zombie Doctor",
      description: "Weaken and then cure a Zombie Villager",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Not Today, Thank You",
      description: "Deflect a projectile with a shield",
    },
    {
      type: AdvancementType.NETHER,
      name: "Oh Shiny",
      description: "Distract Piglins with gold",
    },
    {
      type: AdvancementType.END,
      name: "You Need a Mint",
      description: "Collect dragon's breath in a glass bottle",
    },
    {
      type: AdvancementType.END,
      name: "The Next Generation",
      description: "Hold the Dragon Egg",
    },
    {
      type: AdvancementType.END,
      name: "Sky's the Limit",
      description: "Find elytra",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Enchanter",
      description: "Enchant an item at an Enchanting Table",
    },
    {
      type: AdvancementType.END,
      name: "Remote Getaway",
      description: "Escape the island",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "The End?",
      description: "Enter the End Portal",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "We Need to Go Deeper",
      description: "Build, light and enter a Nether Portal",
    },
    {
      type: AdvancementType.NETHER,
      name: "Hot Tourist Destinations",
      description: "Explore all Nether biomes",
    },
    {
      type: AdvancementType.NETHER,
      name: "Subspace Bubble",
      description: "Use the Nether to travel 7 km in the Overworld",
    },
    {
      type: AdvancementType.NETHER,
      name: "Those Were the Days",
      description: "Enter a Bastion Remnant",
    },
    {
      type: AdvancementType.END,
      name: "The City at the End of the Game",
      description: "Go on in, what could happen?",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Terrible Fortress",
      description: "Break your way into a Nether Fortress",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Fishy Business",
      description: "Catch a fish",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Eye Spy",
      description: "Follow an Eye of Ender",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Ice Bucket Challenge",
      description: "Obtain a block of obsidian",
    },
    {
      type: AdvancementType.NETHER,
      name: "Spooky Scary Skeleton",
      description: "Obtain a Wither Skeleton's skull",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hero of the Village",
      description: "Successfully defend a village from a raid",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sticky Situation",
      description: "Jump into a Honey Block to break your fall",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Isn't It Iron Pick",
      description: "Upgrade your pickaxe",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monsters Hunted",
      description: "Kill one of every hostile monster",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Healing Power of Friendship!",
      description: "Team up with an axolotl and win a fight",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monster Hunter",
      description: "Kill any hostile monster",
    },
    {
      type: AdvancementType.END,
      name: "Free the End",
      description: "Good luck",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Hot Stuff",
      description: "Fill a bucket with lava",
    },
    {
      type: AdvancementType.END,
      name: "Great View From Up Here",
      description: "Levitate up 50 blocks from the attacks of a Shulker",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Surge Protector",
      description:
        "Protect a villager from an undesired shock without starting a fire",
    },
    {
      type: AdvancementType.NETHER,
      name: "War Pigs",
      description: "Loot a chest in a Bastion Remnant",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Glow and Behold!",
      description: "Make the text of a sign glow",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Diamonds!",
      description: "Acquire diamonds",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Stone Age",
      description: "Mine stone with your new pickaxe",
    },
    {
      type: AdvancementType.NETHER,
      name: "Cover Me in Debris",
      description: "Get a full suit of Netherite armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Hidden in the Depths",
      description: "Obtain Ancient Debris",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Suit Up",
      description: "Protect yourself with a piece of iron armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Into Fire",
      description: "Relieve a Blaze of its rod",
    },
    {
      type: AdvancementType.NETHER,
      name: "Who is Cutting Onions?",
      description: "Obtain Crying Obsidian",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Serious Dedication",
      description:
        "Use a Netherite ingot to upgrade a hoe, and then reevaluate your life choices",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Ol' Betsy",
      description: "Shoot a crossbow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Seedy Place",
      description: "Plant a seed and watch it grow",
    },
    {
      type: AdvancementType.END,
      name: "The End... Again...",
      description: "Respawn the Ender Dragon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Return to Sender",
      description: "Destroy a Ghast with a fireball",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Whatever Floats Your Goat!",
      description: "Get in a Boat and float with a Goat",
    },
    {
      type: AdvancementType.NETHER,
      name: "This Boat Has Legs",
      description: "Ride a Strider with a Warped Fungus on a Stick",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Bee Our Guest",
      description:
        "Use a Campfire to collect Honey from a Beehive using a Bottle without aggravating the bees",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Cover Me with Diamonds",
      description: "Diamond armor saves lives",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Take Aim",
      description: "Shoot something with an arrow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Total Beelocation",
      description: "Move a Bee Nest, with 3 bees inside, using Silk Touch",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sweet Dreams",
      description: "Sleep in a bed to change your respawn point",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Acquire Hardware",
      description: "Smelt an iron ingot",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sniper Duel",
      description: "Kill a Skeleton from at least 50 meters away",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Plane?",
      description: "Look at the Ender Dragon through a spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Balloon?",
      description: "Look at a ghast through a spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Bird?",
      description: "Look at a parrot through a spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hired Help",
      description: "Summon an Iron Golem to help defend a village",
    },
    {
      type: AdvancementType.NETHER,
      name: "Withering Heights",
      description: "Summon the Wither",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Tactical Fishing",
      description: "Catch a fish... without a fishing rod!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Best Friends Forever",
      description: "Tame an animal",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "A Throwaway Joke",
      description:
        "Throw a trident at something. Note: Throwing away your only weapon is not a good idea.",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Postmortal",
      description: "Use a Totem of Undying to cheat death",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "What a Deal!",
      description: "Successfully trade with a Villager",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Two Birds, One Arrow",
      description: "Kill two Phantoms with a piercing arrow",
    },
    {
      type: AdvancementType.NETHER,
      name: "Uneasy Alliance",
      description:
        "Rescue a Ghast from the Nether, bring it safely home to the Overworld... and then kill it",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Getting an Upgrade",
      description: "Construct a better pickaxe",
    },
    {
      type: AdvancementType.NETHER,
      name: "Country Lode, Take Me Home",
      description: "Use a compass on a Lodestone",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Very Very Frightening",
      description: "Strike a Villager with lightning",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Voluntary Exile",
      description:
        "Kill a raid captain. Maybe consider staying away from villages for the time being...",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Light as a Rabbit",
      description: "Walk on powder snow...without sinking in it",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Wax Off",
      description: "Scrape Wax off of a Copper block!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Wax On",
      description: "Apply Honeycomb to a Copper block!",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Who's the Pillager Now?",
      description: "Give a Pillager a taste of their own medicine",
    },
  ],
  [Version.V1_18]: [
    {
      type: AdvancementType.ADVENTURE,
      name: "Adventuring Time",
      description: "Discover every biome",
    },
    {
      type: AdvancementType.NETHER,
      name: "How Did We Get Here?",
      description: "Have every effect applied at the same time",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Furious Cocktail",
      description: "Have every potion effect applied at the same time",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Arbalistic",
      description: "Kill five unique mobs with one crossbow shot",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Cutest Predator",
      description: "Catch an axolotl in a bucket",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Balanced Diet",
      description:
        "Eat everything that is edible, even if it's not good for you",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Two by Two",
      description: "Breed all the animals!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Parrots and the Bats",
      description: "Breed two animals together",
    },
    {
      type: AdvancementType.NETHER,
      name: "Local Brewery",
      description: "Brew a potion",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Bullseye",
      description:
        "Hit the bullseye of a Target block from at least 30 meters away",
    },
    {
      type: AdvancementType.NETHER,
      name: 'Not Quite "Nine" Lives',
      description: "Charge a Respawn Anchor to the maximum",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Complete Catalogue",
      description: "Tame all cat variants!",
    },
    {
      type: AdvancementType.NETHER,
      name: "Bring Home the Beacon",
      description: "Construct and place a beacon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Beaconator",
      description: "Bring a beacon to full power",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Zombie Doctor",
      description: "Weaken and then cure a Zombie Villager",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Not Today, Thank You",
      description: "Deflect a projectile with a shield",
    },
    {
      type: AdvancementType.NETHER,
      name: "Oh Shiny",
      description: "Distract Piglins with gold",
    },
    {
      type: AdvancementType.END,
      name: "You Need a Mint",
      description: "Collect dragon's breath in a glass bottle",
    },
    {
      type: AdvancementType.END,
      name: "The Next Generation",
      description: "Hold the Dragon Egg",
    },
    {
      type: AdvancementType.END,
      name: "Sky's the Limit",
      description: "Find elytra",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Enchanter",
      description: "Enchant an item at an Enchanting Table",
    },
    {
      type: AdvancementType.END,
      name: "Remote Getaway",
      description: "Escape the island",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "The End?",
      description: "Enter the End Portal",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "We Need to Go Deeper",
      description: "Build, light and enter a Nether Portal",
    },
    {
      type: AdvancementType.NETHER,
      name: "Hot Tourist Destinations",
      description: "Explore all Nether biomes",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Caves & Cliffs",
      description:
        "Free fall from the top of the world (build limit) to the bottom of the world and survive",
    },
    {
      type: AdvancementType.NETHER,
      name: "Subspace Bubble",
      description: "Use the Nether to travel 7 km in the Overworld",
    },
    {
      type: AdvancementType.NETHER,
      name: "Those Were the Days",
      description: "Enter a Bastion Remnant",
    },
    {
      type: AdvancementType.END,
      name: "The City at the End of the Game",
      description: "Go on in, what could happen?",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Terrible Fortress",
      description: "Break your way into a Nether Fortress",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Fishy Business",
      description: "Catch a fish",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Eye Spy",
      description: "Follow an Eye of Ender",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Ice Bucket Challenge",
      description: "Obtain a block of obsidian",
    },
    {
      type: AdvancementType.NETHER,
      name: "Spooky Scary Skeleton",
      description: "Obtain a Wither Skeleton's skull",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hero of the Village",
      description: "Successfully defend a village from a raid",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sticky Situation",
      description: "Jump into a Honey Block to break your fall",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Isn't It Iron Pick",
      description: "Upgrade your pickaxe",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monsters Hunted",
      description: "Kill one of every hostile monster",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Healing Power of Friendship!",
      description: "Team up with an axolotl and win a fight",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monster Hunter",
      description: "Kill any hostile monster",
    },
    {
      type: AdvancementType.END,
      name: "Free the End",
      description: "Good luck",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Hot Stuff",
      description: "Fill a bucket with lava",
    },
    {
      type: AdvancementType.END,
      name: "Great View From Up Here",
      description: "Levitate up 50 blocks from the attacks of a Shulker",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Surge Protector",
      description:
        "Protect a villager from an undesired shock without starting a fire",
    },
    {
      type: AdvancementType.NETHER,
      name: "War Pigs",
      description: "Loot a chest in a Bastion Remnant",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Glow and Behold!",
      description: "Make the text of a sign glow",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Diamonds!",
      description: "Acquire diamonds",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Stone Age",
      description: "Mine stone with your new pickaxe",
    },
    {
      type: AdvancementType.NETHER,
      name: "Cover Me in Debris",
      description: "Get a full suit of Netherite armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Hidden in the Depths",
      description: "Obtain Ancient Debris",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Suit Up",
      description: "Protect yourself with a piece of iron armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Into Fire",
      description: "Relieve a Blaze of its rod",
    },
    {
      type: AdvancementType.NETHER,
      name: "Who is Cutting Onions?",
      description: "Obtain Crying Obsidian",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Serious Dedication",
      description:
        "Use a Netherite ingot to upgrade a hoe, and then reevaluate your life choices",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Ol' Betsy",
      description: "Shoot a crossbow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Seedy Place",
      description: "Plant a seed and watch it grow",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sound of Music",
      description:
        "Make the Meadows come alive with the sound of music from a jukebox",
    },
    {
      type: AdvancementType.END,
      name: "The End... Again...",
      description: "Respawn the Ender Dragon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Return to Sender",
      description: "Destroy a Ghast with a fireball",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Whatever Floats Your Goat!",
      description: "Get in a Boat and float with a Goat",
    },
    {
      type: AdvancementType.NETHER,
      name: "This Boat Has Legs",
      description: "Ride a Strider with a Warped Fungus on a Stick",
    },
    {
      type: AdvancementType.NETHER,
      name: "Feels like home",
      description:
        "Take a Strider for a loooong ride on a lava lake in the Overworld",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Bee Our Guest",
      description:
        "Use a Campfire to collect Honey from a Beehive using a Bottle without aggravating the bees",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Cover Me with Diamonds",
      description: "Diamond armor saves lives",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Take Aim",
      description: "Shoot something with an arrow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Total Beelocation",
      description: "Move a Bee Nest, with 3 bees inside, using Silk Touch",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sweet Dreams",
      description: "Sleep in a bed to change your respawn point",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Acquire Hardware",
      description: "Smelt an iron ingot",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sniper Duel",
      description: "Kill a Skeleton from at least 50 meters away",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Plane?",
      description: "Look at the Ender Dragon through a spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Balloon?",
      description: "Look at a ghast through a spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Bird?",
      description: "Look at a parrot through a spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hired Help",
      description: "Summon an Iron Golem to help defend a village",
    },
    {
      type: AdvancementType.NETHER,
      name: "Withering Heights",
      description: "Summon the Wither",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Tactical Fishing",
      description: "Catch a fish... without a fishing rod!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Best Friends Forever",
      description: "Tame an animal",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "A Throwaway Joke",
      description:
        "Throw a trident at something. Note: Throwing away your only weapon is not a good idea.",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Postmortal",
      description: "Use a Totem of Undying to cheat death",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "What a Deal!",
      description: "Successfully trade with a Villager",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Star Trader",
      description: "Trade with a villager at the build height limit",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Two Birds, One Arrow",
      description: "Kill two Phantoms with a piercing arrow",
    },
    {
      type: AdvancementType.NETHER,
      name: "Uneasy Alliance",
      description:
        "Rescue a Ghast from the Nether, bring it safely home to the Overworld... and then kill it",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Getting an Upgrade",
      description: "Construct a better pickaxe",
    },
    {
      type: AdvancementType.NETHER,
      name: "Country Lode, Take Me Home",
      description: "Use a compass on a Lodestone",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Very Very Frightening",
      description: "Strike a Villager with lightning",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Voluntary Exile",
      description:
        "Kill a raid captain. Maybe consider staying away from villages for the time being...",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Light as a Rabbit",
      description: "Walk on powder snow...without sinking in it",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Wax Off",
      description: "Scrape Wax off of a Copper block!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Wax On",
      description: "Apply Honeycomb to a Copper block!",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Who's the Pillager Now?",
      description: "Give a Pillager a taste of their own medicine",
    },
  ],
  [Version.V1_19]: [
    {
      type: AdvancementType.ADVENTURE,
      name: "Adventuring Time",
      description: "Discover every biome",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Birthday Song",
      description: "Have an Allay drop a Cake at a Note Block",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "You've Got a Friend in Me",
      description: "Have an Allay deliver items to you",
    },
    {
      type: AdvancementType.NETHER,
      name: "How Did We Get Here?",
      description: "Have every effect applied at the same time",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Furious Cocktail",
      description: "Have every potion effect applied at the same time",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Arbalistic",
      description: "Kill five unique mobs with one crossbow shot",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sneak 100",
      description:
        "Sneak near a Sculk Sensor or Warden to prevent it from detecting you",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Cutest Predator",
      description: "Catch an Axolotl in a Bucket",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Balanced Diet",
      description:
        "Eat everything that is edible, even if it's not good for you",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Two by Two",
      description: "Breed all the animals!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Parrots and the Bats",
      description: "Breed two animals together",
    },
    {
      type: AdvancementType.NETHER,
      name: "Local Brewery",
      description: "Brew a Potion",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Bullseye",
      description:
        "Hit the bullseye of a Target block from at least 30 meters away",
    },
    {
      type: AdvancementType.NETHER,
      name: 'Not Quite "Nine" Lives',
      description: "Charge a Respawn Anchor to the maximum",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Complete Catalogue",
      description: "Tame all Cat variants!",
    },
    {
      type: AdvancementType.NETHER,
      name: "Bring Home the Beacon",
      description: "Construct and place a Beacon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Beaconator",
      description: "Bring a Beacon to full power",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Zombie Doctor",
      description: "Weaken and then cure a Zombie Villager",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Not Today, Thank You",
      description: "Deflect a projectile with a Shield",
    },
    {
      type: AdvancementType.NETHER,
      name: "Oh Shiny",
      description: "Distract Piglins with gold",
    },
    {
      type: AdvancementType.END,
      name: "You Need a Mint",
      description: "Collect Dragon's Breath in a Glass Bottle",
    },
    {
      type: AdvancementType.END,
      name: "The Next Generation",
      description: "Hold the Dragon Egg",
    },
    {
      type: AdvancementType.END,
      name: "Sky's the Limit",
      description: "Find Elytra",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Enchanter",
      description: "Enchant an item at an Enchanting Table",
    },
    {
      type: AdvancementType.END,
      name: "Remote Getaway",
      description: "Escape the island",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "The End?",
      description: "Enter the End Portal",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "We Need to Go Deeper",
      description: "Build, light and enter a Nether Portal",
    },
    {
      type: AdvancementType.NETHER,
      name: "Hot Tourist Destinations",
      description: "Explore all Nether biomes",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Caves & Cliffs",
      description:
        "Free fall from the top of the world (build limit) to the bottom of the world and survive",
    },
    {
      type: AdvancementType.NETHER,
      name: "Subspace Bubble",
      description: "Use the Nether to travel 7 km in the Overworld",
    },
    {
      type: AdvancementType.NETHER,
      name: "Those Were the Days",
      description: "Enter a Bastion Remnant",
    },
    {
      type: AdvancementType.END,
      name: "The City at the End of the Game",
      description: "Go on in, what could happen?",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Terrible Fortress",
      description: "Break your way into a Nether Fortress",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Fishy Business",
      description: "Catch a fish",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Eye Spy",
      description: "Follow an Eye of Ender",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Ice Bucket Challenge",
      description: "Obtain a block of Obsidian",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "With Our Powers Combined!",
      description: "Have all Froglights in your inventory",
    },
    {
      type: AdvancementType.NETHER,
      name: "Spooky Scary Skeleton",
      description: "Obtain a Wither Skeleton's skull",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hero of the Village",
      description: "Successfully defend a village from a raid",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sticky Situation",
      description: "Jump into a Honey Block to break your fall",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Isn't It Iron Pick",
      description: "Upgrade your Pickaxe",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monsters Hunted",
      description: "Kill one of every hostile monster",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Healing Power of Friendship!",
      description: "Team up with an Axolotl and win a fight",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monster Hunter",
      description: "Kill any hostile monster",
    },
    {
      type: AdvancementType.END,
      name: "Free the End",
      description: "Good luck",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "It Spreads",
      description: "Kill a mob near a Sculk Catalyst",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Hot Stuff",
      description: "Fill a Bucket with lava",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "When the Squad Hops into Town",
      description: "Get each Frog variant on a Lead",
    },
    {
      type: AdvancementType.END,
      name: "Great View From Up Here",
      description: "Levitate up 50 blocks from the attacks of a Shulker",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Surge Protector",
      description:
        "Protect a Villager from an undesired shock without starting a fire",
    },
    {
      type: AdvancementType.NETHER,
      name: "War Pigs",
      description: "Loot a Chest in a Bastion Remnant",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Glow and Behold!",
      description: "Make the text of any kind of sign glow",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Diamonds!",
      description: "Acquire diamonds",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Stone Age",
      description: "Mine Stone with your new Pickaxe",
    },
    {
      type: AdvancementType.NETHER,
      name: "Cover Me in Debris",
      description: "Get a full suit of Netherite armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Hidden in the Depths",
      description: "Obtain Ancient Debris",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Suit Up",
      description: "Protect yourself with a piece of iron armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Into Fire",
      description: "Relieve a Blaze of its rod",
    },
    {
      type: AdvancementType.NETHER,
      name: "Who is Cutting Onions?",
      description: "Obtain Crying Obsidian",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Serious Dedication",
      description:
        "Use a Netherite Ingot to upgrade a Hoe, and then reevaluate your life choices",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Ol' Betsy",
      description: "Shoot a Crossbow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Seedy Place",
      description: "Plant a seed and watch it grow",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sound of Music",
      description:
        "Make the Meadows come alive with the sound of music from a Jukebox",
    },
    {
      type: AdvancementType.END,
      name: "The End... Again...",
      description: "Respawn the Ender Dragon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Return to Sender",
      description: "Destroy a Ghast with a fireball",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Whatever Floats Your Goat!",
      description: "Get in a Boat and float with a Goat",
    },
    {
      type: AdvancementType.NETHER,
      name: "This Boat Has Legs",
      description: "Ride a Strider with a Warped Fungus on a Stick",
    },
    {
      type: AdvancementType.NETHER,
      name: "Feels Like Home",
      description:
        "Take a Strider for a loooong ride on a lava lake in the Overworld",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Bee Our Guest",
      description:
        "Use a Campfire to collect Honey from a Beehive using a Bottle without aggravating the Bees",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Cover Me with Diamonds",
      description: "Diamond armor saves lives",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Take Aim",
      description: "Shoot something with an Arrow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Total Beelocation",
      description: "Move a Bee Nest, with 3 Bees inside, using Silk Touch",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sweet Dreams",
      description: "Sleep in a Bed to change your respawn point",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Acquire Hardware",
      description: "Smelt an Iron Ingot",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sniper Duel",
      description: "Kill a Skeleton from at least 50 meters away",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Plane?",
      description: "Look at the Ender Dragon through a Spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Balloon?",
      description: "Look at a Ghast through a Spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Bird?",
      description: "Look at a Parrot through a Spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hired Help",
      description: "Summon an Iron Golem to help defend a village",
    },
    {
      type: AdvancementType.NETHER,
      name: "Withering Heights",
      description: "Summon the Wither",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Tactical Fishing",
      description: "Catch a Fish... without a Fishing Rod!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Bukkit Bukkit",
      description: "Catch a Tadpole in a Bucket",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Best Friends Forever",
      description: "Tame an animal",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "A Throwaway Joke",
      description:
        "Throw a Trident at something. Note: Throwing away your only weapon is not a good idea.",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Postmortal",
      description: "Use a Totem of Undying to cheat death",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "What a Deal!",
      description: "Successfully trade with a Villager",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Star Trader",
      description: "Trade with a Villager at the build height limit",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Two Birds, One Arrow",
      description: "Kill two Phantoms with a piercing Arrow",
    },
    {
      type: AdvancementType.NETHER,
      name: "Uneasy Alliance",
      description:
        "Rescue a Ghast from the Nether, bring it safely home to the Overworld... and then kill it",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Getting an Upgrade",
      description: "Construct a better Pickaxe",
    },
    {
      type: AdvancementType.NETHER,
      name: "Country Lode, Take Me Home",
      description: "Use a Compass on a Lodestone",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Very Very Frightening",
      description: "Strike a Villager with lightning",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Voluntary Exile",
      description:
        "Kill a raid captain. Maybe consider staying away from villages for the time being...",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Light as a Rabbit",
      description: "Walk on Powder Snow...without sinking in it",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Wax Off",
      description: "Scrape Wax off of a Copper block!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Wax On",
      description: "Apply Honeycomb to a Copper block!",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Who's the Pillager Now?",
      description: "Give a Pillager a taste of their own medicine",
    },
  ],
  [Version.V1_20]: [
    {
      type: AdvancementType.ADVENTURE,
      name: "Adventuring Time",
      description: "Discover every biome",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Birthday Song",
      description: "Have an Allay drop a Cake at a Note Block",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "You've Got a Friend in Me",
      description: "Have an Allay deliver items to you",
    },
    {
      type: AdvancementType.NETHER,
      name: "How Did We Get Here?",
      description: "Have every effect applied at the same time",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Furious Cocktail",
      description: "Have every potion effect applied at the same time",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Arbalistic",
      description: "Kill five unique mobs with one crossbow shot",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sneak 100",
      description:
        "Sneak near a Sculk Sensor or Warden to prevent it from detecting you",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Cutest Predator",
      description: "Catch an Axolotl in a Bucket",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Balanced Diet",
      description:
        "Eat everything that is edible, even if it's not good for you",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Two by Two",
      description: "Breed all the animals!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Parrots and the Bats",
      description: "Breed two animals together",
    },
    {
      type: AdvancementType.NETHER,
      name: "Local Brewery",
      description: "Brew a Potion",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Isn't It Scute?",
      description: "Get Armadillo Scutes from an Armadillo using a Brush",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Bullseye",
      description:
        "Hit the bullseye of a Target block from at least 30 meters away",
    },
    {
      type: AdvancementType.NETHER,
      name: 'Not Quite "Nine" Lives',
      description: "Charge a Respawn Anchor to the maximum",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Complete Catalogue",
      description: "Tame all Cat variants!",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Careful Restoration",
      description: "Make a Decorated Pot out of 4 Pottery Sherds",
    },
    {
      type: AdvancementType.NETHER,
      name: "Bring Home the Beacon",
      description: "Construct and place a Beacon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Beaconator",
      description: "Bring a Beacon to full power",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Zombie Doctor",
      description: "Weaken and then cure a Zombie Villager",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Not Today, Thank You",
      description: "Deflect a projectile with a Shield",
    },
    {
      type: AdvancementType.NETHER,
      name: "Oh Shiny",
      description: "Distract Piglins with gold",
    },
    {
      type: AdvancementType.END,
      name: "You Need a Mint",
      description: "Collect Dragon's Breath in a Glass Bottle",
    },
    {
      type: AdvancementType.END,
      name: "The Next Generation",
      description: "Hold the Dragon Egg",
    },
    {
      type: AdvancementType.END,
      name: "Sky's the Limit",
      description: "Find Elytra",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Enchanter",
      description: "Enchant an item at an Enchanting Table",
    },
    {
      type: AdvancementType.END,
      name: "Remote Getaway",
      description: "Escape the island",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "The End?",
      description: "Enter the End Portal",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "We Need to Go Deeper",
      description: "Build, light and enter a Nether Portal",
    },
    {
      type: AdvancementType.NETHER,
      name: "Hot Tourist Destinations",
      description: "Explore all Nether biomes",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Caves & Cliffs",
      description:
        "Free fall from the top of the world (build limit) to the bottom of the world and survive",
    },
    {
      type: AdvancementType.NETHER,
      name: "Subspace Bubble",
      description: "Use the Nether to travel 7 km in the Overworld",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Little Sniffs",
      description: "Feed a Snifflet",
    },
    {
      type: AdvancementType.NETHER,
      name: "Those Were the Days",
      description: "Enter a Bastion Remnant",
    },
    {
      type: AdvancementType.END,
      name: "The City at the End of the Game",
      description: "Go on in, what could happen?",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Terrible Fortress",
      description: "Break your way into a Nether Fortress",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Fishy Business",
      description: "Catch a fish",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Eye Spy",
      description: "Follow an Eye of Ender",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Ice Bucket Challenge",
      description: "Obtain a block of Obsidian",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "With Our Powers Combined!",
      description: "Have all Froglights in your inventory",
    },
    {
      type: AdvancementType.NETHER,
      name: "Spooky Scary Skeleton",
      description: "Obtain a Wither Skeleton's skull",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hero of the Village",
      description: "Successfully defend a village from a raid",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sticky Situation",
      description: "Jump into a Honey Block to break your fall",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Isn't It Iron Pick",
      description: "Upgrade your Pickaxe",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monsters Hunted",
      description: "Kill one of every hostile monster",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Healing Power of Friendship!",
      description: "Team up with an Axolotl and win a fight",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monster Hunter",
      description: "Kill any hostile monster",
    },
    {
      type: AdvancementType.END,
      name: "Free the End",
      description: "Good luck",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "It Spreads",
      description: "Kill a mob near a Sculk Catalyst",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Hot Stuff",
      description: "Fill a Bucket with lava",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "When the Squad Hops into Town",
      description: "Get each Frog variant on a Lead",
    },
    {
      type: AdvancementType.END,
      name: "Great View From Up Here",
      description: "Levitate up 50 blocks from the attacks of a Shulker",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Surge Protector",
      description:
        "Protect a Villager from an undesired shock without starting a fire",
    },
    {
      type: AdvancementType.NETHER,
      name: "War Pigs",
      description: "Loot a Chest in a Bastion Remnant",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Glow and Behold!",
      description: "Make the text of any kind of sign glow",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Diamonds!",
      description: "Acquire diamonds",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Stone Age",
      description: "Mine Stone with your new Pickaxe",
    },
    {
      type: AdvancementType.NETHER,
      name: "Cover Me in Debris",
      description: "Get a full suit of Netherite armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Hidden in the Depths",
      description: "Obtain Ancient Debris",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Suit Up",
      description: "Protect yourself with a piece of iron armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Into Fire",
      description: "Relieve a Blaze of its rod",
    },
    {
      type: AdvancementType.NETHER,
      name: "Who is Cutting Onions?",
      description: "Obtain Crying Obsidian",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Serious Dedication",
      description:
        "Use a Netherite Ingot to upgrade a Hoe, and then reevaluate your life choices",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Smells Interesting",
      description: "Obtain a Sniffer Egg",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Ol' Betsy",
      description: "Shoot a Crossbow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Planting the Past",
      description: "Plant any Sniffer seed",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Seedy Place",
      description: "Plant a seed and watch it grow",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sound of Music",
      description:
        "Make the Meadows come alive with the sound of music from a Jukebox",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "The Power of Books",
      description:
        "Read the power signal of a Chiseled Bookshelf using a Comparator",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Shear Brilliance",
      description: "Remove Wolf Armor from a Wolf using Shears",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Good as New",
      description: "Repair a damaged Wolf Armor using Armadillo Scutes",
    },
    {
      type: AdvancementType.END,
      name: "The End... Again...",
      description: "Respawn the Ender Dragon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Return to Sender",
      description: "Destroy a Ghast with a fireball",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Whatever Floats Your Goat!",
      description: "Get in a Boat and float with a Goat",
    },
    {
      type: AdvancementType.NETHER,
      name: "This Boat Has Legs",
      description: "Ride a Strider with a Warped Fungus on a Stick",
    },
    {
      type: AdvancementType.NETHER,
      name: "Feels Like Home",
      description:
        "Take a Strider for a loooong ride on a lava lake in the Overworld",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Bee Our Guest",
      description:
        "Use a Campfire to collect Honey from a Beehive using a Glass Bottle without aggravating the Bees",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Respecting the Remnants",
      description: "Brush a Suspicious block to obtain a Pottery Sherd",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Cover Me with Diamonds",
      description: "Diamond armor saves lives",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Take Aim",
      description: "Shoot something with an Arrow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Total Beelocation",
      description: "Move a Bee Nest, with 3 Bees inside, using Silk Touch",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sweet Dreams",
      description: "Sleep in a Bed to change your respawn point",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Acquire Hardware",
      description: "Smelt an Iron Ingot",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sniper Duel",
      description: "Kill a Skeleton from at least 50 meters away",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Plane?",
      description: "Look at the Ender Dragon through a Spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Balloon?",
      description: "Look at a Ghast through a Spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Bird?",
      description: "Look at a Parrot through a Spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hired Help",
      description: "Summon an Iron Golem to help defend a village",
    },
    {
      type: AdvancementType.NETHER,
      name: "Withering Heights",
      description: "Summon the Wither",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Tactical Fishing",
      description: "Catch a Fish... without a Fishing Rod!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Bukkit Bukkit",
      description: "Catch a Tadpole in a Bucket",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Best Friends Forever",
      description: "Tame an animal",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "A Throwaway Joke",
      description:
        "Throw a Trident at something. Note: Throwing away your only weapon is not a good idea.",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Postmortal",
      description: "Use a Totem of Undying to cheat death",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "What a Deal!",
      description: "Successfully trade with a Villager",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Star Trader",
      description: "Trade with a Villager at the build height limit",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Smithing with Style",
      description:
        "Apply these smithing templates at least once: Spire, Snout, Rib, Ward, Silence, Vex, Tide, Wayfinder",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Crafting a New Look",
      description: "Craft a trimmed armor at a Smithing Table",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Two Birds, One Arrow",
      description: "Kill two Phantoms with a piercing Arrow",
    },
    {
      type: AdvancementType.NETHER,
      name: "Uneasy Alliance",
      description:
        "Rescue a Ghast from the Nether, bring it safely home to the Overworld... and then kill it",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Getting an Upgrade",
      description: "Construct a better Pickaxe",
    },
    {
      type: AdvancementType.NETHER,
      name: "Country Lode, Take Me Home",
      description: "Use a Compass on a Lodestone",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Very Very Frightening",
      description: "Strike a Villager with lightning",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Voluntary Exile",
      description:
        "Kill a raid captain. Maybe consider staying away from villages for the time being...",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Light as a Rabbit",
      description: "Walk on Powder Snow... without sinking in it",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Wax Off",
      description: "Scrape Wax off of a Copper block!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Wax On",
      description: "Apply Honeycomb to a Copper block!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Whole Pack",
      description: "Tame one of each Wolf variant",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Who's the Pillager Now?",
      description: "Give a Pillager a taste of their own medicine",
    },
  ],
  [Version.V1_21]: [
    {
      type: AdvancementType.ADVENTURE,
      name: "Adventuring Time",
      description: "Discover every biome",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Birthday Song",
      description: "Have an Allay drop a Cake at a Note Block",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "You've Got a Friend in Me",
      description: "Have an Allay deliver items to you",
    },
    {
      type: AdvancementType.NETHER,
      name: "How Did We Get Here?",
      description: "Have every effect applied at the same time",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Furious Cocktail",
      description: "Have every potion effect applied at the same time",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Arbalistic",
      description: "Kill five unique mobs with one crossbow shot",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sneak 100",
      description:
        "Sneak near a Sculk Sensor or Warden to prevent it from detecting you",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Cutest Predator",
      description: "Catch an Axolotl in a Bucket",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Balanced Diet",
      description:
        "Eat everything that is edible, even if it's not good for you",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Blowback",
      description: "Kill a Breeze with a deflected Breeze-shot Wind Charge",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Two by Two",
      description: "Breed all the animals!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Parrots and the Bats",
      description: "Breed two animals together",
    },
    {
      type: AdvancementType.NETHER,
      name: "Local Brewery",
      description: "Brew a Potion",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Isn't It Scute?",
      description: "Get Armadillo Scutes from an Armadillo using a Brush",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Bullseye",
      description:
        "Hit the bullseye of a Target block from at least 30 meters away",
    },
    {
      type: AdvancementType.NETHER,
      name: 'Not Quite "Nine" Lives',
      description: "Charge a Respawn Anchor to the maximum",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Complete Catalogue",
      description: "Tame all Cat variants!",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Crafters Crafting Crafters",
      description: "Be near a Crafter when it crafts a Crafter",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Careful Restoration",
      description: "Make a Decorated Pot out of 4 Pottery Sherds",
    },
    {
      type: AdvancementType.NETHER,
      name: "Bring Home the Beacon",
      description: "Construct and place a Beacon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Beaconator",
      description: "Bring a Beacon to full power",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Zombie Doctor",
      description: "Weaken and then cure a Zombie Villager",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Not Today, Thank You",
      description: "Deflect a projectile with a Shield",
    },
    {
      type: AdvancementType.NETHER,
      name: "Oh Shiny",
      description: "Distract Piglins with gold",
    },
    {
      type: AdvancementType.END,
      name: "You Need a Mint",
      description: "Collect Dragon's Breath in a Glass Bottle",
    },
    {
      type: AdvancementType.END,
      name: "The Next Generation",
      description: "Hold the Dragon Egg",
    },
    {
      type: AdvancementType.END,
      name: "Sky's the Limit",
      description: "Find Elytra",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Enchanter",
      description: "Enchant an item at an Enchanting Table",
    },
    {
      type: AdvancementType.END,
      name: "Remote Getaway",
      description: "Escape the island",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "The End?",
      description: "Enter the End Portal",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "We Need to Go Deeper",
      description: "Build, light and enter a Nether Portal",
    },
    {
      type: AdvancementType.NETHER,
      name: "Hot Tourist Destinations",
      description: "Explore all Nether biomes",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Caves & Cliffs",
      description:
        "Free fall from the top of the world (build limit) to the bottom of the world and survive",
    },
    {
      type: AdvancementType.NETHER,
      name: "Subspace Bubble",
      description: "Use the Nether to travel 7 km in the Overworld",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Little Sniffs",
      description: "Feed a Snifflet",
    },
    {
      type: AdvancementType.NETHER,
      name: "Those Were the Days",
      description: "Enter a Bastion Remnant",
    },
    {
      type: AdvancementType.END,
      name: "The City at the End of the Game",
      description: "Go on in, what could happen?",
    },
    {
      type: AdvancementType.NETHER,
      name: "A Terrible Fortress",
      description: "Break your way into a Nether Fortress",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Fishy Business",
      description: "Catch a fish",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Eye Spy",
      description: "Follow an Eye of Ender",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Ice Bucket Challenge",
      description: "Obtain a block of Obsidian",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "With Our Powers Combined!",
      description: "Have all Froglights in your inventory",
    },
    {
      type: AdvancementType.NETHER,
      name: "Spooky Scary Skeleton",
      description: "Obtain a Wither Skeleton's skull",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Heart Transplanter",
      description:
        "Place a Creaking Heart with the correct alignment between two Pale Oak Log blocks",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hero of the Village",
      description: "Successfully defend a village from a raid",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sticky Situation",
      description: "Jump into a Honey Block to break your fall",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Isn't It Iron Pick",
      description: "Upgrade your Pickaxe",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monsters Hunted",
      description: "Kill one of every hostile monster",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Healing Power of Friendship!",
      description: "Team up with an Axolotl and win a fight",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Monster Hunter",
      description: "Kill any hostile monster",
    },
    {
      type: AdvancementType.END,
      name: "Free the End",
      description: "Good luck",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "It Spreads",
      description: "Kill a mob near a Sculk Catalyst",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Hot Stuff",
      description: "Fill a Bucket with lava",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "When the Squad Hops into Town",
      description: "Get each Frog variant on a Lead",
    },
    {
      type: AdvancementType.END,
      name: "Great View From Up Here",
      description: "Levitate up 50 blocks from the attacks of a Shulker",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Lighten Up",
      description: "Scrape a Copper Bulb with an Axe to make it brighter",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Surge Protector",
      description:
        "Protect a Villager from an undesired shock without starting a fire",
    },
    {
      type: AdvancementType.NETHER,
      name: "War Pigs",
      description: "Loot a Chest in a Bastion Remnant",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Glow and Behold!",
      description: "Make the text of any kind of sign glow",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Minecraft: Trial(s) Edition",
      description: "Step foot in a Trial Chamber",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Diamonds!",
      description: "Acquire diamonds",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Stone Age",
      description: "Mine Stone with your new Pickaxe",
    },
    {
      type: AdvancementType.NETHER,
      name: "Cover Me in Debris",
      description: "Get a full suit of Netherite armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Hidden in the Depths",
      description: "Obtain Ancient Debris",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Suit Up",
      description: "Protect yourself with a piece of iron armor",
    },
    {
      type: AdvancementType.NETHER,
      name: "Into Fire",
      description: "Relieve a Blaze of its rod",
    },
    {
      type: AdvancementType.NETHER,
      name: "Who is Cutting Onions?",
      description: "Obtain Crying Obsidian",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Serious Dedication",
      description:
        "Use a Netherite Ingot to upgrade a Hoe, and then reevaluate your life choices",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Smells Interesting",
      description: "Obtain a Sniffer Egg",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Ol' Betsy",
      description: "Shoot a Crossbow",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Over-Overkill",
      description: "Deal 50 hearts of damage in a single hit using the Mace",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Stay Hydrated!",
      description: "Place a Dried Ghast block into water",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Planting the Past",
      description: "Plant any Sniffer seed",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "A Seedy Place",
      description: "Plant a seed and watch it grow",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sound of Music",
      description:
        "Make the Meadows come alive with the sound of music from a Jukebox",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "The Power of Books",
      description:
        "Read the power signal of a Chiseled Bookshelf using a Comparator",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Shear Brilliance",
      description: "Remove Wolf Armor from a Wolf using Shears",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Good as New",
      description: "Fully repair damaged Wolf Armor using Armadillo Scutes",
    },
    {
      type: AdvancementType.END,
      name: "The End... Again...",
      description: "Respawn the Ender Dragon",
    },
    {
      type: AdvancementType.NETHER,
      name: "Return to Sender",
      description: "Destroy a Ghast with a fireball",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Revaulting",
      description: "Unlock an Ominous Vault with an Ominous Trial Key",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Whatever Floats Your Goat!",
      description: "Get in a Boat and float with a Goat",
    },
    {
      type: AdvancementType.NETHER,
      name: "This Boat Has Legs",
      description: "Ride a Strider with a Warped Fungus on a Stick",
    },
    {
      type: AdvancementType.NETHER,
      name: "Feels Like Home",
      description:
        "Take a Strider for a loooong ride on a lava lake in the Overworld",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Bee Our Guest",
      description:
        "Use a Campfire to collect Honey from a Beehive using a Glass Bottle without aggravating the Bees",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Respecting the Remnants",
      description: "Brush a Suspicious block to obtain a Pottery Sherd",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Cover Me with Diamonds",
      description: "Diamond armor saves lives",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Take Aim",
      description: "Shoot something with an Arrow",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Total Beelocation",
      description:
        "Move a Bee Nest or Beehive, with 3 Bees inside, using Silk Touch",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sweet Dreams",
      description: "Sleep in a Bed to change your respawn point",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Acquire Hardware",
      description: "Smelt an Iron Ingot",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Sniper Duel",
      description: "Kill a Skeleton from at least 50 meters away",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Plane?",
      description: "Look at the Ender Dragon through a Spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Balloon?",
      description: "Look at a Ghast through a Spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Is It a Bird?",
      description: "Look at a Parrot through a Spyglass",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Hired Help",
      description: "Summon an Iron Golem to help defend a village",
    },
    {
      type: AdvancementType.NETHER,
      name: "Withering Heights",
      description: "Summon the Wither",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Tactical Fishing",
      description: "Catch a Fish... without a Fishing Rod!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Bukkit Bukkit",
      description: "Catch a Tadpole in a Bucket",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Best Friends Forever",
      description: "Tame an animal",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "A Throwaway Joke",
      description:
        "Throw a Trident at something. Note: Throwing away your only weapon is not a good idea.",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Postmortal",
      description: "Use a Totem of Undying to cheat death",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "What a Deal!",
      description: "Successfully trade with a Villager",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Star Trader",
      description: "Trade with a Villager at the build height limit",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Smithing with Style",
      description:
        "Apply these smithing templates at least once: Spire, Snout, Rib, Ward, Silence, Vex, Tide, Wayfinder",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Crafting a New Look",
      description: "Craft trimmed armor at a Smithing Table",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Two Birds, One Arrow",
      description: "Kill two Phantoms with a piercing Arrow",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Under Lock and Key",
      description: "Unlock a Vault with a Trial Key",
    },
    {
      type: AdvancementType.NETHER,
      name: "Uneasy Alliance",
      description:
        "Rescue a Ghast from the Nether, bring it safely home to the Overworld... and then kill it",
    },
    {
      type: AdvancementType.MINECRAFT,
      name: "Getting an Upgrade",
      description: "Construct a better Pickaxe",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Country Lode, Take Me Home",
      description: "Use a Compass on a Lodestone",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Very Very Frightening",
      description: "Strike a Villager with lightning",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Voluntary Exile",
      description:
        "Kill a raid captain. Maybe consider staying away from villages for the time being...",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Light as a Rabbit",
      description: "Walk on Powder Snow... without sinking in it",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Wax Off",
      description: "Scrape Wax off of a Copper block!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "Wax On",
      description: "Apply Honeycomb to a Copper block!",
    },
    {
      type: AdvancementType.HUSBANDRY,
      name: "The Whole Pack",
      description: "Tame one of each Wolf variant",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Who's the Pillager Now?",
      description: "Give a Pillager a taste of their own medicine",
    },
    {
      type: AdvancementType.ADVENTURE,
      name: "Who Needs Rockets?",
      description: "Use a Wind Charge to launch yourself upward 8 blocks",
    },
  ],
};

// highest integer square root of that version's achievment count
export const maxBingoSize: Record<Version, number> = {
  [Version.V1_13]: 7,
  [Version.V1_14]: 7,
  [Version.V1_15]: 8,
  [Version.V1_16]: 8,
  [Version.V1_17]: 9,
  [Version.V1_18]: 9,
  [Version.V1_19]: 9,
  [Version.V1_20]: 10,
  [Version.V1_21]: 10,
};

export const colorMap: Record<AdvancementType, string> = {
  [AdvancementType.MINECRAFT]: "#008000",
  [AdvancementType.NETHER]: "#950606",
  [AdvancementType.END]: "#000000",
  [AdvancementType.ADVENTURE]: "#0000FF",
  [AdvancementType.HUSBANDRY]: "#BA8E23",
};

export const versions: Version[] = [
  Version.V1_13,
  Version.V1_14,
  Version.V1_15,
  Version.V1_16,
  Version.V1_17,
  Version.V1_18,
  Version.V1_19,
  Version.V1_20,
  Version.V1_21,
];
