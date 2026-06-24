import Link from "next/link";
import type { ChapterId, ContentType } from "@/lib/chapters";

export function ContentTypeButton({
  chapterId,
  type,
  label,
  color,
}: {
  chapterId: ChapterId;
  type: ContentType;
  label: string;
  color: string;
}) {
  return (
    <Link
      href={`/chapter/${chapterId}/${type}`}
      className={`flex items-center justify-between gap-4 rounded-xl ${color} px-5 py-4 text-base font-semibold text-white shadow-ha-soft transition hover:shadow-ha active:scale-[0.99]`}
    >
      <span>{label}</span>
      <span className="text-lg opacity-80" aria-hidden>
        ›
      </span>
    </Link>
  );
}
