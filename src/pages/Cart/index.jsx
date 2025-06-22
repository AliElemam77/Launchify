import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function index() {
  const { cartItems, totalQuantity, totalPrice, loading, error } = useSelector(
    (state) => state.cart
  );

  console.log(cartItems,"skadkl");

  return (
    <div>
      <div className="container mx-auto mt-24 mb-10 px-4">
        <h1 className="text-center text-2xl font-bold mb-6">Shopping Cart</h1>
        {loading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <p className="text-gray-800 font-bold">${item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default index;
