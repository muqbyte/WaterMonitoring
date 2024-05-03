import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
    Route,
    Routes,
    Link,
    BrowserRouter,
    useNavigate,
  } from "react-router-dom";
import LoginPages from "../pages/LoginPages/LoginPages";
import Home from "../pages/Home/Home";
import PaymentPages from "../pages/Payment/PaymentPages";
import HomeDesktop from "../components/Desktop/HomeDesktop";
import UsageTrend from "../pages/Trend/UsageTrend";
import Registration from "../pages/Register/Register";


  const AppRoutes = ()=> {
    
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route  path="/" element={<Home />} />\ */}
                <Route  path="/" element={<LoginPages />} />
                <Route  path="/Registration" element={<Registration />} />
                <Route  path="/Home" element={<Home />} />
                <Route  path="/trend" element={<UsageTrend />} />
            </Routes>
        </BrowserRouter>
    )
  }

  export default AppRoutes;