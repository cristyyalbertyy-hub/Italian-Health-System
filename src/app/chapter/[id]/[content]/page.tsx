import Image from "next/image";
import { notFound } from "next/navigation";
import { readFile } from "fs/promises";
import path from "path";
import { BackLink } from "@/components/BackLink";
import { Quiz } from "@/components/Quiz";
import {
  assetPath,
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
    <main className="mx-auto min-h-dvh max-w-4xl px-6 py-10">
      <BackLink href={`/chapter/${chapterId}`} label={chapter.title} />

      <header className="mt-8">
        <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl">
          {title}
        </h1>
      </header>

      <div className="mt-8">
        {contentId === "video" && (
          <video
            className="w-full rounded-2xl bg-black shadow-xl"
            controls
            playsInline
            preload="metadata"
            src={src}
          >
            Your browser does not support video playback.
          </video>
        )}

        {contentId === "podcast" && (
          <div className="rounded-3xl bg-white/90 p-8 shadow-xl">
            <p className="mb-4 text-center text-4xl" aria-hidden>
              🎧
            </p>
            <audio className="w-full" controls preload="metadata" src={src}>
              Your browser does not support audio playback.
            </audio>
          </div>
        )}

        {contentId === "infographic" && (
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
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
    </main>
  );
}
