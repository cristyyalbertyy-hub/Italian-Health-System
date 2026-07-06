export type MediaType = 'video' | 'podcast' | 'infographic' | 'questionnaire';

export type Chapter = {
  id: string;
  prefix: string;
  title: string;
  subtitle: string;
  color: string;
};

export const courseTitle = 'Italian Health System';
export const overviewImage = '/IHSA.png';

export const MEDIA_OPTIONS: { type: MediaType; label: string; suffix: string; ext: string }[] = [
  { type: 'video', label: 'Video', suffix: 'V', ext: 'mp4' },
  { type: 'podcast', label: 'Podcast', suffix: 'P', ext: 'm4a' },
  { type: 'infographic', label: 'Infographic', suffix: 'I', ext: 'png' },
  { type: 'questionnaire', label: 'Questions', suffix: 'Q', ext: 'csv' },
];

export const CHAPTERS: Chapter[] = [
  {
    id: 'OS',
    prefix: 'IHS_OS',
    title: 'Organization Structure',
    subtitle: 'Governance, regions and institutional roles',
    color: '#14213d',
  },
  {
    id: 'SS',
    prefix: 'IHS_SS',
    title: 'Supply Structure',
    subtitle: 'Services, workforce and delivery networks',
    color: '#2d4636',
  },
  {
    id: 'BC',
    prefix: 'IHS_BC',
    title: 'Budgeting and Costs',
    subtitle: 'Financing, spending and cost control',
    color: '#d36b31',
  },
];

export function mediaPath(prefix: string, suffix: string, ext: string): string {
  return `/${prefix}_${suffix}.${ext}`;
}
