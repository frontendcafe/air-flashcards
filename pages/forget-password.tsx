import { NextPage } from "next";

import { ForgetPasswordPage } from "@/modules/Auth/components/ForgetPasswordPage";

const LoginPage: NextPage & { redirectIfAuthenticated: boolean } = () => {
  return <ForgetPasswordPage />;
};

LoginPage.redirectIfAuthenticated = true;

export default LoginPage;
