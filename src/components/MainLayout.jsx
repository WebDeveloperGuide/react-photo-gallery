import Footer from "./Footer";
import GalleryLayout from "./GalleryLayout";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";

import Header from "./Header";

function MainLayout() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div className="bg-[#eff0f4] px-5 py-2">
      <Header />
      <GalleryLayout />
      <Footer />
    </div>
  );
}

export default MainLayout;
