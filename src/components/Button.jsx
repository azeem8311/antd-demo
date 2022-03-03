import React from "react";
import { Button } from "antd";

const CustomButton = (props) => {
  const { text } = props;
  return (
    <React.Fragment>
      <Button {...props}>{text}</Button>
    </React.Fragment>
  );
};

export default CustomButton;
