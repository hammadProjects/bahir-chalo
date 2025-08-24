import React from "react";
import AuthForm from "../_components/AuthForm";
import AuthPage from "../_components/AuthPage";

const SignUpPage = () => {
  return (
    <AuthPage title="Sign Up" description="Create your account to get started.">
      <AuthForm type="sign-up" />
    </AuthPage>
  );
};

export default SignUpPage;
