import React from "react";

interface IconProps {
  width: number;
  height: number;
}

export default function InfoIcon({ height, width }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 4.33333H7.00667M6.33333 7H7V9.66667H7.66667M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
        stroke="#BBC2CC"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
