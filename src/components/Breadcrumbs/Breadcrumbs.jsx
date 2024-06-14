import NavigationImage from "../../assets/PageNavigation/Breadcrumbs.png";
import { GoHome } from "react-icons/go";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      return (
        <div key={crumb} className="flex items-center">
          <Link to={currentLink} className="text-white capitalize">
          {crumb}
          </Link>
          {
            index < array.length - 1 && (
              <LiaAngleRightSolid size={16} className="text-gray-300 mx-2"/>
            )
          }
        </div>
      )
    });

  return (
    <div
      className="w-full bg-no-repeat bg-center bg-cover"
      style={{
        background: `linear-gradient(95.02deg, rgba(0, 0, 0, 0.7) 0.034%, rgba(0, 0, 0, 0) 91.306%), url(${NavigationImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-start items-center space-x-4 py-4 sm:py-8 lg:py-12">
          <Link to="/" className="text-white">
            <GoHome size={24} className="text-gray-300" />
          </Link>
          <LiaAngleRightSolid size={16} className="text-gray-300 mx-2"/>
          {crumbs}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
