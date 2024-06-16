import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Avatar, Dropdown } from "flowbite-react";

const NavLinks = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <div className="mt-0 lg:mt-5">
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
          {user ? (
            <Dropdown
              label={
                <Avatar alt="User settings" img={user?.photoURL} rounded />
              }
              arrowIcon={false}
              inline
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <div className="flex flex-wrap gap-2">
              <Link to={"/sign-in"}>
                <Avatar rounded />
              </Link>
            </div>
          )}
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavLinks;
