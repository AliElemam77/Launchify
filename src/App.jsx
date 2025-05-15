import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Signup from "./pages/Signup/index";

import Home from "./pages/Home/index";
import { Provider, useDispatch } from "react-redux";
import { login } from "./redux/slice/authSlice";
import { store } from "./redux/store";
import Products from "./pages/Products/Products";
// import About from "./pages/About/index";
import ProductDetails from "./pages/ProductDetails/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: (
      <div className="text-center text-2xl font-bold mt-10">404 Not Found</div>
    ),
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(login(userId));
    }
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
