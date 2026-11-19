import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";

import "./App.css";
import About from "./components/About";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <ProductSection />
      <About />
    </>
  );
}

export default App;
