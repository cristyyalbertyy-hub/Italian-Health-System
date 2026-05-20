import { notFound } from "next/navigation";
import { BackLink } from "@/components/BackLink";
import { ContentTypeButton } from "@/components/ContentTypeButton";
import { CONTENT_TYPES, getChapter } from "@/lib/chapters";
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
    <main className="mx-auto min-h-dvh max-w-xl px-6 py-10">
      <BackLink href="/" label="All chapters" />

      <header className="mt-8 text-center">
        <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl">
          {chapter.title}
        </h1>
        <p className="mt-2 text-gray-600">How would you like to learn?</p>
      </header>

      <div className="mt-10 grid gap-4">
        {CONTENT_TYPES.map((type) => (
          <ContentTypeButton
            key={type.id}
            chapterId={chapter.id as ChapterId}
            type={type.id}
            label={type.label}
            icon={type.icon}
            color={type.color}
          />
        ))}
      </div>
    </main>
  );
}
