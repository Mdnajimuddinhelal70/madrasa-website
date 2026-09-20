import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/shared/Footer";

import React from "react";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
