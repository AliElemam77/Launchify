import React from "react";
import Products from "../../components/products";
import landingImage from "../../assets/images/landing.jpg";
import Timeline from "../../components/Timeline";

function Index() {
  return (
    <div className="landing px-3 md:px-0 ">
      <div className="shadow-xl hero flex h-screen rounded-s-3xl rounded-e-3xl overflow-hidden">
        <img
          src={landingImage}
          alt="Hero Image"
          className="h-full w-full object-cover"
        />
      </div>
      <Timeline />
      <p className="text-center text-xl font-bold mb-7 mt-20">
        Some of our products
      </p>
      <Products />
    </div>
  );
}

export default Index;
