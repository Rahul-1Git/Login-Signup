import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged-Out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const fetchProducts = async () => {
    try {
      const url = "https://login-signup-back.vercel.app/products";
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      console.log(result);
      setProducts(result);
    } catch (error) {
      handleError(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>{loggedInUser}</h1>
      <button onClick={handleLogout}>LogOut</button>
      <div>
        {products &&
          products?.map((item, index) => (
            <ul key={index}>
              <span>
                {item.name} : {item.price}
              </span>
            </ul>
          ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
