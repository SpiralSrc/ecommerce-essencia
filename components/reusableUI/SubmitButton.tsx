"use client";

import React from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void | React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

const SubmitButton = ({ children, onClick }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      onClick={onClick}
      disabled={pending}
      className="flex place-self-end my-5 p-3 rounded-xl bg-teal-500 border border-transparent hover:border-teal-700/50 hover:bg-teal-500/30 hover:text-teal-700 hover:shadow-xl transition-all"
    >
      {pending ? "Submitting..." : `${children}`}
    </button>
  );
};

export default SubmitButton;
