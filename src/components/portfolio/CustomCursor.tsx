import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Disable on touch devices / small screens
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setEnabled(true);

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const tick = () => {
      // Trailing easing for the ring
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    document.documentElement.classList.add("custom-cursor-active");

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  const baseHidden = hidden ? "opacity-0" : "opacity-100";

  return (
    <>
      {/* Outer ring with trailing + glow */}
      <div
        ref={ringRef}
        aria-hidden
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-primary/70 backdrop-blur-sm transition-[width,height,background-color,opacity,border-color] duration-300 ease-out mix-blend-difference ${baseHidden}`}
        style={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          backgroundColor: hovering ? "hsl(var(--primary) / 0.25)" : "hsl(var(--primary) / 0.08)",
          boxShadow: hovering
            ? "0 0 30px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.3)"
            : "0 0 18px hsl(var(--primary) / 0.35)",
          transform: `translate3d(-100px,-100px,0) translate(-50%,-50%) scale(${clicking ? 0.85 : 1})`,
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden
        className={`pointer-events-none fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full bg-primary transition-opacity duration-200 ${baseHidden} ${
          hovering ? "opacity-0" : "opacity-100"
        }`}
        style={{ transform: "translate3d(-100px,-100px,0) translate(-50%,-50%)" }}
      />
    </>
  );
};