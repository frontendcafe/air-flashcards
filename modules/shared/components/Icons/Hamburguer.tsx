import React from "react";
import { Icon } from "@chakra-ui/react";

export default function Hamburguer(props: Object) {
  return (
    <Icon viewBox="0 0 18 10" width="5" height="7" fill="none" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1H17M1 9H17"
          stroke="#0D378D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Icon>
  );
}
