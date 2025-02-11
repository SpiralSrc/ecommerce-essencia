"use client";

import React from "react";

interface FormProps {
  children: React.ReactNode;
  action?: (formData: FormData) => void;
}

const Form = ({ children, action }: FormProps) => {
  return (
    <form
      action={action}
      className="w-3/4 flex flex-col gap-4 mx-auto p-5 rounded-xl border-2 border-teal-500/30"
    >
      {children}
    </form>
  );
};

export default Form;
