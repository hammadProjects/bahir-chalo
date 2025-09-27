import React from "react";
import AuthForm from "../_components/AuthForm";
import AuthPage from "../_components/AuthPage";
import { registerUserAction } from "../../../../actions/auth";

const SignUpPage = () => {
  return (
    <AuthPage title="Sign Up" description="Create your account to get started.">
      <AuthForm action={registerUserAction} type="sign-up" />
    </AuthPage>
  );
};

export default SignUpPage;
