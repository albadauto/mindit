import React from "react";

export default function Logo({ size = 34, className = "" }) {
  return (
    <img
      className={`brand-logo ${className}`}
      src="/mind-it-logo.png"
      width={Math.round(size * 4.2)}
      height={size}
      alt="Mind it!"
      style={{ height: size, width: "auto" }}
    />
  );
}
