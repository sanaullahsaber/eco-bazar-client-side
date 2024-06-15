import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <div className="flex items-center justify-center bg-[#FFFFFF] py-5 px-5 sm:py-5 md:py-10 lg:py-20">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-2xl">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
            Sign In
          </h2>
          <form>
            {/* email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg 
              focus:outline-none focus:ring focus:ring-blue-200"
                required
              />
            </div>

            {/* password */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  required
                />
                {showPassword ? (
                  <FaEye
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEyeSlash
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>

            {/* links */}
            <div className="flex flex-row justify-between">
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <Link>
                <p className="ml-2 text-sm font-medium text-gray-700">
                  Forget Password
                </p>
              </Link>
            </div>
            {/* button */}
            <div>
              <input
                type="submit"
                value="Sign In"
                className="w-full px-4 py-2 font-bold text-white bg-[#00B307] rounded-lg hover:bg-gradient-to-r from-lime-300 to-green-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            {/*  */}
            <p className="text-[#666666] text-center mt-5">
              Don’t have account?
              <Link to={"/sign-up"}>
                <span className="text-[#1A1A1A]">
                  <strong> Register</strong>
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
//////////////
