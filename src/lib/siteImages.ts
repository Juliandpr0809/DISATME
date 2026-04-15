const imageModules = import.meta.glob("../assets/new_img/*.{jpg,webp,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const sortedEntries = Object.entries(imageModules).sort(([a], [b]) =>
  a.localeCompare(b),
);

const fallbackImage = sortedEntries[0]?.[1] ?? "";

const heroEntry =
  sortedEntries.find(
    ([path]) => path.includes("Mader_upscayl_3x_upscayl-standard-4x.png"),
  ) ??
  sortedEntries.find(
    ([path]) => path.includes("Mader.webp") && !path.includes("(1)") && !path.includes("(3)"),
  ) ?? sortedEntries[0];

const heroImage = heroEntry?.[1] ?? fallbackImage;

const rotatedImages = sortedEntries
  .map(([, url]) => url)
  .filter((url) => url !== heroImage);

const pick = (index: number) => {
  if (rotatedImages.length === 0) return heroImage;
  return rotatedImages[index % rotatedImages.length];
};

export const siteImages = {
  hero: heroImage,
  about: [pick(0), pick(1)],
  services: [pick(2), pick(3), pick(4), pick(5), pick(6)],
  portfolio: [pick(7), pick(8), pick(9), pick(10)],
  journal: [pick(11), pick(12), pick(13)],
};