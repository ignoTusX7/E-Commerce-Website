import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
export default function ProductCard({ item }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id);

    if (alreadyInCart) {
      toast.warning("Already in Cart");
    } else {
      product.quantity = 1;
      dispatch(addToCart(product));
      toast.success("Added to the cart");
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-1 m-2 rounded-md drop-shadow-md">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-contain object-center w-full h-full block"
          src={item.imageUrl}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {item.category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {item.title}
        </h2>
        <p className="mt-1">₹{item.price}</p>
        <div className="flex gap-2 justify-between mt-3">
          <button
            className="text-white bg-violet-500 border-0 py-2 px-4 focus:outline-none hover:bg-violet-600 rounded text-sm"
            onClick={() => addCart(item)}
          >
            Add to Cart
          </button>
          <button className="text-white bg-violet-500 border-0 py-2 px-4 focus:outline-none hover:bg-violet-600 rounded text-sm">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
