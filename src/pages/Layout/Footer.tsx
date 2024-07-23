import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { Global } from "../../utils/Global";
import { Button, Link, Typography } from "@mui/material";

export function Copyright(props: any) {
  return (
    <Typography variant="body2" color="whitesmoke" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="/">
        {Global.companyName}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer>
      <Container
        fluid
        style={{ backgroundColor: Global.primaryColor, color: "whitesmoke" }}
      >
        <Row className="d-flex justify-content-around flex-wrap p-4">
          <Col xs={12} lg={4}>
            <Row>Quick Links</Row>
            <Row>
              <Link href="/pricing" className="link-light">
                Pricing
              </Link>
            </Row>
            <Row>
              <Link href="/privacy" className="link-light">
                Privacy Policy
              </Link>
            </Row>
          </Col>
          <Col xs={12} lg={4}>
            <Row>Quick Links</Row>
            <Row>
              <Link href="/privacy" className="link-light">
                Privacy Policy
              </Link>
            </Row>{" "}
            <Row>
              <Link href="/privacy" className="link-light">
                Privacy Policy
              </Link>
            </Row>{" "}
            <Row>
              <Link href="/privacy" className="link-light">
                Privacy Policy
              </Link>
            </Row>
          </Col>
          <Col xs={12} lg={4}>
            <Row>Our mission is your memories.</Row>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center pb-2">
          <Copyright />
        </Row>
      </Container>
    </footer>
  );
}
