// =============================================
// Cursor.tsx — Animated custom cursor
// =============================================
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [outline, setOutline] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    let frame: number;
    const smoothOutline = () => {
      setOutline(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }));
      frame = requestAnimationFrame(smoothOutline);
    };
    frame = requestAnimationFrame(smoothOutline);

    const onHoverIn = () => setIsHover(true);
    const onHoverOut = () => setIsHover(false);

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onHoverIn);
      el.addEventListener('mouseleave', onHoverOut);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, [pos.x, pos.y]);

  if (!visible) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          transform: isHover ? 'scale(2.5)' : 'scale(1)',
        }}
      />
      <div
        className="cursor-outline"
        style={{
          left: outline.x - 16,
          top: outline.y - 16,
          transform: isHover ? 'scale(1.5)' : 'scale(1)',
          opacity: isHover ? 0.6 : 1,
        }}
      />
    </>
  );
}
