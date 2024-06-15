import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  return (
    <div>
      <div className="bg-[#00B307] rounded-full hover:bg-gradient-to-r from-green-400 to-green-700 focus:outline-none focus:ring-2 focus:ring-blue-200">
        <div className="btn font-bold text-white py-2 cursor-pointer text-center flex justify-center items-center gap-2">
          <FcGoogle size={24} />
          <p>Google</p>
        </div>
      </div>
    </div>
  );
};

export default GoogleLogin;
