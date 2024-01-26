import React from "react";
import LoginForm from "./login-form";
import LoginLogo from "./login-logo";

const LoginPage = () => {
  return (
    <div className="w-full flex flex-col justify-center px-6 py-12 lg:px-8">
      <LoginLogo />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
