import Image from "next/image";
import { notFound } from "next/navigation";
import { readFile } from "fs/promises";
import path from "path";
import { BackLink } from "@/components/BackLink";
import { Quiz } from "@/components/Quiz";
import {
  assetPath,
  CHAPTER_HEX,
  getChapter,
  getContentType,
  type ChapterId,
  type ContentType,
} from "@/lib/chapters";
import { parseQuizCsv } from "@/lib/parseCsv";

const VALID_CHAPTERS = ["OS", "SS", "BC"];
const VALID_CONTENT = ["video", "podcast", "infographic", "questions"];

export function generateStaticParams() {
  return VALID_CHAPTERS.flatMap((id) =>
    VALID_CONTENT.map((content) => ({ id, content }))
  );
}

async function loadQuiz(chapterId: ChapterId) {
  const filePath = path.join(
    process.cwd(),
    "public",
    `IHS_${chapterId}_Q.csv`
  );
  const text = await readFile(filePath, "utf-8");
  return parseQuizCsv(text);
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ id: string; content: string }>;
}) {
  const { id, content } = await params;
  const chapter = getChapter(id);
  const contentType = getContentType(content);

  if (!chapter || !contentType) notFound();

  const chapterId = chapter.id as ChapterId;
  const contentId = contentType.id as ContentType;
  const src = assetPath(chapterId, contentId);
  const title = `${chapter.title} — ${contentType.label}`;

  return (
    <main className="page-main page-main--wide">
      <div
        className="page-card"
        style={{
          background: `linear-gradient(165deg, ${CHAPTER_HEX[chapter.color]}14 0%, var(--surface) 42%)`,
          borderColor: `${CHAPTER_HEX[chapter.color]}33`,
        }}
      >
        <header className="page-header">
          <div className="page-header__row">
            <BackLink href={`/chapter/${chapterId}`} label={chapter.title} />
          </div>
          <p className="eyebrow">{contentType.label}</p>
          <h1 className="page-header__title">{title}</h1>
        </header>

        <div
          className="rounded-[14px] border border-ha-border-strong bg-ha-surface-card p-4 shadow-ha-soft"
          onContextMenu={(event) => event.preventDefault()}
        >
          {contentId === "video" && (
            <video
              className="w-full rounded-lg bg-black"
              controls
              controlsList="nodownload"
              playsInline
              preload="metadata"
              src={src}
            >
              Your browser does not support video playback.
            </video>
          )}

          {contentId === "podcast" && (
            <audio className="w-full" controls controlsList="nodownload" preload="metadata" src={src}>
              Your browser does not support audio playback.
            </audio>
          )}

          {contentId === "infographic" && (
            <div className="overflow-hidden rounded-lg bg-ha-surface">
              <Image
                src={src}
                alt={`${chapter.title} infographic`}
                width={1200}
                height={1600}
                className="h-auto w-full"
                priority
              />
            </div>
          )}

          {contentId === "questions" && (
            <Quiz items={await loadQuiz(chapterId)} />
          )}
        </div>
      </div>
    </main>
  );
}
