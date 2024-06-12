import NavLogo from "../../../assets/Vector.png";
import { FaSearch } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { Link } from "react-router-dom";

const MiddleNav = () => {
  return (
    <>
      <div className="my-2 sm:my-2 md:my-4 lg:my-7">
        {/*  for small Screens   */}
        <div className="md:hidden">
          <div className="flex justify-between">
            {/* Logo and Brand Name */}
            <div className="flex items-center gap-1">
              <img src={NavLogo} alt="" className="h-8 sm:h-auto" />
              <div>
                <Link to={"/"}>
                  <p className="text-base sm:text-base md:text-xl lg:text-3xl font-medium">
                    Ecobazar
                  </p>
                </Link>
              </div>
            </div>
            {/* Icons and Cart */}
            <div className="flex mt-4 sm:mt-0 items-center gap-4">
              <IoIosHeartEmpty size={25} />
              <span className="text-2xl">|</span>
              <div className="flex items-center gap-3">
                <SlHandbag size={25} />
                <div>
                  <p>shopping cart:</p>
                  <p>
                    <strong>${0}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Search Input and Button */}
          <div className="flex items-center max-w-md mt-4 sm:mt-0 px-5">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <button className="px-4 py-2 bg-[#00B307] text-white rounded-r-md hover:bg-[#00A803] focus:outline-none focus:ring-2 focus:ring-lime-500">
              Search
            </button>
          </div>
        </div>

        {/*  for big Screens   */}
        <div className="hidden md:block ">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            {/* Logo and Brand Name */}
            <div className="flex items-center gap-1">
              <img src={NavLogo} alt="" className="h-8 sm:h-auto" />
              <div>
                <Link to={"/"}>
                  <p className="text-base sm:text-base md:text-xl lg:text-3xl font-medium">
                    Ecobazar
                  </p>
                </Link>
              </div>
            </div>

            {/* Search Input and Button */}
            <div className="flex items-center max-w-md mt-4 sm:mt-0">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
                <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
              </div>
              <button className="px-4 py-2 bg-[#00B307] text-white rounded-r-md hover:bg-[#00A803] focus:outline-none focus:ring-2 focus:ring-lime-500">
                Search
              </button>
            </div>

            {/* Icons and Cart */}
            <div className="flex mt-4 sm:mt-0 items-center gap-4">
              <IoIosHeartEmpty size={32} />
              <span className="text-3xl">|</span>
              <div className="flex items-center gap-3">
                <SlHandbag size={32} />
                <div>
                  <p>shopping cart:</p>
                  <p>
                    <strong>${0}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleNav;
