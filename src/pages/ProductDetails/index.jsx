import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/slice/productDetailsSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="mt-24 container">
        <div className="flex flex-col md:flex-row items-center gap-12 animate-pulse">
          {/* صورة سكليتون */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-[300px] h-[300px] bg-gray-300 rounded" />
          </div>

          {/* تفاصيل سكليتون */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-6 bg-gray-300 rounded w-1/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="flex gap-4 pt-4">
              <div className="h-10 w-32 bg-gray-300 rounded"></div>
              <div className="h-10 w-32 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="mt-32 text-center text-red-500 text-xl">
        ❌ Error loading product. Please try again later.
      </div>
    );
  }

  return (
    <div className="mt-24 mb-10 container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* صورة المنتج */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-[300px] object-contain"
          />
        </div>

        {/* تفاصيل المنتج */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-2xl text-green-600 font-bold">${product.price}</p>

          <div className="flex items-center gap-4 text-yellow-500">
            <p className="text-md">⭐ {product.rating?.rate}</p>
            <p className="text-sm text-gray-500">
              ({product.rating?.count} reviews)
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
              Add to Cart
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
