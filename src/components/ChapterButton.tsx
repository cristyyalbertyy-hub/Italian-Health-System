import Link from "next/link";
import type { ChapterId, ItalyFlagColor } from "@/lib/chapters";

const colorMap: Record<
  ItalyFlagColor,
  { button: string; badge: string }
> = {
  green: {
    button:
      "from-italy-green to-italy-green-dark text-white shadow-italy-green/35",
    badge: "bg-italy-green/20 text-italy-green-dark",
  },
  white: {
    button:
      "from-italy-white to-gray-50 text-gray-800 shadow-gray-300/50 ring-1 ring-gray-200",
    badge: "bg-gray-100 text-gray-600",
  },
  red: {
    button: "from-italy-red to-italy-red-dark text-white shadow-italy-red/35",
    badge: "bg-italy-red/15 text-italy-red-dark",
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
  color: ItalyFlagColor;
  index: number;
}) {
  const styles = colorMap[color];

  return (
    <li className="relative flex items-center gap-4">
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold ${styles.badge}`}
        aria-hidden
      >
        {index + 1}
      </span>
      <Link
        href={`/chapter/${id}`}
        className={`flex-1 rounded-2xl bg-gradient-to-r ${styles.button} px-6 py-5 text-lg font-bold shadow-lg transition hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]`}
      >
        {title}
      </Link>
    </li>
  );
}
