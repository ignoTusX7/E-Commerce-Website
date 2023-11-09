import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductCard({ item }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const addCart = (product) => {
    if (window.localStorage.getItem("user")) {
      const alreadyInCart = cartItems.some((item) => item.id === product.id);
      if (alreadyInCart) {
        toast.warning("Already in Cart");
      } else {
        product.quantity = 1;
        dispatch(addToCart(product));
        toast.success("Added to the cart");
      }
    } else {
      return navigate("/login");
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    // <div className="lg:w-1/5 md:w-1/2 p-4 w-full border-1 mx-4 rounded-md drop-shadow-md justify-between">
    //   <a className="block relative h-48 rounded overflow-hidden">
    //     <img
    //       alt="ecommerce"
    //       className="object-contain object-center w-full h-full block"
    //       src={item.imageUrl}
    //     />
    //   </a>
    //   <div className="mt-4">
    //     <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
    //       {item.category}
    //     </h3>
    //     <h2 className="text-gray-900 title-font text-lg font-medium">
    //       {item.title}
    //     </h2>
    //     <p className="mt-1">₹{item.price}</p>
    //     <div className="flex gap-2 justify-between mt-3">
    //       <button
    //         className="text-white bg-violet-500 border-0 py-2 px-3 focus:outline-none hover:bg-violet-600 rounded text-sm"
    //         onClick={() => addCart(item)}
    //       >
    //         Add to Cart
    //       </button>
    //       <button className="text-white bg-violet-500 border-0 py-2 px-4 focus:outline-none hover:bg-violet-600 rounded text-sm">
    //         View
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="p-4 md:w-1/4 ">
      <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
        <div className="flex justify-center cursor-pointer">
          <img
            className=" rounded-2xl w-full h-80 p-2 object-contain"
            src={item.imageUrl}
            alt="blog"
          />
        </div>
        <div className="p-5 border-t-2">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {item.brand}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {item.title}
          </h1>
          {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
          <p className="leading-relaxed mb-3">₹ {item.price}</p>
          <div className=" flex justify-center gap-3 ">
            <button
              type="button"
              className="focus:outline-none text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full duration-200  py-2"
              onClick={() => addCart(item)}
            >
              Add To Cart
            </button>
            <button
              onClick={() => navigate(`/product/${item.id}`)}
              className="focus:outline-none ring-2 ring-violet-500 text-violet-600 bg-white hover:bg-violet-500 hover:text-white focus:ring-4 focus:ring-purple-300  rounded-lg w-full duration-200 "
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
