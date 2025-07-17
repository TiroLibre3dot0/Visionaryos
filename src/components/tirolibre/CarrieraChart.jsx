import React, { useEffect, useRef, useState } from "react";
import leagueLevels, { genericLevels } from "../../data/leagueLevels";

export default function CarrieraChart({ esperienze }) {
  const pathRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);

  // Calcolo dinamico dei livelli
  const getLevelValue = (paese, categoria) => {
    const levels = leagueLevels[paese] || genericLevels;
    const found = levels.find((lvl) => lvl.name === categoria);
    return found?.value ?? 2;
  };

  // Coordinate grafiche
  const startX = 60, width = 820, height = 220, amplitude = 140;

  const pts = esperienze.map((s, i) => {
    const t = i / Math.max(esperienze.length - 1, 1);
    const x = startX + t * width;
    const y = height - (getLevelValue(s.paese, s.categoria) / 5) * amplitude;
    return { ...s, x, y };
  });

  const d = pts.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x},${p.y}`;
    const prev = pts[i - 1];
    const cx = (prev.x + p.x) / 2;
    return acc + ` S ${cx},${prev.y} ${p.x},${p.y}`;
  }, "");

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.getBoundingClientRect();
      path.style.transition = "stroke-dashoffset 2s ease";
      path.style.strokeDashoffset = 0;
    }
  }, [esperienze]);

  return (
    <div className="relative">
      {tooltip && (
        <div className="pointer-events-none fixed px-3 py-2 rounded bg-black/80 border border-white/20 text-xs text-white" style={{ top: tooltip.y + 12, left: tooltip.x + 12 }}>
          <div className="font-semibold">{tooltip.stagione}</div>
          <div>{tooltip.club || "—"}</div>
          <div className="text-white/70">{tooltip.categoria}</div>
        </div>
      )}
      <svg viewBox="0 0 940 260" className="w-full max-w-6xl h-auto mx-auto">
        <defs>
          <linearGradient id="careerLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <path ref={pathRef} d={d} fill="none" stroke="url(#careerLine)" strokeWidth="4" strokeLinecap="round" />
        {pts.map((p, idx) => {
          const recent = idx >= pts.length - 4;
          const future = !p.club || !p.ruolo;
          const color = future ? "#38bdf8" : recent ? "#facc15" : "#000";
          return (
            <g key={idx} onMouseEnter={(e) => setTooltip({ x: e.clientX, y: e.clientY, stagione: p.stagione, club: p.club, categoria: p.categoria })} onMouseLeave={() => setTooltip(null)}>
              <circle cx={p.x} cy={p.y} r={6} fill={color} stroke="#375" strokeWidth="2" />
              <text x={p.x} y={p.y - 14} fontSize={10} fill={color} textAnchor="middle">{p.stagione}</text>
              <text x={p.x} y={p.y + 18} fontSize={8} fill={color} textAnchor="middle">{p.categoria}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
