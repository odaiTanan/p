"use client";
import { useEffect, useRef } from "react";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // 1. Load p5 first
    const loadP5 = () =>
      new Promise<void>((resolve, reject) => {
        if ((window as any).p5) return resolve();
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.min.js";
        script.onload = () => resolve();
        script.onerror = reject;
        document.body.appendChild(script);
      });

    // 2. Then load Vanta
    const loadVanta = () =>
      new Promise<void>((resolve, reject) => {
        if ((window as any).VANTA) return resolve();
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js";
        script.onload = () => resolve();
        script.onerror = reject;
        document.body.appendChild(script);
      });

    // 3. Sequentially load & init
    loadP5()
      .then(loadVanta)
      .then(() => {
        const VANTA = (window as any).VANTA;
        if (!VANTA || !vantaRef.current) return;

        vantaEffect.current = VANTA.TOPOLOGY({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x05cde5,
          backgroundColor: 0x2e3333,
        });
      })
      .catch((err) => console.error("[VANTA load error]", err));

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 -z-10 w-full h-full" />;
}
