import BingoSquare from "./BingoSquare";
import { Bingo } from "@/types";

interface BingoBoardProps {
  bingoRef: React.RefObject<HTMLDivElement | null>;
  bingo: Bingo;
}

export default function BingoBoard({ bingoRef, bingo }: BingoBoardProps) {
  return (
    <div ref={bingoRef} className="flex flex-col border">
      {bingo.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((advancement, columnIndex) => (
            <BingoSquare key={columnIndex} advancement={advancement} />
          ))}
        </div>
      ))}
    </div>
  );
}
