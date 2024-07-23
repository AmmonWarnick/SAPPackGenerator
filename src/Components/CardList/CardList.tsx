import { Card, CardContent, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { Global } from "../../utils/Global";

interface Card {
  icon?: any;
  title?: string;
  body?: any;
  action?: any;
}

interface CardListProps {
  cards: Card[];
  showWave?: boolean;
  title?: string;
  backgroundColor?: string;
}

export default function CardList({
  cards,
  showWave = true,
  title,
  backgroundColor = Global.primaryColor,
}: CardListProps) {
  const getCard = (card: Card, index: number) => {
    return (
      <div>
        <Card
          key={index}
          sx={{
            minWidth: 300,
            maxWidth: 345,
            height: 400,
            marginTop: "10vh",
            margin: "2rem",
            boxShadow: "0 1rem 3rem",
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          {card.icon && (
            <Container className="d-flex justify-content-center mt-2">
              {card.icon}
            </Container>
          )}
          <CardContent>
            <Typography variant="h4" className="text-center">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.body}
            </Typography>
          </CardContent>
          <Container className="d-flex justify-content-center">
            {card.action}
          </Container>
        </Card>
      </div>
    );
  };
  return (
    <>
      {showWave && (
        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 160"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color={Global.primaryColor} offset="0%"></stop>
              <stop
                stop-color="rgba(187.733, 225.21, 255, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 1px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,0L240,24C480,48,960,96,1440,106.7C1920,117,2400,91,2880,66.7C3360,43,3840,21,4320,29.3C4800,37,5280,75,5760,93.3C6240,112,6720,112,7200,98.7C7680,85,8160,59,8640,58.7C9120,59,9600,85,10080,82.7C10560,80,11040,48,11520,29.3C12000,11,12480,5,12960,5.3C13440,5,13920,11,14400,34.7C14880,59,15360,101,15840,122.7C16320,144,16800,144,17280,138.7C17760,133,18240,123,18720,104C19200,85,19680,59,20160,40C20640,21,21120,11,21600,10.7C22080,11,22560,21,23040,26.7C23520,32,24000,32,24480,32C24960,32,25440,32,25920,40C26400,48,26880,64,27360,74.7C27840,85,28320,91,28800,96C29280,101,29760,107,30240,109.3C30720,112,31200,112,31680,96C32160,80,32640,48,33120,37.3C33600,27,34080,37,34320,42.7L34560,48L34560,160L34320,160C34080,160,33600,160,33120,160C32640,160,32160,160,31680,160C31200,160,30720,160,30240,160C29760,160,29280,160,28800,160C28320,160,27840,160,27360,160C26880,160,26400,160,25920,160C25440,160,24960,160,24480,160C24000,160,23520,160,23040,160C22560,160,22080,160,21600,160C21120,160,20640,160,20160,160C19680,160,19200,160,18720,160C18240,160,17760,160,17280,160C16800,160,16320,160,15840,160C15360,160,14880,160,14400,160C13920,160,13440,160,12960,160C12480,160,12000,160,11520,160C11040,160,10560,160,10080,160C9600,160,9120,160,8640,160C8160,160,7680,160,7200,160C6720,160,6240,160,5760,160C5280,160,4800,160,4320,160C3840,160,3360,160,2880,160C2400,160,1920,160,1440,160C960,160,480,160,240,160L0,160Z"
          ></path>
        </svg>
      )}
      <div style={{ backgroundColor: backgroundColor }}>
        <h1
          className="text-center"
          style={{ fontSize: "80px", color: "whitesmoke" }}
        >
          {title}
        </h1>
        <Container fluid className="d-flex justify-content-around flex-wrap">
          {cards.map(getCard)}
        </Container>
        {/* spacer */}
        <div style={{ height: "15vh" }}></div>
      </div>
    </>
  );
}
