import { CiLocationOn } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const SmallOneNav = () => {
  return (
    <div className="py-3">
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-1">
          <div>
            <CiLocationOn className="text-[#666666]" />
          </div>
          <p className="text-[#666666] font-normal text-base sm:text-lg md:text-xl lg:text-base xl:text-base">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>

        <div className="flex items-center space-x-2 text-[#666666] font-normal text-base sm:text-lg md:text-xl lg:text-base xl:text-base">
          <NavLink
            to={"/sign-in"}
            className={({ isActive }) =>
              isActive
                ? "text-[#00B307] text-base font-medium"
                : "text-[#666666] text-base font-medium"
            }
          >
            Sign In
          </NavLink>
          <span>/</span>
          <NavLink
            to={"/sign-up"}
            className={({ isActive }) =>
              isActive
                ? "text-[#00B307] text-base font-medium"
                : "text-[#666666] text-base font-medium"
            }
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SmallOneNav;
