import { useFormik } from "formik";
import * as Yup from "yup";
import React, { use } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/authSlice";

function index() {
  //navigate to home page after signup
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Formik setup
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://fakestoreapi.com/users",
          {
            username: values.username,
            email: values.email,
            password: values.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(response);
        const userId = response.data.id;
        // console.log(response.data);
        localStorage.setItem("userId", userId);
        dispatch(login(userId));

        // Handle successful account creation (e.g., redirect to login page)
        // For example:
        navigate("/");

        // alert("Account created successfully");
      } catch (error) {
        console.error("Error creating account:", error);
        alert("Error creating account");
      }
    },
  });

  return (
    <div>
      <div className="relative flex flex-col items-center justify-center min-h-screen ">
        <img
          className="w-full h-full absolute -z-50 object-cover "
          src="https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Logo"
        />

        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-md border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg flex flex-col gap-5 justify-center items-center rounded-xl p-8"
        >
          <h1 className="text-3xl text-white font-bold">Create Account</h1>

          {/* Username */}
          <div className="w-full">
            <label className="text-white block text-sm mb-1">Username</label>
            <input
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              type="text"
              placeholder="Your username"
              className="w-full rounded-md px-4 py-2 bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-700"
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-sm text-red-300 mt-1">
                {formik.errors.username}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="w-full">
            <label className="text-white block text-sm mb-1">Email</label>
            <input
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md px-4 py-2 bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-700"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-sm text-red-300 mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="w-full">
            <label className="text-white block text-sm mb-1">Password</label>
            <input
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type="password"
              placeholder="Password"
              className="w-full rounded-md px-4 py-2 bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-700"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-sm text-red-300 mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full text-white font-semibold py-2 px-4 rounded bg-violet-800 hover:bg-violet-900 transition disabled:opacity-50"
          >
            {formik.isSubmitting ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default index;
