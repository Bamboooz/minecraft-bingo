"use client";

import { useEffect, useRef, useState } from "react";
import { LuDownload, LuPlay } from "react-icons/lu";
import VersionDropdown from "@/components/VersionDropdown";
import BingoBoard from "@/components/BingoBoard";
import { Version } from "@/enums";
import { Bingo } from "@/types";
import { getRandomBingo, getRandomSeed } from "@/utils";
import html2canvas from "html2canvas";

export default function Home() {
  const bingoRef = useRef<HTMLDivElement>(null);

  const [bingo, setBingo] = useState<Bingo | null>(null);
  const [seed, setSeed] = useState<string | null>(null);
  const [version, setVersion] = useState<Version>(Version.V1_21);

  const generateBingo = () => {
    const bingo = getRandomBingo(version, 5);

    setBingo(bingo);
    setSeed(getRandomSeed());
  };

  const handleDownloadImage = async () => {
    const element = bingoRef.current;

    if (element === null) return;

    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = `bingo_${seed}.png`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  useEffect(() => {
    generateBingo();

    setSeed(getRandomSeed());
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-10">
      <div className="w-[724px] flex justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={generateBingo}
            className="flex items-center justify-center p-2 gap-2 border-2 cursor-pointer"
          >
            <LuPlay />
            Generate Bingo
          </button>

          <VersionDropdown version={version} setVersion={setVersion} />
        </div>

        <div className="flex flex-col">
          <p className="font-medium">Game Seed:</p>
          {seed}
        </div>

        {bingo && (
          <button
            onClick={handleDownloadImage}
            className="flex items-center justify-center p-2 gap-2 border-2 cursor-pointer"
          >
            Download Bingo as PNG
            <LuDownload />
          </button>
        )}
      </div>

      {bingo && <BingoBoard bingoRef={bingoRef} bingo={bingo} />}
    </div>
  );
}
