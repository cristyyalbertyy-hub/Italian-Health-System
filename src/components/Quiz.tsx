"use client";

import { useState } from "react";
import type { QuizItem } from "@/lib/parseCsv";

export function Quiz({ items }: { items: QuizItem[] }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  if (!items.length) {
    return (
      <p className="rounded-xl border border-ha-border-strong bg-ha-surface-card p-6 text-center text-ha-muted">
        No questions found in this chapter.
      </p>
    );
  }

  const card = items[index]!;
  const atStart = index === 0;
  const atEnd = index >= items.length - 1;

  const goPrevious = () => {
    if (atStart) return;
    setIndex((i) => i - 1);
    setRevealed(false);
  };

  const goNext = () => {
    if (atEnd) return;
    setIndex((i) => i + 1);
    setRevealed(false);
  };

  return (
    <div className="flex flex-col gap-3.5">
      <p className="m-0 text-xs font-bold uppercase tracking-wider text-ha-muted">
        Question {index + 1} of {items.length}
      </p>

      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-stretch gap-2.5 max-[520px]:grid-cols-1 max-[520px]:gap-2">
        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full border border-ha-border-strong bg-ha-surface text-lg text-ha-navy shadow-ha-soft transition hover:border-ha-navy hover:bg-[#eef2f8] disabled:cursor-not-allowed disabled:opacity-35 max-[520px]:order-2 max-[520px]:h-10 max-[520px]:w-full max-[520px]:rounded-xl"
          onClick={goPrevious}
          disabled={atStart}
          aria-label="Previous question"
        >
          ←
        </button>

        <div className="min-h-32 rounded-[14px] border border-ha-border-strong bg-ha-surface-card p-4 shadow-ha-soft max-[520px]:order-1">
          <p className="m-0 whitespace-pre-wrap text-base font-semibold leading-relaxed text-ha-text">
            {card.question}
          </p>
          {revealed ? (
            <div className="mt-4 border-t border-dashed border-ha-border pt-4">
              <span className="mb-1.5 block text-[0.7rem] font-bold uppercase tracking-wider text-ha-muted">
                Answer
              </span>
              <p className="m-0 whitespace-pre-wrap leading-relaxed text-ha-green">
                {card.answer}
              </p>
            </div>
          ) : null}
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-full border border-ha-border-strong bg-ha-surface text-lg text-ha-navy shadow-ha-soft transition hover:border-ha-navy hover:bg-[#eef2f8] disabled:cursor-not-allowed disabled:opacity-35 max-[520px]:order-3 max-[520px]:h-10 max-[520px]:w-full max-[520px]:rounded-xl"
          onClick={goNext}
          disabled={atEnd}
          aria-label="Next question"
        >
          →
        </button>
      </div>

      {!revealed ? (
        <button
          type="button"
          className="self-start rounded-full border border-ha-navy bg-ha-navy px-4 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
          onClick={() => setRevealed(true)}
        >
          Show answer
        </button>
      ) : null}
    </div>
  );
}
