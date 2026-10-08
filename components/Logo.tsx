type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className = "h-9", variant = "dark" }: LogoProps) {
  const text = variant === "light" ? "#FFFFFF" : "#0F172A";
  const mark = variant === "light" ? "#22D3EE" : "#0E7490";
  const cross = variant === "light" ? "#0F172A" : "#FFFFFF";

  return (
    <svg
      className={className}
      viewBox="0 0 168 40"
      role="img"
      aria-label="CareSlot"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="18" fill={mark} />
      <rect x="17" y="10" width="6" height="20" rx="1" fill={cross} />
      <rect x="10" y="17" width="20" height="6" rx="1" fill={cross} />
      <text
        x="48"
        y="27"
        fill={text}
        fontFamily="var(--font-jakarta), system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
      >
        CareSlot
      </text>
    </svg>
  );
}
