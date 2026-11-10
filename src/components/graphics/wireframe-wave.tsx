import { useEffect, useRef } from "react";

interface WireframeWaveProps {
  className?: string;
  speed?: number;
  density?: number;
  interactive?: boolean;
}

interface Point3D {
  px: number;
  py: number;
  depth: number;
}

export function WireframeWave({
  className = "",
  speed = 1,
  density = 1,
  interactive = true,
}: WireframeWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0.5,
    y: 0.5,
    targetX: 0.5,
    targetY: 0.5,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Check prefers-reduced-motion
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

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseRef.current.targetX = Math.max(0, Math.min(1, x));
      mouseRef.current.targetY = Math.max(0, Math.min(1, y));
    };

    if (interactive && canvas) {
      canvas.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    let time = 0;

    const render = () => {
      if (!ctx || width === 0 || height === 0) {
        if (!prefersReducedMotion) {
          animationFrameId = requestAnimationFrame(render);
        }
        return;
      }

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      time += prefersReducedMotion ? 0 : 0.007 * speed;

      // Dark espresso surface background
      ctx.fillStyle = "#1E1A17";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.scale(dpr, dpr);

      // 3D Parametric Wireframe Ribbon Wave
      // We calculate a 2D grid of 3D points [u, v]
      const uSteps = Math.floor(48 * density);
      const vSteps = Math.floor(26 * density);

      const fov = 500;
      const mx = (mouseRef.current.x - 0.5) * 40;
      const my = (mouseRef.current.y - 0.5) * 40;

      // Pre-compute 3D grid
      const grid: Array<Array<Point3D>> = [];

      for (let j = 0; j <= vSteps; j++) {
        const v = (j / vSteps) * 2 - 1; // -1 to 1 across the ribbon
        const row: Array<Point3D> = [];

        for (let i = 0; i <= uSteps; i++) {
          const u = i / uSteps; // 0 to 1 along length

          // S-curved central spine through space
          const spineX = u * width;
          const spineY =
            height * 0.48 +
            Math.sin(u * Math.PI * 2.2 + time) * height * 0.18 +
            Math.cos(u * Math.PI * 3.4 - time * 0.8) * height * 0.09 +
            my * Math.sin(u * Math.PI);

          const spineZ =
            Math.sin(u * Math.PI * 1.8 - time * 0.9) * 140 +
            Math.cos(u * Math.PI * 2.6 + time * 0.6) * 60 +
            mx * Math.cos(u * Math.PI);

          // Ribbon twist angle as u advances
          const twist =
            u * Math.PI * 2.1 +
            Math.sin(time * 0.7 + u * Math.PI) * 0.45;

          // Ribbon width with tapered ends
          const envelope = Math.sin(u * Math.PI);
          const ribWidth =
            (height * 0.38 + Math.cos(u * 4 + time) * (height * 0.06)) *
            (0.45 + 0.55 * envelope);

          // Point in 3D
          const x3d = spineX;
          const y3d = spineY + v * ribWidth * Math.cos(twist);
          const z3d = spineZ + v * ribWidth * Math.sin(twist);

          // Perspective projection
          const factor = fov / (fov + z3d + 200);
          const px = (x3d - width / 2) * factor + width / 2;
          const py = (y3d - height / 2) * factor + height / 2;
          const depth = (z3d + 200) / 400; // normalized depth for opacity

          row.push({ px, py, depth });
        }
        grid.push(row);
      }

      ctx.lineWidth = 0.75;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      // 1. Draw Longitudinal Lines (curves running along length)
      for (let j = 0; j <= vSteps; j++) {
        const row = grid[j];
        if (!row || row.length === 0) continue;

        const firstPt = row[0];
        if (!firstPt) continue;

        // Opacity based on ribbon position and depth
        const vNorm = Math.abs((j / vSteps) * 2 - 1);
        const baseAlpha = 0.35 - vNorm * 0.18; // center lines slightly brighter

        ctx.beginPath();
        ctx.moveTo(firstPt.px, firstPt.py);

        for (let i = 1; i < row.length; i++) {
          const prev = row[i - 1];
          const curr = row[i];
          if (!prev || !curr) continue;
          const midX = (prev.px + curr.px) / 2;
          const midY = (prev.py + curr.py) / 2;
          ctx.quadraticCurveTo(prev.px, prev.py, midX, midY);
        }

        const last = row[row.length - 1];
        if (last) {
          ctx.lineTo(last.px, last.py);
        }

        const midPoint = row[Math.floor(row.length / 2)];
        const midDepth = midPoint ? midPoint.depth : 0.5;
        const depthAlpha = Math.max(
          0.12,
          Math.min(0.55, baseAlpha + (1 - midDepth) * 0.25),
        );
        ctx.strokeStyle = `rgba(240, 235, 228, ${depthAlpha.toFixed(3)})`;
        ctx.stroke();
      }

      // 2. Draw Transverse Rib Lines (cross-sections)
      const ribInterval = 2; // draw rib every 2 u-steps for crisp mesh
      const row0 = grid[0];
      if (row0) {
        for (let i = 0; i <= uSteps; i += ribInterval) {
          const startPt = row0[i];
          if (!startPt) continue;

          ctx.beginPath();
          ctx.moveTo(startPt.px, startPt.py);

          for (let j = 1; j <= vSteps; j++) {
            const rowJ = grid[j];
            const pt = rowJ ? rowJ[i] : undefined;
            if (pt) {
              ctx.lineTo(pt.px, pt.py);
            }
          }

          const midRow = grid[Math.floor(vSteps / 2)];
          const midPt = midRow ? midRow[i] : undefined;
          const midDepth = midPt ? midPt.depth : 0.5;
          const depthAlpha = Math.max(
            0.08,
            Math.min(0.35, 0.2 + (1 - midDepth) * 0.15),
          );
          ctx.strokeStyle = `rgba(235, 228, 218, ${depthAlpha.toFixed(3)})`;
          ctx.stroke();
        }
      }

      ctx.restore();

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      resizeObserver.disconnect();
      if (interactive && canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`h-full w-full block ${className}`}
      aria-hidden="true"
    />
  );
}
