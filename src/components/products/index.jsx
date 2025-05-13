import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/productSlice";
import Product from "../../components/Product";
import { NavLink } from "react-router-dom";

function index() {
  const dispatch = useDispatch();

  const skeletonArray = Array(4).fill(0);

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="container mt-9">
      {error && (
        <div className="mb-4 rounded bg-red-100 p-4 text-red-700 shadow">
          {error}
        </div>
      )}

      <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {loading
          ? skeletonArray.map((_, index) => (
              <div
                key={index}
                className="animate-pulse space-y-4 rounded border p-4 shadow"
              >
                <div className="h-40 w-full rounded bg-gray-300"></div>
                <div className="h-4 w-3/4 rounded bg-gray-300"></div>
                <div className="h-4 w-1/2 rounded bg-gray-200"></div>
                <div className="h-8 w-full rounded bg-gray-300 mt-4"></div>
              </div>
            ))
          : products
              .slice(0, 4)
              .map((product) => <Product key={product.id} product={product} />)}
      </div>
      <div className="flex justify-center mt-5 mb-10">
        <NavLink
          to={"products"}
          className="rounded-lg bg-purple-700 font-bold px-4 py-2 text-white transition hover:drop-shadow-2xl hover:scale-105"
        >
          View All Products
        </NavLink>
      </div>
    </div>
  );
}

export default index;
