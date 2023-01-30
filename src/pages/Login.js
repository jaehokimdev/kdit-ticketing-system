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
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginstatus, setLoginstatus] = useState(false);

  const handleOnSubmit = async (e) => {
    setLoginstatus(false);
    setError("");
    e.preventDefault();

    if (!email || !password) {
      setError("Fill up all the form!!");
    }

    const userData = await userApi();
    // const result = userData.map((user) => {
    //   if (user.email === email && user.password === password) {
    //     loginstatus(true);
    //   } else {
    //     loginstatus(false);
    //   }
    // });
    for (var i = 0; i < userData.length; i++) {
      if (userData[i].email === email && userData[i].password === password) {
        setLoginstatus(true);
      }
    }

    if (loginstatus) {
      console.log("success");
    } else {
      setError("Invaild Email or password!");
    }
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
                {error !== "" && <Alert variant="danger">{error}</Alert>}
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
