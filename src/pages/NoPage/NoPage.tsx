import { Button } from "@mui/material";
import { Global } from "../../utils/Global";

interface NoPageProps {}

export default function NoPage({}: NoPageProps) {
  return (
    <div className="d-flex flex-column justify-content-center">
      <img
        style={{ objectFit: "contain", height: "70vh" }}
        src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?t=st=1719269195~exp=1719272795~hmac=426ec7a15dd0c82ea94e9f1cd717156ab67518abb029b304cd569b9c154d1fd3&w=1800"
      ></img>
      <div className="d-flex justify-content-center mb-4">
        <Button
          href="/"
          variant="contained"
          sx={{
            width: "20vw",
            backgroundColor: Global.secondaryColor,
            ":hover": { backgroundColor: Global.secondaryLightColor },
          }}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}
