import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/allProductsSlice";
import Product from "../../components/Product";
import { NavLink } from "react-router-dom";

function Index() {
  const dispatch = useDispatch();
  const skeletonArray = Array(4).fill(0);

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen pt-5 text-white">
      <div className="container mx-auto px-4">
        {error && (
          <div className="mb-4 rounded bg-red-100 p-4 text-red-700 shadow">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {loading
            ? skeletonArray.map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse space-y-4 rounded-xl border border-gray-700 bg-[#1E293B] p-4 shadow-md"
                >
                  <div className="h-40 w-full rounded bg-gray-600/30"></div>
                  <div className="h-4 w-3/4 rounded bg-gray-600/20"></div>
                  <div className="h-4 w-1/2 rounded bg-gray-500/20"></div>
                  <div className="h-8 w-full rounded bg-gray-600/30 mt-4"></div>
                </div>
              ))
            : products
                .slice(0, 4)
                .map((product) => (
                  <Product key={product.id} product={product} />
                ))}
        </div>

        <div className="flex justify-center mt-10 mb-16">
          <NavLink
            to={"products"}
            className="rounded-lg bg-cyan-500 px-6 py-2 text-white font-semibold shadow-md hover:scale-105 hover:shadow-cyan-400/40 transition duration-300"
          >
            View All Products
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Index;
