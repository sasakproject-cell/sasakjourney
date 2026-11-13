"use client";

import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import WhatsAppFloat from "./WhatsAppFloat";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
