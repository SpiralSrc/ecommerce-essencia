import React from "react";

interface InputProps {
  type: string;
  name: string;
  value?: string | number | readonly string[] | undefined;
  placeholder: string;
  onChange?: () => void;
}

const Input = ({ type, placeholder, onChange, value, name }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="p-3 rounded-xl placeholder:text-slate-600 bg-slate-100 focus:border-none focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
  );
};

export default Input;
