import Link from "next/link";
import type { ChapterId, ChapterColor } from "@/lib/chapters";
import { CHAPTER_HEX } from "@/lib/chapters";

const colorMap: Record<
  ChapterColor,
  { button: string; badge: string }
> = {
  navy: {
    button: "bg-ha-navy text-white shadow-ha hover:brightness-110",
    badge: "bg-ha-navy/10 text-ha-navy",
  },
  green: {
    button: "bg-ha-green text-white shadow-ha hover:brightness-110",
    badge: "bg-ha-green/10 text-ha-green",
  },
  orange: {
    button: "bg-ha-orange text-white shadow-ha hover:brightness-110",
    badge: "bg-ha-orange/10 text-ha-orange",
  },
};

export function ChapterButton({
  id,
  title,
  color,
  index,
}: {
  id: ChapterId;
  title: string;
  color: ChapterColor;
  index: number;
}) {
  const styles = colorMap[color];

  return (
    <li className="relative flex items-center gap-4">
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${styles.badge}`}
        aria-hidden
      >
        {index + 1}
      </span>
      <Link
        href={`/chapter/${id}`}
        className={`flex flex-1 items-center justify-between gap-3 rounded-xl border border-ha-border-strong ${styles.button} px-5 py-4 text-base font-semibold shadow-ha-soft transition active:scale-[0.99]`}
        style={{ borderLeftWidth: 4, borderLeftColor: CHAPTER_HEX[color] }}
      >
        <span>{title}</span>
        <span className="text-lg opacity-80" aria-hidden>
          ›
        </span>
      </Link>
    </li>
  );
}
