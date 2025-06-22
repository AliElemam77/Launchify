import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../redux/slice/cartSilce";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast.error("You must login to add items to the cart.");
      return;
    }
    dispatch(addToCart(product.id));
    toast.success("Item added to cart!");
  };

  return (
    <div className="group drop-shadow-xl relative overflow-hidden border border-gray-100 bg-white h-[500px] rounded-3xl flex flex-col">
      <NavLink to={`/products/${product.id}`}>
        {/* ... باقي الكود زي ما هو ... */}
        <img
          src={product.image}
          alt=""
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <p className="text-gray-700">
              {product.price}
              <span className="text-gray-400 line-through ms-2">$80</span>
            </p>
            <h3 className="mt-1.5 text-lg font-medium text-gray-900 truncate">
              {product.title}
            </h3>
            <p className="mt-1.5 text-gray-700 truncate">
              {product.description}
            </p>
          </div>
        </div>
      </NavLink>

      <form
        className="mt-4 flex gap-4 p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <button
          onClick={handleAddToCart}
          className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
        >
          Add to Cart
        </button>
        <button
          type="button"
          className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
        >
          Buy Now
        </button>
      </form>

      {/* هنا نضيف ToastContainer عشان يظهر التوست */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default ProductCard;
