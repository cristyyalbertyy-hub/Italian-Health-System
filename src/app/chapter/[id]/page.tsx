import { notFound } from "next/navigation";
import { BackLink } from "@/components/BackLink";
import { ContentTypeButton } from "@/components/ContentTypeButton";
import { CHAPTER_HEX, CONTENT_TYPES, getChapter } from "@/lib/chapters";
import type { ChapterId } from "@/lib/chapters";

const VALID_IDS = ["OS", "SS", "BC"];

export function generateStaticParams() {
  return VALID_IDS.map((id) => ({ id }));
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const chapter = getChapter(id);

  if (!chapter) notFound();

  return (
    <main className="page-main">
      <div
        className="page-card"
        style={{
          background: `linear-gradient(165deg, ${CHAPTER_HEX[chapter.color]}14 0%, var(--surface) 42%)`,
          borderColor: `${CHAPTER_HEX[chapter.color]}33`,
        }}
      >
        <header className="page-header">
          <div className="page-header__row">
            <BackLink href="/" label="Course overview" />
          </div>
          <p className="eyebrow">Chapter</p>
          <h1 className="page-header__title">{chapter.title}</h1>
          <p className="page-header__subtitle">How would you like to learn?</p>
        </header>

        <div className="grid gap-3">
          {CONTENT_TYPES.map((type) => (
            <ContentTypeButton
              key={type.id}
              chapterId={chapter.id as ChapterId}
              type={type.id}
              label={type.label}
              color={type.color}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
