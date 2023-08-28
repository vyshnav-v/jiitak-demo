import React, { useEffect } from "react";
import './home.css'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import UrlShortener from "../urlForm/UrlShortener";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo");
    useEffect(() => {
      if (userInfo==null) {
        navigate("/login");
      }
    }, [userInfo]);
  return (
    <div className="bg-yellow-300 w-full " style={{height:"100vh"}}>
      <Navbar />
      <div className='  bg-yellow-300'>
        <div className=' '>
          <UrlShortener />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
