import React from "react";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
