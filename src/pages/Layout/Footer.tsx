import { Col, Container, Row } from "react-bootstrap";
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
        <Row className="d-flex justify-content-center p-3">
          <Copyright />
        </Row>
      </Container>
    </footer>
  );
}
