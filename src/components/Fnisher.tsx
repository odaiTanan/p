"use client";
import React, { useEffect } from "react";

interface FinisherHeaderConfig {
  count: number;
  size: { min: number; max: number; pulse: number };
  speed: { x: { min: number; max: number }; y: { min: number; max: number } };
  colors: { background: string; particles: string[] };
  blending: string;
  opacity: { center: number; edge: number };
  skew: number;
  shapes: string[];
}

declare global {
  interface Window {
    FinisherHeader: {
      new (config: FinisherHeaderConfig): unknown;
    };
  }
}

type Props = { children?: React.ReactNode };

const Fnisher = (props: Props) => {
  useEffect(() => {
    // Dynamically import and initialize the script only in the browser
    const loadScript = async () => {
      const script = document.createElement("script");
      script.src = "/finisher-header.es5.min.js";
      script.async = true;
      script.onload = () => {
        if (typeof window.FinisherHeader !== "undefined") {
          new window.FinisherHeader({
            count: 6,
            size:
              window.innerWidth >= 786
                ? { min: 1100, max: 1300, pulse: 0 }
                : { min: 500, max: 600, pulse: 0 },
            speed:
              window.innerWidth >= 786
                ? {
                    x: { min: 0.3, max: 0.6 },
                    y: { min: 0.3, max: 0.6 },
                  }
                : {
                    x: { min: 0.2, max: 0.4 },
                    y: { min: 0.2, max: 0.4 },
                  },
            colors: {
              background: "#080808",
              particles: ["#080808", "#928c81", "#33ffff", "#928c81"],
            },
            blending: "overlay",
            opacity: { center: 1, edge: 0.1 },
            skew: -2,
            shapes: ["c"],
          });
        }
      };
      document.body.appendChild(script);

      // Cleanup function to remove script when component unmounts
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    };

    loadScript();
  }, []);

  return (
    <div className="flex bg-fixed relative home header finisher-header min-h-screen justify-center">
      {props.children}
    </div>
  );
};

export default Fnisher;
