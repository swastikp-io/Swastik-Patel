interface GeometricMotifProps {
  className?: string;
}

export function GeometricMotif({ className = "" }: GeometricMotifProps) {
  // Reproduces the exact 3-block stepped motif inverted for dark canvas
  return (
    <svg
      width="48"
      height="28"
      viewBox="0 0 48 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top central spanning block */}
      <rect x="0" y="0" width="16" height="12" fill="#FF1028" />
      <rect x="24" y="0" width="24" height="12" fill="#111111" />
      {/* Bottom offset stepped blocks */}
      <rect x="8" y="14" width="20" height="14" fill="#FF1028" />
      <rect x="36" y="14" width="12" height="14" fill="#202020" stroke="#111111" />
    </svg>
  );
}
