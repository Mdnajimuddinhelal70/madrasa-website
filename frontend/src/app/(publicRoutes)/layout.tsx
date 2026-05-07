import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* <footer className="text-center p-4 bg-gray-100">© Madrasa</footer> */}
    </>
  );
};

export default PublicLayout;
