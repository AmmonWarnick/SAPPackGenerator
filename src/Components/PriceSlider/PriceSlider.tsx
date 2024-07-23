import {
  Button,
  Card,
  CardActions,
  CardContent,
  Slider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Global } from "../../utils/Global";

interface PriceSliderProps {
  title: string;
  body: string;
}

export default function PriceSlider({}: PriceSliderProps) {
  const [currentSelection, setCurrentSelection] = useState({
    value: 24,
    label: "24 Months",
    price: "$115",
  });
  const marks = [
    {
      value: 6,
      label: "6 Months",
      price: "$70",
    },
    {
      value: 12,
      label: "12 Months",
      price: "$85",
    },
    {
      value: 18,
      label: "18 months",
      price: "$100",
    },
    {
      value: 24,
      label: "24 Months",
      price: "$115",
    },
  ];
  return (
    <>
      <Container fluid className="d-flex justify-content-center align-middle">
        <Card
          sx={{
            minWidth: "40vw",
            minHeight: "70vh",
            marginTop: "10vh",
            boxShadow: "0 1rem 3rem",
            color: Global.primaryColor,
            fontWeight: "bolder",
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <CardContent>
            <div
              className="text-center"
              style={{ color: "black", fontWeight: 900 }}
            >
              <Typography variant="h2" sx={{ fontWeight: 400 }}>
                Price Calculator
              </Typography>
              <hr />
              <Typography variant="h2" sx={{ fontWeight: 300 }}>
                {currentSelection.price}
              </Typography>
              {/* <Typography variant="h6">{currentSelection.label}</Typography> */}
            </div>
          </CardContent>
          <div className="d-flex justify-content-center align-items-end align-items-end">
            <Slider
              aria-label="Temperature"
              //   value={currentSelection.value}
              valueLabelDisplay="auto"
              step={6}
              defaultValue={24}
              marks={marks}
              min={6}
              max={24}
              sx={{
                color: Global.secondaryColor,
              }}
              style={{ width: "60%" }}
              onChange={(event: Event, newValue: number | number[]) => {
                marks.map((item) => {
                  if (item.value === newValue) {
                    setCurrentSelection(item);
                  }
                });
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <Button
              variant="contained"
              href="/bookCreation"
              sx={{
                backgroundColor: Global.secondaryColor,
                ":hover": { backgroundColor: Global.secondaryLightColor },
              }}
            >
              Create Book
            </Button>
          </div>
        </Card>
      </Container>
      {/* spacer */}
      <div style={{ height: "10vh" }}></div>
    </>
  );
}
