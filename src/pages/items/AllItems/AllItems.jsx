import { useContext } from "react";
import Layout from "../../../components/Layout";
import ProductCard from "../../../components/Product Card/ProductCard";
import MyContext from "../../../context/myContext";

export default function AllItems() {
  const context = useContext(MyContext);
  const { product } = context;
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* {console.log(product)} */}
            {product &&
              product.map((item, i) => {
                return <ProductCard key={i} item={item} />;
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
