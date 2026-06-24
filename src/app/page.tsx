import { ChapterButton } from "@/components/ChapterButton";
import { ProgressLink } from "@/components/ProgressLink";
import { CHAPTER_HEX, CHAPTERS } from "@/lib/chapters";

export default function HomePage() {
  return (
    <main className="page-main">
      <div className="overview-panel">
        <div className="overview-intro">
          <p className="overview-lead">
            Organization, supply and budgeting in the Italian health system — three
            chapters with video, podcast, infographic and questions for each topic.
          </p>
          <ul className="overview-chapters" aria-label="Course chapters">
            {CHAPTERS.map((chapter) => (
              <li
                key={chapter.id}
                className="overview-chapters__item"
                style={{ borderLeftColor: CHAPTER_HEX[chapter.color] }}
              >
                <strong>{chapter.title}</strong>
                <span>{chapter.summary}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="overview-hint">
          Choose a chapter below, then pick a content format to start learning.
        </p>
        <p className="overview-progress">
          Already enrolled? <ProgressLink className="progress-link--inline" />
        </p>

        <ul className="chapter-list">
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
