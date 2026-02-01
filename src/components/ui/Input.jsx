import React from "react";

/**
 * Reusable Input Component
 * Props:
 *  - label: string
 *  - type: string ('text', 'email', 'password', etc.)
 *  - placeholder: string
 *  - value: string
 *  - onChange: function
 *  - required: boolean
 */

const Input = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full
          px-4 py-2
          border border-gray-300
          rounded-md
          focus:outline-none focus:ring focus:ring-indigo-100 
          bg-white
          text-gray-900
          placeholder-gray-400
          transition
          disabled:bg-gray-100 disabled:cursor-not-allowed
        "
      />
    </div>
  );
};

export default Input;
