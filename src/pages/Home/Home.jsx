import { useContext } from "react";
import Layout from "../../components/Layout";
import MyContext from "../../context/myContext";
import HeroSection from "../../components/HeroSection/HeroSection";
import Filter from "../../components/HeroSection/Fiilter";
import ProductCard from "../../components/HeroSection/ProductCards";
import Features from "../../components/HeroSection/Features";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const context = useContext(MyContext);
  // const dispatch = useDispatch();
  // const cartItem = useSelector((state) => state.cart);

  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Features />
    </Layout>
  );
}
