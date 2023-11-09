import { useState } from "react";
import Layout from "../../components/Layout";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "@firebase/firestore";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !cpassword) {
      return toast.error("Please fill all fields");
    }
    if (password !== cpassword) {
      return toast.error("Password and Confirm Password do not match", {
        autoClose: 800,
        closeOnClick: true,
      });
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      const userData = {
        name: name,
        email: email,
        uid: user.user.uid,
        createdAt: Timestamp.now(),
      };

      const docRef = await addDoc(collection(fireDB, "users"), userData);

      toast.success("Successfully Created Account", {
        autoClose: 800,
        closeOnClick: true,
      });
    } catch (error) {
      console.error(Error);
      return toast.error("Error! Please try again later", {
        autoClose: 800,
        closeOnClick: true,
      });
    }
  };

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Welcome to E-Cart - Your E-Commerce Website
            </h1>
            <p className="leading-relaxed mt-4">
              Shop from a wide range of products on E-Cart. Join us and enjoy a
              seamless shopping experience.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up for E-Cart
            </h2>
            <form onSubmit={handleSubmit} method="POST">
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="cpassword"
                  className="leading-7 text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  value={cpassword}
                  onChange={(e) => setCPassword(e.target.value)}
                  className="w-full bg-white rounded border border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-violet-500 border-0 py-2 px-8 focus:outline-none hover-bg-violet-600 rounded text-lg">
                Sign Up
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Already have an Account?{" "}
              <Link className="text-blue-800" to={"/login"}>
                Log In
              </Link>
            </p>

            <p className="text-xs text-gray-500 mt-3">
              Join E-Cart for a great shopping experience!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
