import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const navStyles = {
    liClasses: `hover:-translate-y-1 text-lg mx-4 lg:mx-0 hover:underline underline-offset-8 duration-150`,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav
        className={`bg-pink-500 lg:flex duration-150 text-white flex-wrap justify-between items-center`}
      >
        {/* logo */}
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-2xl mx-3">E-Store</div>

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
          className={` lg:space-x-56 duration-150 space-x-0 lg:flex items-center h-auto ${
            isOpen ? `h-auto block ` : `h-0 hidden`
          } `}
        >
          <ul className={`lg:flex gap-4 justify-center `}>
            <li className={`${navStyles.liClasses}`}>
              <a href="">Home</a>
            </li>
            <li className={`${navStyles.liClasses}`}>
              <a href="">Fashions</a>
            </li>
            <li className={`${navStyles.liClasses}`}>
              <a href="">Electronics</a>
            </li>
            <li className={`${navStyles.liClasses}`}>
              <a href="">Mobiles & Tablets</a>
            </li>
            <li className={`${navStyles.liClasses}`}>
              <a href="">Furnitures</a>
            </li>
          </ul>
          {/* buttons */}
          <div className="lg:flex block items-center gap-3 mr-5">
            <button className="bg-pink-700 duration-100 text-white hover:shadow-md hover:outline outline-pink-900 outline-2 p-2 rounded-md my-5 mx-1">
              Login
            </button>
            <button className="bg-pink-700 duration-100 text-white hover:shadow-md hover:outline outline-pink-900 outline-2 p-2 rounded-md my-5 mx-1">
              Sign Up
            </button>
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
        className={`absolute top-0 right-0 bg-pink-200 h-screen lg:w-56 w-44 ${
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
