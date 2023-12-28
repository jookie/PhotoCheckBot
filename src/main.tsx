"use client"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/globals.css"
import { ConvexProvider, ConvexReactClient } from "convex/react";
import HeroSection from "./components/componentsCap/HeroSection.tsx"

import { ChakraProvider } from "@chakra-ui/react"

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <React.StrictMode>
      <ConvexProvider client={convex}>
        <HeroSection />
        <App />
      </ConvexProvider>
    </React.StrictMode>
  </ChakraProvider>
);
