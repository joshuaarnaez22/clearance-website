import React from "react";

import UserForm from "./_components/user-form";

export const dynamic = "force-dynamic";
const CreateUserPage = async () => {
  return (
    <div className="p-6">
      <h1 className=""></h1>
      <UserForm />
    </div>
  );
};

export default CreateUserPage;
