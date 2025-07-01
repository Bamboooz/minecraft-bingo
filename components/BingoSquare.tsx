import { colorMap } from "@/const";
import { Advancement } from "@/types";

interface BingoSquareProps {
  advancement: Advancement;
}

export default function BingoSquare({ advancement }: BingoSquareProps) {
  const color = colorMap[advancement.type];

  return (
    <div
      className="w-36 h-36 flex flex-col items-center justify-center p-1 gap-1 border border-black text-[12px] text-center"
      style={{ color }}
    >
      <p className="font-bold">{advancement.type}</p>
      <p className="font-bold">{advancement.name}</p>
      <p>{advancement.description}</p>
    </div>
  );
}
