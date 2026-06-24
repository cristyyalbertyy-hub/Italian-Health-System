import Link from "next/link";

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-ha-border-strong bg-ha-surface px-4 py-2 text-sm font-semibold text-ha-navy shadow-ha-soft transition hover:border-ha-navy hover:bg-[#eef2f8]"
    >
      <span aria-hidden>←</span>
      {label}
    </Link>
  );
}
