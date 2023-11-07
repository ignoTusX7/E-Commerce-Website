/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { fireDB } from "../firebase/FirebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

function MyState(props) {
  // creating product
  const [products, setProducts] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    createdAt: new Date().toLocaleString("en-IN"),
  });

  const addProduct = async () => {
    if (
      !products.title ||
      !products.price ||
      !products.imageUrl ||
      !products.category ||
      !products.description
    ) {
      return toast.error("Please fill all fields");
    }
    const productRef = collection(fireDB, "products");
    try {
      await addDoc(productRef, products);
      toast.success("Product Add successfully");
      getProductData();
    } catch (error) {
      console.log(error);
    }
    setProducts("");
  };

  const [product, setProduct] = useState([]);

  // Get product
  const getProductData = async () => {
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("createdAt")
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
      });
      return () => data;
    } catch (error) {
      console.log(error);
    }
  };

  const edithandle = (item) => {
    setProducts(item);
  };
  // update product
  const updateProduct = async () => {
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully");
      getProductData();
      setTimeout(() => {
        window.location.href = "/admin/dashboard";
      }, 1000);
    } catch (error) {
      console.log(error);
    }
    setProducts("");
  };

  const deleteProduct = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted successfully");
      getProductData();
    } catch (error) {
      // toast.success('Product Deleted Falied')
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        product,
        products,
        setProducts,
        addProduct,
        edithandle,
        deleteProduct,
        updateProduct,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
