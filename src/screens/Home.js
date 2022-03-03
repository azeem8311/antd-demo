import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    clickHandler();
  }, []);

  const clickHandler = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div>
      <Row justify="start">
        <Col
          lg={{ span: 6 }}
          sm={{ span: 24 }}
          justify="start"
          className="bg-danger"
        >
          hello
        </Col>
      </Row>
      <Button
        type="danger"
        size="large"
        text={!loading && "click me"}
        loading={loading}
      />
    </div>
  );
};

export default Home;
