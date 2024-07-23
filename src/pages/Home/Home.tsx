import "./Home.css";
import Background from "../../Images/Background.png";
import { Global } from "../../utils/Global";
import { Container, Row } from "react-bootstrap";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { useEffect } from "react";

interface HomeProps {}

export default function Home({}: HomeProps) {
  useEffect(() => {
    try {
      // if (adsbygoogle) {
      //   (adsbygoogle = (window as any).adsbygoogle || []).push({});
      // }
    } catch (error) {}
  }, []);
  return (
    <>
      <Container className="content">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9264998623985745"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9264998623985745"
          data-ad-slot="4048235534"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        <h3 className="mt-4">Packs</h3>
        <Row className="justify-content-evenly">
          <FormControlLabel
            control={<Checkbox />}
            label="Turtle"
            style={{ width: 100 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Puppy"
            style={{ width: 100 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Golden"
            style={{ width: 100 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Star"
            style={{ width: 100 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Unicorn"
            style={{ width: 100 }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Custom"
            style={{ width: 100 }}
          />
        </Row>
        <h3 className="mt-4">Sort by</h3>
        <Row>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={["Colors", "Birds"]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Sort By" />}
          />
        </Row>
        <Row className="justify-content-center mt-4">
          <Button variant="contained" style={{ width: 200 }}>
            Create Pack
          </Button>
        </Row>
      </Container>
    </>
  );
}
