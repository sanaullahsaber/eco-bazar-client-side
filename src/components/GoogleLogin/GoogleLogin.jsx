import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'

  const handleGoogleSignIn = () => {
    googleLogin().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,

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
            toast.success("Google Login Successfully")
            navigate(from, {replace: true})
        })
      }
    })
  }

  return (
    <>
      <div className="bg-gray-200 hover:bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200">
        <div onClick={handleGoogleSignIn} className="btn font-bold  py-2 cursor-pointer text-center flex justify-center items-center gap-2">
          <FcGoogle size={24} />
          <p>Google</p>
        </div>
      </div>
    </>
  );
};

export default GoogleLogin;
