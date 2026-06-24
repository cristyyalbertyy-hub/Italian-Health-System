import { STUDENT_PROGRESS_URL } from "@/lib/urls";

type Props = {
  className?: string;
  compact?: boolean;
};

export function ProgressLink({ className = "", compact = false }: Props) {
  return (
    <a
      className={`progress-link${className ? ` ${className}` : ""}`}
      href={STUDENT_PROGRESS_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {compact ? "Progress →" : "My progress →"}
    </a>
  );
}
