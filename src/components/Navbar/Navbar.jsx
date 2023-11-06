import { Button } from "@nextui-org/react";
import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navStyles = {
    liClasses: `hover:-translate-y-0.5 text-lg mx-4 lg:mx-0 hover:underline underline-offset-8 duration-150`,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav
        className={`bg-white shadow-md -tran border-b-2 lg:flex duration-150 text-black flex-wrap justify-between items-center`}
      >
        {/* logo */}
        <div className="flex items-center justify-between">
          <div className="text-black font-bold text-2xl mx-3">E-Store</div>

          <div
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
            className="lg:hidden block  text-3xl m-2 active:outline outline-2 rounded-md outline-black"
          >
            <BiMenu />
          </div>
          <div
            className="me-3 text-3xl lg:hidden block"
            onClick={() =>
              isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
            }
          >
            <AiOutlineShoppingCart />
          </div>
        </div>

        {/* nav links */}
        <div
          className={`duration-150 mt-4 lg:mt-0 space-x-0 lg:flex items-center h-auto ${
            isOpen ? `h-auto block ` : `h-0 hidden`
          } `}
        >
          <ul
            className={`lg:flex lg:space-y-0 space-y-3 gap-4 justify-center mr-4`}
          >
            <li className={`${navStyles.liClasses}`}>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={`${navStyles.liClasses}`}>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/fashions"
              >
                Fashions
              </NavLink>
            </li>
            <li className={`${navStyles.liClasses}`}>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/electronics"
              >
                Electronics
              </NavLink>
            </li>
            <li className={`${navStyles.liClasses}`}>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/mobile-and-tablets"
              >
                Mobiles & Tablets
              </NavLink>
            </li>
            <li className={`${navStyles.liClasses}`}>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/allitems"
              >
                All Items
              </NavLink>
            </li>
            <li className={`${navStyles.liClasses}`}>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/order"
              >
                Orders
              </NavLink>
            </li>
            <li className={`${navStyles.liClasses}`}>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/cart"
              >
                Cart
              </NavLink>
            </li>
            <li className={`${navStyles.liClasses}`}>
              <NavLink
                className={({ isActive }) => (isActive ? "font-semibold" : "")}
                to="/admin/dashboard"
              >
                Admin
              </NavLink>
            </li>
          </ul>
          {/* buttons */}
          <div className="lg:flex block items-center gap-3 mr-5 ">
            <Button className="bg-violet-800 text-white my-5 mx-1">
              <NavLink to="/login">Log In</NavLink>
            </Button>
            <Button className="bg-violet-800 text-white mx-1">
              <NavLink to="/signup">Sign Up</NavLink>
            </Button>

            <div
              className="me-3 text-3xl lg:block hidden cursor-pointer"
              onClick={() =>
                isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
              }
            >
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </nav>

      {/* sidebar */}

      <div
        className={`absolute top-0 right-0 bg-violet-300 h-screen lg:w-56 w-44 ${
          isSidebarOpen ? `w-56 block` : `w-0 hidden`
        }  `}
      >
        <div
          className="absolute top-3 duration-150 right-3 text-xl cursor-pointer"
          onClick={() =>
            isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
          }
        >
          <AiOutlineCloseCircle />
        </div>
        <div className="mt-5">
          <h4 className="text-2xl font-bold">Cart: </h4>
          <ul className="ms-3">
            <li>Hello world</li>
            <li>Hello world</li>
            <li>Hello world</li>
            <li>Hello world</li>
            <li>Hello world</li>
            <li>Hello world</li>
          </ul>
        </div>
      </div>
    </>
  );
}
