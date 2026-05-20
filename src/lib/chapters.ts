export type ChapterId = "OS" | "SS" | "BC";
export type ContentType = "video" | "podcast" | "infographic" | "questions";

export type ItalyFlagColor = "green" | "white" | "red";

export const CHAPTERS: {
  id: ChapterId;
  title: string;
  color: ItalyFlagColor;
}[] = [
  {
    id: "OS",
    title: "Organization Structure",
    color: "green",
  },
  {
    id: "SS",
    title: "Supply Structure",
    color: "white",
  },
  {
    id: "BC",
    title: "Budgeting and Costs",
    color: "red",
  },
];

export const CONTENT_TYPES: {
  id: ContentType;
  label: string;
  suffix: string;
  extension: string;
  icon: string;
  color: string;
}[] = [
  {
    id: "video",
    label: "Video",
    suffix: "V",
    extension: "mp4",
    icon: "▶",
    color: "bg-lavender hover:bg-lavender-dark",
  },
  {
    id: "podcast",
    label: "Podcast",
    suffix: "P",
    extension: "m4a",
    icon: "🎧",
    color: "bg-mint hover:bg-mint-dark",
  },
  {
    id: "infographic",
    label: "Infographic",
    suffix: "I",
    extension: "png",
    icon: "📊",
    color: "bg-sky hover:bg-sky-dark",
  },
  {
    id: "questions",
    label: "Questions",
    suffix: "Q",
    extension: "csv",
    icon: "❓",
    color: "bg-coral hover:bg-coral-dark",
  },
];

export function getChapter(id: string) {
  return CHAPTERS.find((c) => c.id === id);
}

export function getContentType(id: string) {
  return CONTENT_TYPES.find((c) => c.id === id);
}

export function assetPath(chapterId: ChapterId, content: ContentType): string {
  const type = CONTENT_TYPES.find((c) => c.id === content)!;
  return `/IHS_${chapterId}_${type.suffix}.${type.extension}`;
}
