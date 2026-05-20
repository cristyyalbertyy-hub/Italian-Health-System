# Italian Health System

Interactive learning app about the Italian health system, with three chapters and four content types per chapter.

## Chapters

| Code | Chapter |
|------|---------|
| OS | Organization Structure |
| SS | Supply Structure |
| BC | Budgeting and Costs |

## Content & files

Assets live in `public/` and follow this naming pattern:

| Type | Suffix | Extension | Example |
|------|--------|-----------|---------|
| Video | `V` | `.mp4` | `IHS_OS_V.mp4` |
| Podcast | `P` | `.m4a` | `IHS_OS_P.m4a` |
| Infographic | `I` | `.png` | `IHS_OS_I.png` |
| Questions | `Q` | `.csv` | `IHS_OS_Q.csv` |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repository to GitHub (include the `public/` media files or use Git LFS for large binaries).
2. Import the repo in [Vercel](https://vercel.com) and deploy — the default Next.js settings work out of the box.

## Tech stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- React 19
- Tailwind CSS
