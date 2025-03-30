console.log("TypeScript Quest!");

type Element = "fire" | "air" | "water" | "earth";

type Artifacts = { name: string; rarity: number; element: Element };

const artifacts: Artifacts[] = [
  { name: "Earth Totem", rarity: 70, element: "earth" },
  { name: "Aqua Sphere", rarity: 85, element: "water" },
  { name: "Flame Orb", rarity: 85, element: "fire" },
  { name: "Cursed Dagger", rarity: 90, element: "air" },
  { name: "Cursed Amulet", rarity: 95, element: "fire" },
];

const sortedArtifacts = (artifactsToSort: Artifacts[]) => {
  const itemsWithoutCurse = artifactsToSort.filter((item) =>
    !item.name.toLowerCase().includes("cursed")
  );

  return itemsWithoutCurse.sort((a, b) => {
    if (b.rarity === a.rarity) {
      return a.name.localeCompare(b.name);
    }
    return b.rarity - a.rarity;
  });
};

console.log(sortedArtifacts(artifacts));
