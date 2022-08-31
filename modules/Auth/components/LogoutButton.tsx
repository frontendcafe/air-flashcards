import React from "react";
import { logOut } from "@/modules/Auth/firebase/auth";

const LogoutButton: React.FC = () => {
  return <button onClick={logOut}>Logout</button>;
};

export default LogoutButton;
