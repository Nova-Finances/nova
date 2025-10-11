import { MagicWand01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ProBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-gradient-to-r from-[#54dad2] to-[#7cf670] text-black text-sm font-semibold">
      <HugeiconsIcon
        icon={MagicWand01Icon}
        size={16}
        strokeWidth={2}
        color="#000"
      />
      <span className="uppercase tracking-wide font-['Unbounded'] font-normal">
        PRO
      </span>
    </div>
  );
}
