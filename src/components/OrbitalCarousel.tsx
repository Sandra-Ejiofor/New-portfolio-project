"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Card = { src: string; alt: string };

const CARDS: Card[] = [
  { src: "/images/cards/card-1.png", alt: "Pet companion app onboarding screens" },
  { src: "/images/cards/card-2.png", alt: "Pet adoption app screens" },
  { src: "/images/cards/card-3.png", alt: "Legal document reading platform" },
  { src: "/images/cards/card-4.png", alt: "Creative video agency website" },
  { src: "/images/cards/card-5.png", alt: "Client management dashboard" },
];

const N = CARDS.length;
const STEP_DEG = 360 / N;

// Reference (desktop) geometry the whole drum is scaled from.
const BASE_STAGE_WIDTH = 1100;
const BASE_STAGE_HEIGHT = 520;
const BASE_CARD_WIDTH = 460;
const BASE_CARD_HEIGHT = 300;
const BASE_PERSPECTIVE = 1900;
const GAP_FACTOR = 1.25; // >1 opens gaps between cards beyond edge-to-edge

const AUTOPLAY_SPEED = 0.4; // deg/frame at 60fps (~15s per revolution)
// Drag/fling is a secondary interaction — autoplay is the priority, so
// momentum settles back into the steady cruise speed quickly.
const CRUISE_EASE = 0.045;
const MAX_FLING_SPEED = 6; // deg/frame clamp so a fast swipe can't spin wildly

export default function OrbitalCarousel() {
  const stageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const angleRef = useRef(0);
  const velocityRef = useRef(AUTOPLAY_SPEED);
  const scaleRef = useRef(1);
  const radiusRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const draggingRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const lastXRef = useRef(0);
  const lastTRef = useRef(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const updateGeometry = () => {
      const s = Math.min(1, stage.offsetWidth / BASE_STAGE_WIDTH);
      scaleRef.current = s;
      const cardW = BASE_CARD_WIDTH * s;
      radiusRef.current =
        (cardW / 2 / Math.tan(Math.PI / N)) * GAP_FACTOR;
    };
    updateGeometry();

    const resizeObserver = new ResizeObserver(updateGeometry);
    resizeObserver.observe(stage);

    const tick = () => {
      if (!draggingRef.current) {
        angleRef.current += velocityRef.current;
        velocityRef.current +=
          (AUTOPLAY_SPEED - velocityRef.current) * CRUISE_EASE;
      }

      const radius = radiusRef.current;
      const s = scaleRef.current;
      const cardW = BASE_CARD_WIDTH * s;
      const cardH = BASE_CARD_HEIGHT * s;

      if (ringRef.current) {
        ringRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
      }

      for (let i = 0; i < N; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        const faceDeg = angleRef.current + i * STEP_DEG;
        const faceRad = (faceDeg * Math.PI) / 180;
        const facing = (Math.cos(faceRad) + 1) / 2; // 0 back, 1 front

        el.style.width = `${cardW}px`;
        el.style.height = `${cardH}px`;
        el.style.transform = `translate(-50%, -50%) rotateY(${i * STEP_DEG}deg) translateZ(${radius}px)`;
        el.style.opacity = (0.5 + facing * 0.5).toFixed(3);
        el.style.filter = `brightness(${(0.55 + facing * 0.45).toFixed(3)})`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    pointerIdRef.current = e.pointerId;
    lastXRef.current = e.clientX;
    lastTRef.current = performance.now();
    velocityRef.current = 0;
    stageRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || pointerIdRef.current !== e.pointerId) return;

    const now = performance.now();
    const dt = Math.max(1, now - lastTRef.current);
    const dx = e.clientX - lastXRef.current;

    const radius = radiusRef.current || 1;
    const degPerPx = 180 / (Math.PI * radius);
    const deltaDeg = dx * degPerPx;

    angleRef.current += deltaDeg;
    // instantaneous drag speed, normalized to "degrees per 60fps frame"
    velocityRef.current = (deltaDeg / dt) * (1000 / 60);

    lastXRef.current = e.clientX;
    lastTRef.current = now;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== e.pointerId) return;
    draggingRef.current = false;
    pointerIdRef.current = null;

    const clamped = Math.max(
      -MAX_FLING_SPEED,
      Math.min(MAX_FLING_SPEED, velocityRef.current),
    );
    velocityRef.current = clamped;
  };

  return (
    <div
      ref={stageRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="relative mx-auto w-full max-w-[1100px] cursor-grab touch-pan-y select-none active:cursor-grabbing"
      style={{
        aspectRatio: `${BASE_STAGE_WIDTH} / ${BASE_STAGE_HEIGHT}`,
        overflow: "visible",
        perspective: `${BASE_PERSPECTIVE}px`,
      }}
    >
      <div
        ref={ringRef}
        className="absolute top-1/2 left-1/2"
        style={{ transformStyle: "preserve-3d" }}
      >
        {CARDS.map((card, i) => (
          <div
            key={card.src}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="absolute top-0 left-0 rounded-[13px] border border-white/15 bg-white p-[4px]"
            style={{ willChange: "transform, opacity, filter" }}
          >
            <div className="relative size-full overflow-hidden rounded-[9px] bg-black-92">
              <Image
                src={card.src}
                alt={card.alt}
                fill
                draggable={false}
                className="object-contain"
                sizes="(min-width: 768px) 300px, 55vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
