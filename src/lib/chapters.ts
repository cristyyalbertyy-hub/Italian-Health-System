export type ChapterId = "OS" | "SS" | "BC";
export type ContentType = "video" | "podcast" | "infographic" | "questions";

export type ChapterColor = "navy" | "green" | "orange";

export const CHAPTERS: {
  id: ChapterId;
  title: string;
  color: ChapterColor;
  summary: string;
}[] = [
  {
    id: "OS",
    title: "Organization Structure",
    color: "navy",
    summary: "Governance, regions and institutional roles",
  },
  {
    id: "SS",
    title: "Supply Structure",
    color: "green",
    summary: "Services, workforce and delivery networks",
  },
  {
    id: "BC",
    title: "Budgeting and Costs",
    color: "orange",
    summary: "Financing, spending and cost control",
  },
];

export const CHAPTER_HEX: Record<ChapterColor, string> = {
  navy: "#14213d",
  green: "#2d4636",
  orange: "#d36b31",
};

export const CONTENT_TYPES: {
  id: ContentType;
  label: string;
  suffix: string;
  extension: string;
  color: string;
}[] = [
  {
    id: "video",
    label: "Video",
    suffix: "V",
    extension: "mp4",
    color: "bg-ha-navy hover:brightness-110",
  },
  {
    id: "podcast",
    label: "Podcast",
    suffix: "P",
    extension: "m4a",
    color: "bg-ha-green hover:brightness-110",
  },
  {
    id: "infographic",
    label: "Infographic",
    suffix: "I",
    extension: "png",
    color: "bg-ha-orange hover:brightness-110",
  },
  {
    id: "questions",
    label: "Questions",
    suffix: "Q",
    extension: "csv",
    color: "bg-ha-navy hover:brightness-110 ring-2 ring-ha-orange/30",
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
