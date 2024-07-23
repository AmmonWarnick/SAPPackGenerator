import { Col, Container, Row } from "react-bootstrap";
import { Global } from "../../utils/Global";

interface HeroBannerProps {
  title: string;
  subTitle?: any;
  image: string;
  primaryButton: any;
  secondaryButton: any;
  flipImage?: boolean;
}

export default function HeroBanner({
  title,
  subTitle,
  image,
  primaryButton,
  secondaryButton,
  flipImage = false,
}: HeroBannerProps) {
  return (
    <>
      <Container
        fluid
        className="mt-4 mb-4"
        style={{ backgroundColor: Global.backgroundColor }}
      >
        <Row>
          <Col className="d-flex flex-column my-auto">
            <Row className="text-center">
              <div style={{ height: "5vh" }}></div>
              <h1>{title}</h1>
              <p>{subTitle}</p>
            </Row>
            <Col className="d-flex justify-content-center">
              {primaryButton}
              {secondaryButton}
            </Col>
          </Col>
          <Col md={6} className="d-none d-md-block">
            <img
              src={image}
              style={{
                height: "100%",
                width: "100%",
                transform: `scale(.7) ${
                  flipImage ? "scaleX(-1)" : "scaleX(1)"
                }`,
              }}
            ></img>
          </Col>
        </Row>
      </Container>
      {/* spacer */}
      {/* <div style={{ height: "15vh" }}></div> */}
    </>
  );
}
