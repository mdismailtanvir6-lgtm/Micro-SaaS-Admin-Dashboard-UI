import React from "react";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  eyeIcon,
}) => {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded-md border border-gray-300 outline-none px-4 py-2.5 text-sm bg-transparent
            ${
              error
                ? "border-red-500 focus:ring-red-500/20"
                : "border-neutral-300 focus:border-indigo-500 focus:ring-indigo-500/20"
            }
            text-neutral-900 placeholder-neutral-400
            focus:outline-none focus:ring
            dark:border-neutral-700 dark:text-neutral-100 dark:placeholder-neutral-500`}
        />

        {eyeIcon && (
          <div className="absolute flex items-center right-3 top-1/2 -translate-y-1/2">
            {eyeIcon}
          </div>
        )}
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
