import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import { FileInput, Label } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { imageUpload } from "../../api/imgbb";

const CreateAccount = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [passMatch, setPassMatch] = useState(true);

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmShowPassword = () => {
    setConfirmShowPassword((prev) => !prev);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.files[0];
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    console.log(name, email, image, password, confirmPassword);

    if (password !== confirmPassword) {
      setPassMatch(false);
      return;
    } else {
      setPassMatch(true); // Hide the message when passwords match
    }

    if (password === confirmPassword) {
      imageUpload(image).then((imgData) => {
        const imageUrl = imgData?.data?.url;
        createUser(email, password).then((data) => {
          if (data?.user?.email) {
            const userInfo = {
              email: data?.email?.email,
              name: data,
            };
            fetch(`${import.meta.env.VITE_API_URL}/user`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                updateUserProfile(name, imageUrl).then(() => {
                  toast.success("Account Create Successfully");
                  form.reset();
                  navigate(from, { replace: true });
                });
              });
          }
        });
      });
    }
  };

  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <div className="flex items-center justify-center bg-[#FFFFFF] py-5 px-5 sm:py-5 md:py-10 lg:py-14">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-2xl">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
            Create Account
          </h2>
          <form onSubmit={handleCreateAccount}>
            {/* name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg 
              focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Name"
                required
              />
            </div>
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
                name="email"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg 
              focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Email"
                required
              />
            </div>

            {/* input file for image upload */}
            <div id="fileUpload" className="max-w-md">
              <div className="mb-2 block">
                <Label
                  htmlFor="file"
                  className="text-sm font-medium text-gray-700"
                  value="Upload file"
                />
              </div>
              <FileInput
                id="file"
                name="image"
                className="bg-zinc-200 rounded-lg"
                helperText="A profile picture is useful to confirm your are logged into your account"
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
                  name="password"
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
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={confirmShowPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
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

            {!passMatch && (
              <div className="my-2">
                <p className="text-red-500 text-lg">Passwords do not match!</p>
              </div>
            )}

            {/* links */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember"
                required
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
