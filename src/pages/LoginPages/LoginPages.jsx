import React from "react";
import LoginMobile from "../../components/MobilePhone/Login";
import LoginTab from "../../components/Tab/Login";
import LoginDesktop from "../../components/Desktop/Login";
import LoginTabPro from "../../components/TabPro/TabPro";

const LoginPages = () => {
    return (
        <div>
            {/* Show LoginMobile component only on small screens */}
            <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
                <LoginMobile />
            </div>
            {/* /* Show LoginTab component on medium screens */}
            <div className="hidden sm:hidden md:block lg:block xl:hidden 2xl:hidden">
                <LoginTab />
            </div>
            {/* /* Show LoginTab component tabpro*/}
            <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
                <LoginTabPro />
            </div>
            {/* Show LoginDesktop component on large, x-large, and larger screens */}
            <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
                <LoginDesktop />
            </div> 

            
        </div>
        
    );
};

export default LoginPages;
