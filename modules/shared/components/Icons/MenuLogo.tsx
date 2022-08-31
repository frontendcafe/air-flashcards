import React from "react";
import { Icon } from "@chakra-ui/react";

interface IconProps {
  borderColor: string;
  fill: string;
  width: number;
  height: number;
  borderWidth: number;
}

export default function MenuLogo({ borderColor, fill, height, width, borderWidth }: IconProps) {
  return (
    <Icon viewBox="0 0 63 78" fill="none" width={width} height={height} color={borderColor}>
      <path
        d="M53.3148 7.01137C55.2686 4.54011 53.4273 1.00011 50.1798 1.00011H24.9943C24.3123 0.995126 23.6405 1.16568 23.0436 1.49536C22.4466 1.82505 21.9444 2.30277 21.5855 2.88261L2.52759 34.5927C1.02381 37.0902 2.91385 40.2064 5.93266 40.2064H18.7917L6.67892 70.4502C4.92764 74.2752 9.66023 77.774 12.8403 75.0065L62 28.4914H36.3157L53.3148 7.01137Z"
        fill={fill}
        stroke="currentColor"
        stroke-width={borderWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
}
