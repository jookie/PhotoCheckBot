"use client"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import "./styles/globals.css"
// import "./index2.css"
// import "./styles/globals2.css"
import { ConvexProvider, ConvexReactClient } from "convex/react";
import HeroSection from "./components/componentsCap/HeroSection.tsx"

// import { ChakraProvider } from "@chakra-ui/react"
// import Navbar from "./components/componentsCap/Navbar.tsx"
import Footer from "./components/componentsCap/Footer.tsx"

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>
    <ConvexProvider client={convex}>
      {/* <ChakraProvider> */}
      {/* <Navbar /> */}
      <HeroSection />
      <App />
      <Footer />
      {/* </ChakraProvider> */}
    </ConvexProvider>
  </React.StrictMode>
);
