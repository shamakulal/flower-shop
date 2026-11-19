import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";

import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <ProductSection />
    </>
  );
}

export default App;
