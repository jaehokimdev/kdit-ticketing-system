import React, { useState } from "react";
import logo from "../images/logo.webp";
import "./Login.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import userApi from "../api/userApi";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Fill up all the form!!");
    }

    const userData = await userApi();
    console.log(userData);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="login-main">
      <img className="logo" src={logo} alt="logo" />
      <div className="login-page">
        <div className="login-form">
          <Container>
            <Row>
              <Col>
                <h1 style={{ textAlign: "center" }}>LOGIN</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleOnChange}
                      placeholder="Enter Email"
                    />
                  </Form.Group>
                  <br />
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleOnChange}
                      placeholder="Enter Password"
                    />
                  </Form.Group>
                  <br />
                  <Button type="submit">Login</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
