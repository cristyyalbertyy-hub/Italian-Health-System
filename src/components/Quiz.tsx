"use client";

import { useCallback, useEffect, useState } from "react";
import type { QuizItem } from "@/lib/parseCsv";
import { shuffle } from "@/lib/parseCsv";

type Phase = "question" | "revealed" | "finished";

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/[.,;:!?'"()]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isCloseEnough(user: string, expected: string) {
  const u = normalize(user);
  const e = normalize(expected);
  if (!u) return false;
  if (u === e) return true;
  if (e.includes(u) && u.length >= e.length * 0.6) return true;
  if (u.includes(e) && e.length >= 4) return true;
  return false;
}

export function Quiz({ items }: { items: QuizItem[] }) {
  const [deck, setDeck] = useState<QuizItem[]>([]);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("question");
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setDeck(shuffle(items));
    setIndex(0);
    setPhase("question");
    setInput("");
    setScore(0);
    setChecked(false);
  }, [items]);

  const current = deck[index];
  const total = deck.length;

  const checkAnswer = useCallback(() => {
    if (!current || checked) return;
    setChecked(true);
    if (isCloseEnough(input, current.answer)) {
      setScore((s) => s + 1);
    }
    setPhase("revealed");
  }, [current, checked, input]);

  const next = useCallback(() => {
    if (index + 1 >= total) {
      setPhase("finished");
      return;
    }
    setIndex((i) => i + 1);
    setPhase("question");
    setInput("");
    setChecked(false);
  }, [index, total]);

  const restart = () => {
    setDeck(shuffle(items));
    setIndex(0);
    setPhase("question");
    setInput("");
    setScore(0);
    setChecked(false);
  };

  if (!deck.length) {
    return (
      <p className="rounded-2xl bg-white/90 p-6 text-center text-gray-600">
        No questions found in this chapter.
      </p>
    );
  }

  if (phase === "finished") {
    const pct = Math.round((score / total) * 100);
    return (
      <div className="rounded-3xl bg-white/95 p-8 text-center shadow-xl">
        <p className="text-5xl" aria-hidden>
          {pct >= 70 ? "🎉" : "💪"}
        </p>
        <h2 className="mt-4 text-2xl font-bold text-gray-800">Well done!</h2>
        <p className="mt-2 text-lg text-gray-600">
          You scored <strong className="text-coral">{score}</strong> out of{" "}
          <strong>{total}</strong> ({pct}%)
        </p>
        <button
          type="button"
          onClick={restart}
          className="mt-6 rounded-full bg-mint px-8 py-3 font-bold text-white shadow-lg transition hover:bg-mint-dark"
        >
          Try again
        </button>
      </div>
    );
  }

  const correct = current && checked && isCloseEnough(input, current.answer);

  return (
    <div className="rounded-3xl bg-white/95 p-6 shadow-xl sm:p-8">
      <div className="mb-4 flex items-center justify-between text-sm font-semibold text-gray-500">
        <span>
          Question {index + 1} of {total}
        </span>
        <span className="rounded-full bg-mint/20 px-3 py-1 text-mint-dark">
          Score: {score}
        </span>
      </div>
      <div className="mb-2 h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-mint to-sky transition-all duration-300"
          style={{
            width: `${((index + (phase === "revealed" ? 1 : 0)) / total) * 100}%`,
          }}
        />
      </div>

      <p className="mt-6 text-lg font-medium leading-relaxed text-gray-800 sm:text-xl">
        {current?.question}
      </p>

      {phase === "question" ? (
        <div className="mt-6 space-y-4">
          <label className="block text-sm font-semibold text-gray-500">
            Your answer
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
            className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-lg outline-none transition focus:border-sky"
            placeholder="Type your answer…"
            autoFocus
          />
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={checkAnswer}
              className="rounded-full bg-sky px-6 py-3 font-bold text-white shadow-md transition hover:bg-sky-dark"
            >
              Check answer
            </button>
            <button
              type="button"
              onClick={() => {
                setChecked(false);
                setPhase("revealed");
              }}
              className="rounded-full bg-gray-100 px-6 py-3 font-semibold text-gray-600 transition hover:bg-gray-200"
            >
              Show answer
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {checked && (
            <p
              className={`rounded-xl px-4 py-3 font-semibold ${
                correct
                  ? "bg-mint/20 text-mint-dark"
                  : "bg-coral/15 text-coral-dark"
              }`}
            >
              {correct ? "Correct! 🎉" : "Not quite — keep learning!"}
            </p>
          )}
          {checked && input.trim() && (
            <p className="text-gray-600">
              You wrote: <em>{input}</em>
            </p>
          )}
          <div className="rounded-xl bg-lavender/15 px-4 py-4">
            <p className="text-sm font-semibold text-lavender-dark">Answer</p>
            <p className="mt-1 text-lg font-medium text-gray-800">
              {current?.answer}
            </p>
          </div>
          <button
            type="button"
            onClick={next}
            className="rounded-full bg-coral px-8 py-3 font-bold text-white shadow-md transition hover:bg-coral-dark"
          >
            {index + 1 >= total ? "See results" : "Next question"}
          </button>
        </div>
      )}
    </div>
  );
}
