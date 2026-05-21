import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  variant?: "color" | "white";
};

export function Logo({
  className,
  showWordmark = true,
  variant = "color",
}: LogoProps) {
  const tone = variant === "white" ? "#FFFFFF" : "#2E7D32";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 select-none",
        className,
      )}
      aria-label="Saveo"
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        aria-hidden="true"
      >
        {/* Open circular flow ending in arrow head */}
        <path
          d="M32.5 20a12.5 12.5 0 1 1-3.66-8.84"
          stroke={tone}
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M28.5 6.5 L33 11 L28 13.5"
          stroke={tone}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Tilted leaf */}
        <path
          d="M14.5 24.5c0-5.2 4.2-9.4 9.4-9.4-.1 5.2-4.2 9.3-9.4 9.4Z"
          fill={tone}
        />
        <path
          d="M14.6 24.5c2.2-2.7 5-4.7 8.6-5.7"
          stroke={variant === "white" ? "#2E7D32" : "#FFFFFF"}
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {showWordmark && (
        <span
          className="text-[19px] font-extrabold tracking-tightest"
          style={{ color: tone }}
        >
          Saveo
        </span>
      )}
    </span>
  );
}
