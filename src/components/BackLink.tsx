import Link from "next/link";

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 shadow-md transition hover:bg-white hover:shadow-lg"
    >
      <span aria-hidden>←</span>
      {label}
    </Link>
  );
}
