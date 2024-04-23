import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import AboutUs from "./components/AboutUs";
import Works from "./components/Works";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projectdetails from "./components/Projectdetails";
import DataProvider from "./components/DataProvider";
function App() {
  return (
    <Router>
      <DataProvider>
        <Header />
        <Routes>
          <Route
            path="/React--Architect-Website/"
            element={
              <>
                <Home />

                <About />

                <Works />

                <Services />
              </>
            }
          />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route
            path="/portfolio/:category"
            element={
              <>
                <Portfolio />
              </>
            }
          >
            {" "}
          </Route>
          <Route
            path="/portfolio/:category/:id"
            element={
              <>
                <Projectdetails />
              </>
            }
          />
        </Routes>
        <Contact />
      </DataProvider>
    </Router>
  );
}

export default App;
