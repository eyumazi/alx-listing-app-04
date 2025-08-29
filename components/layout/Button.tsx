import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <div className="inline-block">
      <button
        type={type}
        onClick={onClick}
        className={`
          bg-gray-50 hover:bg-green-50
          text-gray-700 hover:text-green-700
          border border-gray-200 hover:border-green-300
          px-4 py-1.5
          rounded-full
          text-xs
          transition-colors duration-200 font-semibold
          ${className}
        `}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
