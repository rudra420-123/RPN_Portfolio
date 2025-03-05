import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LayOut from "./components/shared/LayOut";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Preloader from "./components/common/Preloader";
import CustomCursor from "./components/common/CustomCursor";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <CustomCursor />
      {!loadingComplete ? (
        <Preloader setLoadingComplete={setLoadingComplete} />
      ) : (
        <>
          <HashRouter>
            <Routes>
              <Route path="/" element={<LayOut />}>
                <Route index element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            </Routes>
          </HashRouter>
        </>
      )}
    </>
  );
}

export default App;
