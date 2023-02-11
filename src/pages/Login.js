import React, { useState, useEffect } from "react";
import logo from "../images/logo.webp";
import "./Login.css";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllusers } from "./userAction";
import { useSelector } from "react-redux";

export const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginerror, setLoginError] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllusers());
  }, [dispatch]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");

    if (!email || !password) {
      setLoginError("Fill up all the form!!");
    }

    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        Navigate("main");
      }
    }

    setLoginError("Invaild Email or password!");
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

  const { users, isLoading, error } = useSelector((state) => state.users);

  if (isLoading) return <h3>Loading ....</h3>;

  if (error) return <h3>{error}</h3>;

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
                {error !== "" && <Alert variant="danger">{loginerror}</Alert>}
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
