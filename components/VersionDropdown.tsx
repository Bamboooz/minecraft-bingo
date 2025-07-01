import { useRef, useState } from "react";
import { Version } from "@/enums";
import { versions } from "@/const";
import { LuArrowUp, LuArrowDown } from "react-icons/lu";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

interface VersionDropdownProps {
  version: Version;
  setVersion: React.Dispatch<React.SetStateAction<Version>>;
}

export default function VersionDropdown({
  version,
  setVersion,
}: VersionDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);

  const onChange = (version: Version) => {
    setVersion(version);
    setOpen(false);
  };

  useOnClickOutside(dropdownRef, () => setOpen(false));

  return (
    <div ref={dropdownRef} className="relative inline-flex flex-col z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center p-2 gap-2 border-2 cursor-pointer"
      >
        {version}
        {open ? <LuArrowUp /> : <LuArrowDown />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col border-x-2 border-y-1 mt-1 shadow-2xl">
          {versions.map((version, index) => (
            <button
              key={index}
              onClick={() => onChange(version)}
              className="w-full h-8 flex items-center justify-center border-y-1 cursor-pointer"
            >
              {version}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
