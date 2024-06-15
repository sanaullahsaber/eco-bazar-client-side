import { Link } from "react-router-dom";
import ErrorImage from "../../assets/ErrorPage/Illustration.png";
import Navigation from "../../components/Navigation/Navigation";
import FooterBT from "../../components/FooterBT/FooterBT";
import SubscribeOurNewsletter from "../../components/SubscribeOurNewsletter/SubscribeOurNewsletter";
const ErrorPage = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="my-8 flex flex-col justify-center items-center px-5 sm:px-6">
        <div className="flex flex-col items-center justify-start">
          <img src={ErrorImage} alt="" />
          <div className="text-center space-y-5">
            <h3 className="text-5xl font-semibold">Oops! page not found</h3>
            <p className="text-lg text-[#808080] font-normal">
              The page you are looking for does not exist.
            </p>
            <Link to={"/"}>
              <button className="btn text-white bg-[#00B307] py-4 px-8 rounded-full mt-6">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <SubscribeOurNewsletter></SubscribeOurNewsletter>
      <FooterBT></FooterBT>
    </>
  );
};

export default ErrorPage;
