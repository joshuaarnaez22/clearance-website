import React from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { InputProps } from "@/types/types";

const Textarea = ({ label, placeholder, name, labelText }: InputProps) => {
  const { register, formState } = useFormContext();
  const { errors } = formState || {};

  return (
    <div className="flex flex-col">
      {label && (
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={name}
        >
          {label}{" "}
          {labelText && (
            <span className="text-[8px] text-start text-red-400">
              {" "}
              *{labelText}
            </span>
          )}
        </label>
      )}

      <textarea
        {...register(name)}
        className={twMerge(
          " appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
          errors[name] ? "border-red-500" : ""
        )}
        placeholder={placeholder}
        id={name}
        name={name}
      />
      <p className="text-red-500 text-xs italic transition-opacity ease-in duration-700 opacity-100 mt-2">
        {errors[name]?.message?.toString()}
      </p>
    </div>
  );
};

export default Textarea;
