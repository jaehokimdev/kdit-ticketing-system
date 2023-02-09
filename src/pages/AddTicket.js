import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageBreadcrumb } from "../components/PageBreadcrumb";
import { AddTicketForm } from "../components/AddTicketForm";
import "./AddTicket.css";
import Axios from "axios";

export const AddtTicket = () => {
  const [categories, setCategories] = useState();
  const rootUrl = "http://localhost:8000/";

  useEffect(() => {
    function fetchData() {
      try {
        Axios.get(rootUrl + "ticket/categories").then((response) => {
          setCategories(response.data);
        });
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

  console.log(categories);
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="addTicket-page">
            <AddTicketForm categories={categories} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
