"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { getUserById } from "@/actions/client-actions/user-actions/get-userId";
import { SessionObject } from "@/types/types";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signIn("credentials", {
        redirect: false,
        ...cred,
      });

      const session = (await getSession()) as SessionObject;
      toast.success(`Welcome ${session.user.email}`);
      router.push(`/${session.user.role}/dashboard`);
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col ">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="Email"
        >
          Email
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setCred({ ...cred, email: e.target.value })}
        />
      </div>
      <div className="flex flex-col">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="Email"
        >
          Password
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="password"
          placeholder="Password"
          name="Password"
          onChange={(e) => setCred({ ...cred, password: e.target.value })}
        />
      </div>

      <div>
        <button
          disabled={!cred.email || !cred.password}
          type="submit"
          className={cn(
            "flex w-full justify-center rounded-md bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  ",
            (!cred.email || !cred.password) &&
              "hover:bg-indigo-300 bg-indigo-300 cursor-not-allowed"
          )}
        >
          <div className="flex item-center justify-center gap-2">
            <p> Sign in</p>
            {loading && (
              <Loader2 className="h-4 w-4 animate-spin text-center mt-1" />
            )}
          </div>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
