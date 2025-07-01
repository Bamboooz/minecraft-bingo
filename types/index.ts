import { AdvancementType } from "@/enums";

export type Bingo = Advancement[][];

export interface Advancement {
  type: AdvancementType;
  name: string;
  description: string;
}
