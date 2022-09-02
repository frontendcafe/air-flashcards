import React from "react";

import { getStudySessionData } from "@/modules/StudySession/services";
import { Button } from "@chakra-ui/react";

const UserStudySession = () => {
  return (
    <Button
      onClick={() => {
        getStudySessionData("LBz0PhXuEiPEyIy6JloU", "Evt48A7Ri2GaOW8Iluqp");
      }}
    />
  );
};

export default UserStudySession;
