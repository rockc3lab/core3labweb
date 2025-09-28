import { cn } from "@/lib/utils";
export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(`w-6 h-6 ${className}`)}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1-.01 5.01 2.5 2.5 0 0 1 .01-5.01zM3 8.98h3.96V21H3V8.98zm7.5 0H14v1.62h.05c.64-1.2 2.2-2.47 4.53-2.47 4.85 0 5.74 3.18 5.74 7.31V21h-3.96v-5.82c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.07V21H10.5V8.98z" />
    </svg>
  );
}
