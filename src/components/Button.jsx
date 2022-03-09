import React from "react";
import { Button } from "antd";

const CustomButton = (props) => {
  const { text, clickHandler } = props;
  return (
    <React.Fragment>
      <Button {...props} onClick={(e) => clickHandler(e)}>
        {text}
      </Button>
    </React.Fragment>
  );
};

export default CustomButton;
