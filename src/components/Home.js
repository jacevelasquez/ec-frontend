import React, { useEffect, useState } from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
