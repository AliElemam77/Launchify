import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/allProductsSlice";
import Product from "../../components/Product";

function Products() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const skeletonArray = Array(products.length).fill(0);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="mt-28 mb-20 container">
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
          : products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}

export default Products;
