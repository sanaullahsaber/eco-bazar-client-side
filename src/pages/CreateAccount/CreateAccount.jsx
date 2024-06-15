import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const toggleConfirmShowPassword = () => {
    setConfirmShowPassword((prev)=> !prev)
  }

  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <div className="flex items-center justify-center bg-[#FFFFFF] py-5 px-5 sm:py-5 md:py-10 lg:py-14">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-2xl">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
            Create Account
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
                placeholder="Email"
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
                  placeholder="Password"
                  required
                />
                {showPassword ? (
                  <FaEye
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  />
                )}
              </div>
            </div>

            {/* confirm password */}
            <div className="mb-4 relative">
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={confirmShowPassword ? "text" : "password"}
                  id="confirm-password"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="Confirm Password"
                  required
                />
                {confirmShowPassword ? (
                  <FaEye
                    onClick={toggleConfirmShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={toggleConfirmShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  />
                )}
              </div>
            </div>

            {/* links */}
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
                Accept all terms & Conditions
              </label>
            </div>
            {/* button */}
            <div>
              <input
                type="submit"
                value="Create Account"
                className="w-full px-4 py-2 font-bold text-white bg-[#00B307] rounded-full hover:bg-gradient-to-r from-lime-300 to-green-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </form>
          <div className="mt-4">
            <GoogleLogin></GoogleLogin>
          </div>
          <p className="text-[#666666] text-center mt-5">
            Already have account?
            <Link to={"/sign-in"}>
              <span className="text-[#1A1A1A]">
                <strong> Login</strong>
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;