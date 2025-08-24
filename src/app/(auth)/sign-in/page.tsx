import React from "react";
import AuthForm from "../_components/AuthForm";
import AuthPage from "../_components/AuthPage";

const SignInPage = () => {
  return (
    <AuthPage
      title="Sign In"
      description="Enter your email below to login to your account."
    >
      <AuthForm type="sign-in" />
    </AuthPage>
  );
};

export default SignInPage;
