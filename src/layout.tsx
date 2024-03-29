"use client";
import React from "react";

import Home from "./page";
import "./input.css";
import "./index.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// import "./styles/globals.css"
// import "./index2.css"
// import "./styles/globals2.css"
import { ConvexProvider, ConvexReactClient } from "convex/react";

// import ConvexClientProvider from "./ConvexClientProvider";

import HeroSection from "./components/componentsCap/HeroSection";

import Footer from "./components/componentsCap/Footer";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <ConvexProvider client={convex}>
//       {/* <Navbar /> */}
//       {/* <ActiveSlider/> */}
//       <HeroSection />
//       <Home />
//       {<Footer />}
//     </ConvexProvider>
//   </React.StrictMode>
// );

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
         <ConvexProvider client={convex}>
          {/* <Navbar /> */}
          <HeroSection />
          <Home />
          {<Footer />}
          {children}
        </ConvexProvider>
      </body>
    </html>
  );
}
