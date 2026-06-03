import { useEffect, useRef, useState } from 'react';

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches;

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isTouchDevice()) return;

    let ringX = 0,
      ringY = 0,
      dotX = 0,
      dotY = 0;
    let rafId;

    const onMove = (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const loop = () => {
      ringX += (dotX - ringX) * 0.13;
      ringY += (dotY - ringY) * 0.13;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(loop);
    };

    // Event delegation — catches all elements including ones added after re-renders
    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) setHovering(true);
    };
    const onMouseOut = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) setHovering(false);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isTouchDevice()) return null;

  return (
    <>
      {/* Accent dot — snaps instantly to cursor position */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          willChange: 'transform',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <div
          style={{
            width: hovering ? '10px' : '8px',
            height: hovering ? '10px' : '8px',
            borderRadius: '50%',
            backgroundColor: '#d94f2a',
            transition: 'width 0.2s ease, height 0.2s ease',
          }}
        />
      </div>

      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          willChange: 'transform',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <div
          style={{
            width: hovering ? '44px' : '32px',
            height: hovering ? '44px' : '32px',
            borderRadius: '50%',
            border: hovering ? '1.5px solid #d94f2a' : '1.5px solid #0c0c0c',
            opacity: hovering ? 0.55 : 0.25,
            transition:
              'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, opacity 0.25s ease',
          }}
        />
      </div>
    </>
  );
}
