import Link from "next/link";
import { ProgressLink } from "@/components/ProgressLink";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-header__home">
        <span className="site-header__home-badge" aria-hidden>
          IHS
        </span>
        <span className="site-header__home-label">Course overview</span>
      </Link>
      <h1 className="site-header__title">
        <Link href="/">Italian Health System</Link>
      </h1>
      <ProgressLink className="progress-link--header" compact />
    </header>
  );
}
