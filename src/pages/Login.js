import React, { useState, useEffect } from "react";
import logo from "../images/logo.webp";
import "./Login.css";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export const Login = () => {
  const rootUrl = "http://localhost:8000/";
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    try {
      Axios.get(rootUrl + "user/get").then((response) => {
        setUserData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleOnSubmit = async (e) => {
    console.log(userData);
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Fill up all the form!!");
    }
    console.log("1", userData);

    for (var i = 0; i < userData.length; i++) {
      if (userData[i].email === email && userData[i].password === password) {
        Navigate("main");
      }
    }

    // userData.map((user) => {
    //   if (user.email === email && user.password === password) {
    //     Navigate("main");
    //   }
    // });

    setError("Invaild Email or password!");
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
