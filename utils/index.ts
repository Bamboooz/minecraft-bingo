import { Advancement, Bingo } from "@/types";
import { Version } from "@/enums";
import { advancements, maxBingoSize } from "@/const";

export function getRandomSeed(): string {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let result = "";

  for (let i = 0; i < 20; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);

    result += chars[randomIndex];
  }

  return result;
}

export function getRandomBingo(version: Version, size: number): Bingo {
  const versionAdvancements = advancements[version];
  const totalNeeded = size * size;

  const shuffled = [...versionAdvancements].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, totalNeeded);

  const bingo: Advancement[][] = [];

  for (let row = 0; row < size; row++) {
    const rowAdvancements = selected.slice(row * size, (row + 1) * size);

    bingo.push(rowAdvancements);
  }

  return bingo;
}
