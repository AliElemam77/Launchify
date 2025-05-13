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

        <form className="w-1/2 border transition-all hover:scale-x-100 border-black flex flex-col gap-y-5 justify-center items-center rounded-md p-5 mb-4 backdrop-blur-md">
          <h1 className="text-3xl text-white font-bold mb-4">
            Create an Account
          </h1>
          {/* username */}
          <div className="mb-4 w-full">
            <label className="block text-white text-sm font-bold mb-2">
              Username
            </label>
            <input
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              type="text"
              placeholder="Username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {formik.touched.username && formik.errors.username && (
            <div
              role="alert"
              className="border-s-4 w-full border-red-700 bg-red-50 p-4"
            >
              <div className="flex items-center gap-2 text-red-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <strong className="font-medium">
                  {" "}
                  {formik.errors.username}{" "}
                </strong>
              </div>
            </div>
          )}

          {/* Email */}
          <div className="mb-4 w-full">
            <label className="block text-white text-sm font-bold mb-2">
              Email
            </label>
            <input
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type="email"
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <div
              role="alert"
              className="border-s-4 w-full border-red-700 bg-red-50 p-4"
            >
              <div className="flex items-center gap-2 text-red-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <strong className="font-medium"> {formik.errors.email}</strong>
              </div>
            </div>
          )}
          {/* Password */}
          <div className="mb-4 w-full">
            <label className="block text-white text-sm font-bold mb-2">
              Password
            </label>
            <input
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <div
              role="alert"
              className="border-s-4 w-full border-red-700 bg-red-50 p-4"
            >
              <div className="flex items-center gap-2 text-red-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <strong className="font-medium">
                  {" "}
                  {formik.errors.password}{" "}
                </strong>
              </div>
            </div>
          )}
          {/* Submit button */}
          <div className="flex items-center justify-between">
            <button
              onClick={formik.handleSubmit}
              className="bg-violet-950 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              {formik.isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1.5 15h-3v-2h3v2zm0-4h-3V7h3v6z"
                  />
                </svg>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default index;
