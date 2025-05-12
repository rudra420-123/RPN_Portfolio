import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LayOut from "./components/shared/LayOut";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Preloader from "./components/common/Preloader";
import CustomCursor from "./components/common/CustomCursor";
import StarCanvas from "./components/canvas/Stars";
import HeroBgAnimation from "./components/HeroBgAnimation";
import { styled } from "@mui/system";

const HeroBg = styled("div")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "end",
  top: "50%",
  left: "50%",
  right: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
  maxWidth: "1360px",
  overflow: "hidden",
  padding: "0 30px",
  transform: "translateX(-50%) translateY(-50%)",
  WebkitTransform: "translateX(-50%) translateY(-50%)",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    padding: "0",
  },
}));

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <HeroBg>
        <StarCanvas />
        <HeroBgAnimation />
      </HeroBg>
      <CustomCursor />
      {!loadingComplete ? (
        <Preloader setLoadingComplete={setLoadingComplete} />
      ) : (
        <>
          <HashRouter>
            <Routes>
              <Route path="/" element={<LayOut />}>
                <Route index element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            </Routes>
          </HashRouter>
        </>
      )}
    </>
  );
};

export default App;
