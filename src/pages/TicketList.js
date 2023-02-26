import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../components/PageBreadcrumb";
import { TicketTable } from "../components/TicketTable";
import { SearchForm } from "../components/SearchForm";
import { TicketDropdown } from "../components/TicketDropdown";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const TicketList = () => {
  const { account_type } = useSelector((state) => state.users);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row style={{ marginTop: "60px" }}>
        {account_type === "account" ? (
          <Col>
            <Link to={"/add-ticket"}>
              <Button
                variant="outline-success"
                style={{ fontSize: "1.3rem", padding: "10px 40px" }}
              >
                Add New Ticket
              </Button>
            </Link>
          </Col>
        ) : (
          <Col></Col>
        )}
        <Col className="text-right">
          <SearchForm />
          <div className="mt-3 float-end">
            <TicketDropdown />
          </div>
        </Col>
      </Row>
      <hr style={{ marginTop: "30px" }} />
      <Row>
        <Col>
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};
