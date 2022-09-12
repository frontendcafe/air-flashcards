import React from "react";

interface IconProps {
  width: number;
  height: number;
}

export default function AddIcon({ height, width }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M13.5417 1V26.0833M1 13.5417H26.0833"
        stroke="#1867FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
