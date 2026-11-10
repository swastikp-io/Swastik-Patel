import { useEffect, useRef } from "react";

interface WireframeSphereProps {
  className?: string;
  speed?: number;
  lineColor?: string;
  backgroundColor?: string;
}

export function WireframeSphere({
  className = "",
  speed = 1,
  lineColor = "#FF1028",
  backgroundColor = "#202020",
}: WireframeSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);
    handleResize();

    let angleY = 0;
    const angleX = 0.28; // fixed aesthetic tilt

    const render = () => {
      if (!ctx || width === 0 || height === 0) {
        if (!prefersReducedMotion) {
          animationFrameId = requestAnimationFrame(render);
        }
        return;
      }

      angleY += prefersReducedMotion ? 0 : 0.0035 * speed;

      // Surface background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.scale(dpr, dpr);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.42;

      ctx.lineWidth = 0.7;

      // Color parsing helper for alpha transparency
      const cleanHex = lineColor.replace("#", "");
      const r = parseInt(cleanHex.slice(0, 2), 16) || 255;
      const g = parseInt(cleanHex.slice(2, 4), 16) || 16;
      const b = parseInt(cleanHex.slice(4, 6), 16) || 40;

      // 3D rotation helper
      const project = (x: number, y: number, z: number) => {
        // Rotate Y
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;

        // Rotate X (tilt)
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const y2 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;

        // Weak perspective projection
        const fov = 400;
        const scale = fov / (fov + z2);
        return {
          px: cx + x1 * scale,
          py: cy + y2 * scale,
          z: z2,
        };
      };

      // 1. Draw outer boundary silhouette ring
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.50)`;
      ctx.stroke();

      // 2. Latitude Circles (28 parallel rings)
      const latCount = 28;
      for (let i = 1; i < latCount; i++) {
        const phi = (i / latCount) * Math.PI - Math.PI / 2;
        const rRing = radius * Math.cos(phi);
        const yRing = radius * Math.sin(phi);

        ctx.beginPath();
        const segments = 48;
        for (let s = 0; s <= segments; s++) {
          const theta = (s / segments) * Math.PI * 2;
          const x = rRing * Math.cos(theta);
          const z = rRing * Math.sin(theta);
          const pt = project(x, yRing, z);

          if (s === 0) ctx.moveTo(pt.px, pt.py);
          else ctx.lineTo(pt.px, pt.py);
        }
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.25)`;
        ctx.stroke();
      }

      // 3. Longitude Meridians (24 vertical slices)
      const lonCount = 24;
      for (let i = 0; i < lonCount; i++) {
        const theta = (i / lonCount) * Math.PI;

        ctx.beginPath();
        const segments = 48;
        for (let s = 0; s <= segments; s++) {
          const phi = (s / segments) * Math.PI * 2;
          const x = radius * Math.sin(phi) * Math.cos(theta);
          const y = radius * Math.cos(phi);
          const z = radius * Math.sin(phi) * Math.sin(theta);
          const pt = project(x, y, z);

          if (s === 0) ctx.moveTo(pt.px, pt.py);
          else ctx.lineTo(pt.px, pt.py);
        }
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.32)`;
        ctx.stroke();
      }

      // 4. Fine Computational Geodesic Spirals
      const spiralCount = 6;
      for (let sp = 0; sp < spiralCount; sp++) {
        const offset = (sp / spiralCount) * Math.PI * 2;
        ctx.beginPath();
        const steps = 90;
        for (let s = 0; s <= steps; s++) {
          const t = s / steps;
          const phi = t * Math.PI - Math.PI / 2;
          const theta = t * Math.PI * 4 + offset;
          const rRing = radius * Math.cos(phi);
          const x = rRing * Math.cos(theta);
          const y = radius * Math.sin(phi);
          const z = rRing * Math.sin(theta);
          const pt = project(x, y, z);

          if (s === 0) ctx.moveTo(pt.px, pt.py);
          else ctx.lineTo(pt.px, pt.py);
        }
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.42)`;
        ctx.stroke();
      }

      ctx.restore();

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, lineColor, backgroundColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`h-full w-full block ${className}`}
      aria-hidden="true"
    />
  );
}
