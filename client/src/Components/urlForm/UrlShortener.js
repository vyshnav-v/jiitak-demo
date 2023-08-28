import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortener } from "../../actions/urlActions";
import { Toast } from "primereact/toast";
import { retrieveUrlsFail } from "../../features/urlRetrieveSlice";
import SimpleBackdrop from "../loader/MuiBackdrop";

const UrlShortener = () => {
  const dispatch = useDispatch();
  const [urlInput, setUrlInput] = useState("");
  const toast = useRef(null);

  const { userInfo } = useSelector((state) => state.userSignin);
  const shortener = useSelector((state) => state.urlShortener);
  const { shortenerLoading, shortenerError } = shortener;
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("originalUrl", urlInput);
    formData.append("userId", userInfo.user._id);

    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Successfully Added",
      life: 3000,
    });
    // Dispatch the shortener action with the FormData
    dispatch(shortener(formData));
    setUrlInput("");
  };
  useEffect(() => {
    if (shortenerError) {
      toast.current.show({
        severity: "error",
        summary: " URL Shortening Failed",
        detail: shortenerError,
        life: 3000,
      });
    }
    dispatch(retrieveUrlsFail(null));
  }, [shortenerError]);

  return (
    <>
      <SimpleBackdrop loading={shortenerLoading} />

      <Toast ref={toast} />
      <div className=' flex flex-wrap mb-16 mt-16 justify-center'>
        <form onSubmit={handleFormSubmit}>
          <div className='grid gap-6 mb-16 mt-16 '></div>
          <div className='mb-6'>
            <label
              htmlFor='description'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Enter URL
            </label>
            <input
              type='text'
              id='email'
              className='bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='https://example.com'
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              required
            />
          </div>

          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UrlShortener;
