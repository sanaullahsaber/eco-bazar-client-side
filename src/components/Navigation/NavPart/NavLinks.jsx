import { Navbar } from "flowbite-react";
import { FiPhoneCall } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="mt-0 lg:my-5">
      <Navbar fluid rounded className="bg-transparent">
        <Navbar.Collapse>
          <Navbar.Link>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#00B307] text-base font-medium"
                  : "text-white text-base font-medium"
              }
            >
              Home
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#00B307] text-base font-medium"
                  : "text-white text-base font-medium "
              }
            >
              Shop
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink
              to={"/pages"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#00B307] text-base font-medium"
                  : "text-white text-base font-medium"
              }
            >
              Pages
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink
              to={"/blog"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#00B307] text-base font-medium"
                  : "text-white text-base font-medium"
              }
            >
              Blog
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink
              to={"/about-us"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#00B307] text-base font-medium"
                  : "text-white text-base font-medium"
              }
            >
              About Us
            </NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink
              to={"/contact-us"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#00B307] text-base font-medium"
                  : "text-white text-base font-medium"
              }
            >
              Contact US
            </NavLink>
          </Navbar.Link>
        </Navbar.Collapse>

        <Navbar.Toggle />

        <Navbar.Brand className="flex flex-row items-center justify-start gap-1">
          <FiPhoneCall className="text-base font-medium text-white" size={20} />
          <span className="text-base font-medium text-white">
            (219) 555-0114
          </span>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavLinks;
