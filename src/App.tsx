import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage/NoPage";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Global } from "./utils/Global";

export default function App() {
  return (
    <div style={{ backgroundColor: Global.backgroundColor }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
