import React from "react";
import Image from "next/image";

const LoginLogo = () => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Image height={150} width={150} alt="logo" src="/logo.svg" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>
  );
};

export default LoginLogo;
