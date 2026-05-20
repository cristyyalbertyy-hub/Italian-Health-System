import Link from "next/link";
import type { ChapterId, ContentType } from "@/lib/chapters";

export function ContentTypeButton({
  chapterId,
  type,
  label,
  icon,
  color,
}: {
  chapterId: ChapterId;
  type: ContentType;
  label: string;
  icon: string;
  color: string;
}) {
  return (
    <Link
      href={`/chapter/${chapterId}/${type}`}
      className={`flex items-center gap-4 rounded-2xl ${color} px-6 py-5 text-lg font-bold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]`}
    >
      <span className="text-2xl" aria-hidden>
        {icon}
      </span>
      {label}
    </Link>
  );
}
