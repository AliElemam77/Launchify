import React from "react";
import Products from "../../components/products";

function Index() {
  return (
    <div className="landing px-3 md:px-0 ">
      <div className="hero flex h-screen items-center justify-end   relative ">
        <img
          src="https://img.freepik.com/premium-photo/close-up-small-shopping-cart-laptop_1048944-2260021.jpg?ga=GA1.1.2974258.1730238639&semt=ais_hybrid&w=740"
          alt=""
          className="h-full w-full object-cover "
        />
        <p className="absolute px-5 text-black">
          <span className="text-4xl font-bold  ">Welcome to our store</span>
          <br />
          <span className="text-2xl font-bold  ">
            Get the best deals on your favorite products
          </span>
        </p>
      </div>
      <p className="text-center text-xl font-bold mb-7 mt-10">Some of our products</p>

      <Products />
    </div>
  );
}

export default Index;
