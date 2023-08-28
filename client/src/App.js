import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import "./App.css";
import Home from "./Components/home/Home";
import Login from "./Components/LoginAndRegister/Login";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import UrlList from "./Components/urlList/UrlList";

function App() {
  const token = localStorage.getItem("token");
  const userInfo = localStorage.getItem("userInfo");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={token ? <Navigate to='/home' /> : <Navigate to='/login' />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/url' element={<UrlList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
