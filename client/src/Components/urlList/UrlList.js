import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { retrieveUrls } from "../../actions/urlActions";
import SingleUrlList from "./SingleUrlList";
import SimpleBackdrop from "../loader/MuiBackdrop";
import { useNavigate } from "react-router-dom";

const UrlList = () => {
  const dispatch = useDispatch();

  const itemsPerPage = 5; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo");
  useEffect(() => {
    if (userInfo == null) {
      navigate("/login");
    }
  }, [userInfo]);
  useEffect(() => {
    dispatch(retrieveUrls());
  }, [dispatch]);

  const UrlList = useSelector((state) => state.retrieveUrls);
  const { urls, retrieveLoading, retrieveError } = UrlList;

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(urls.data?.length / itemsPerPage);

  return (
    <>
      <SimpleBackdrop loading={retrieveLoading} />

      <Navbar />
      <div
        className='bg-yellow-300 w-full mt-16 flex justify-center items-center '
        style={{ height: "100vh" }}
      >
        <div className=' ' style={{ height: "" }}>
          <h2 className='mb-4 self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Shorten URLS
          </h2>
          {urls.data?.slice(startIndex, endIndex).map((url) => (
            <div
              className='flex items-center mb-5 justify-center'
              key={url._id}
            >
              <SingleUrlList url={url} />
            </div>
          ))}
          <div className='flex items-center justify-center'>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UrlList;
