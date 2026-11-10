interface DottedGridProps {
  rows?: number;
  cols?: number;
  gap?: number;
  dotSize?: number;
  className?: string;
  dotColor?: string;
}

export function DottedGrid({
  rows = 6,
  cols = 8,
  gap = 12,
  dotSize = 2.5,
  className = "",
  dotColor = "currentColor",
}: DottedGridProps) {
  const width = (cols - 1) * gap + dotSize * 2;
  const height = (rows - 1) * gap + dotSize * 2;

  const dots: Array<{ x: number; y: number; id: string }> = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({
        x: c * gap + dotSize,
        y: r * gap + dotSize,
        id: `${r}-${c}`,
      });
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {dots.map((dot) => (
        <circle
          key={dot.id}
          cx={dot.x}
          cy={dot.y}
          r={dotSize / 2}
          fill={dotColor}
        />
      ))}
    </svg>
  );
}
