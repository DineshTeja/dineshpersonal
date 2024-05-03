import { cn } from "@/lib/utils";
import { useId } from "react";

interface DotPatternProps {
  width?: any;
  height?: any;
  x?: any;
  y?: any;
  cx?: any;
  cy?: any;
  cr?: any;
  className?: string;
  [key: string]: any;
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 8,  // Center of the pattern width
  cy = 8,  // Center of the pattern height
  cr = 2,  // Visible size of the dots
  className,
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} fill="#e0e0e0" />
        </pattern>
        <radialGradient id="gradient-bg" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: '#f0f0f0', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#gradient-bg)" />
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export default DotPattern;