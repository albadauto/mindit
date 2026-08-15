import React from "react";
import { trustBar } from "../data/content.js";

export default function TrustBar() {
  const items = trustBar.items;
  return (
    <div className="trustbar">
      <div className="container trustbar-inner">
        <span className="trustbar-label">{trustBar.label}</span>
        <div className="marquee">
          <div className="marquee-track">
            {[...items, ...items].map((item, i) => (
              <span key={`${item}-${i}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
