import React from "react";
interface Props {}
const TextField: React.FC<Props> = ({ ...args }) => {
  return <input type="text" {...args} />;
};

export default TextField;
