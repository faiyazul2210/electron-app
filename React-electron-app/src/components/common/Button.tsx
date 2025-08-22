import React from "react";
interface Props {
  text: string;
}
const Button: React.FC<Props> = ({ text }) => {
  return (
    <button
      type="submit"
      className="rounded shadow-sm rounded shadow bg-green-700 text-white py-2 px-4"
    >
      {text}
    </button>
  );
};

export default Button;
