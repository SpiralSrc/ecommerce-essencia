import Navbar from "@/components/main/nav/Navbar";
import React from "react";

export default function ClientPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
