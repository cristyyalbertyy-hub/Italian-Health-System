import { ChapterButton } from "@/components/ChapterButton";
import { CHAPTERS } from "@/lib/chapters";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-6 py-12">
      <header className="mb-10 text-center">
        <p className="text-4xl" aria-hidden>
          🇮🇹
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">
          Italian Health System
        </h1>
        <p className="mt-2 text-gray-600">
          Choose a chapter to start learning
        </p>
      </header>

      <div className="flex gap-6">
        <div
          className="hidden w-8 shrink-0 sm:flex sm:flex-col sm:items-center sm:pt-6"
          aria-hidden
        >
          <div className="h-4 w-4 rounded-full bg-italy-green shadow-md" />
          <div className="mt-2 w-1 flex-1 rounded-full bg-gradient-to-b from-italy-green via-italy-white to-italy-red shadow-sm ring-1 ring-gray-200/80" />
        </div>

        <ul className="flex flex-1 flex-col gap-5">
          {CHAPTERS.map((chapter, i) => (
            <ChapterButton
              key={chapter.id}
              id={chapter.id}
              title={chapter.title}
              color={chapter.color}
              index={i}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}