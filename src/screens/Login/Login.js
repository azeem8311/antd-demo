import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import CustomButton from "../../components/Button";
import Input from "../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "./redux/action";

const Login = () => {
  const [data, setData] = useState([
    {
      name: "email",
      label: "Enter your email",
      value: "",
      key: "email",
      placeholder: "Email",
    },
    {
      name: "password",
      label: "Enter your password",
      value: "",
      key: "password",
      placeholder: "password",
    },
  ]);

  const inputHandler = (e, index) => {
    console.log("new index ", index);
    data[index].value = e.target.value;
    setData([...data]);
  };

  const state = useSelector((state) => state);

  console.log("login state ", state);
  const dispatch = useDispatch();

  console.log("object enteries ", data);

  const submitHandler = (e) => {
    e.preventDefault();
    if (data[0].value === "azeem" && data[1].value === "12345") {
      console.log("login successfully");
      const obj = { token: "abc", isLogin: true };
      dispatch(LoginAction(obj));
    } else {
      console.log("login failed");
    }
  };

  return (
    <Row justify="center" align="middle" className="login-container">
      <Col md={12} lg={18}>
        {data.map((item, index) => (
          <Input
            placeholder={item.placeholder}
            value={item.value}
            className={`mb-2`}
            index={index}
            name={item.name}
            changeHandler={inputHandler}
            key={item.key}
          />
        ))}
        <CustomButton
          text="submit"
          type="primary"
          size="large"
          clickHandler={submitHandler}
        />
      </Col>
    </Row>
  );
};

export default Login;
