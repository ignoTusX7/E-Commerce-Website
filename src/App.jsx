import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NoPageFound from "./pages/404/NoPageFound";
import MyState from "./context/myState";
import Fashions from "./pages/items/Fashions/Fashions";
import Electronics from "./pages/items/Electronics/Electronics";
import MobilesAndTablets from "./pages/items/MobileAndTablets/MobilesAndTablets";
import AllItems from "./pages/items/AllItems/AllItems";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Order/Orders";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Dashboard from "./pages/Admin/Dashboard/dashboard";

function App() {
  return (
    <>
      <MyState>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fashions" element={<Fashions />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/mobile-and-tablets" element={<MobilesAndTablets />} />
          <Route path="/all-items" element={<AllItems />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/product/:id" element={<ProductInfo/>} />
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/*" element={<NoPageFound />} />
        </Routes>
      </MyState>
    </>
  );
}

export default App;
