"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

export default function BootIntro() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const exitTimer = window.setTimeout(() => setLeaving(true), reducedMotion ? 120 : 2050);
    const removeTimer = window.setTimeout(() => setVisible(false), reducedMotion ? 300 : 2500);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`boot-overlay${leaving ? " boot-leaving" : ""}`} role="status" aria-label="Starting Dhairya's portfolio">
      <div className="boot-card">
        <div className="boot-windowbar">
          <span className="boot-window-icon"><Terminal size={13}/></span>
          <span>dhairya@portfolio: ~</span>
          <span className="boot-window-dots"><i/><i/><i/></span>
        </div>
        <div className="boot-content">
          <div className="boot-portrait-wrap"><span className="boot-orbit"/><div className="boot-portrait"><Image src="/assets/avatar.png" alt="" fill priority sizes="72px"/></div></div>
          <div className="boot-name">Dhairya Mittal</div>
          <div className="boot-caption">Developer · builder · systems thinker</div>
          <div className="boot-log" aria-hidden="true">
            <p><span>[  OK  ]</span> Initializing portfolio environment</p>
            <p><span>[  OK  ]</span> Loading selected work and experience</p>
            <p><span>[  OK  ]</span> Opening interactive shell<span className="boot-caret">_</span></p>
          </div>
          <div className="boot-progress"><span/></div>
          <div className="boot-status"><span>SYSTEM INITIALIZING</span><span>PERSONAL PORTFOLIO · 2026</span></div>
        </div>
      </div>
    </div>
  );
}
