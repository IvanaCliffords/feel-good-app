import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import { Container } from "@material-ui/core";



import Navbar from "./layout/Navbar";
import MobileNavbar from "./layout/MobileNavbar";
import Backdrop from "./layout/Backdrop";
import HomeScreen from "./screens/HomeScreen";
import QuotesScreen from "./screens/QuotesScreen";

function App() {


  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar click={() => setMobileToggle(true)} />
        <Backdrop show={mobileToggle} click={() => setMobileToggle(false)} />
        <MobileNavbar show={mobileToggle} click={() => setMobileToggle(false)} />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/quotes" element={<QuotesScreen />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
