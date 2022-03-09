import React from "react";
import { Input } from "antd";

const CustomInput = (props) => {
  console.log("props ", props);
  const { changeHandler, index } = props;

  console.log("index ", index);
  return (
    <>
      <Input
        className="mb-2"
        onChange={(e) => changeHandler(e, index)}
        {...props}
      />
    </>
  );
};

export default CustomInput;
