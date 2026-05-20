import Link from "next/link";
import type { ChapterId } from "@/lib/chapters";

const colorMap = {
  coral: "from-coral to-coral-dark shadow-coral/40",
  sky: "from-sky to-sky-dark shadow-sky/40",
  sunshine: "from-sunshine to-sunshine-dark shadow-sunshine/40 text-gray-900",
};

export function ChapterButton({
  id,
  title,
  color,
  index,
}: {
  id: ChapterId;
  title: string;
  color: "coral" | "sky" | "sunshine";
  index: number;
}) {
  return (
    <li className="relative flex items-center gap-4">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint/30 text-lg font-bold text-mint-dark"
        aria-hidden
      >
        {index + 1}
      </span>
      <Link
        href={`/chapter/${id}`}
        className={`flex-1 rounded-2xl bg-gradient-to-r ${colorMap[color]} px-6 py-5 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]`}
      >
        {title}
      </Link>
    </li>
  );
}
