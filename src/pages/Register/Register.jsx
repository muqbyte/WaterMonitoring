import React from "react";
import LoginMobile from "../../components/MobilePhone/Login";
import LoginTab from "../../components/Tab/Login";
import LoginDesktop from "../../components/Desktop/Login";
import LoginTabPro from "../../components/TabPro/TabPro";
import SignUpDesktop from "../../components/Desktop/SignUp";
import SignUpMobile from "../../components/MobilePhone/SignUpMobile";
import TabSignIn from "../../components/Tab/TabSignUp";
import SignUpPro from "../../components/TabPro/SingUpPro";

const Registration = () => {
    return (
        <div>
            {/* Show LoginMobile component only on small screens */}
            <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
                <SignUpMobile />
            </div>
            {/* /* Show LoginTab component on medium screens */}
            <div className="hidden sm:hidden md:block lg:block xl:hidden 2xl:hidden">
                <TabSignIn />
            </div>
            {/* /* Show LoginTab component tabpro*/}
            <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
                <SignUpPro />
            </div>
            {/* Show LoginDesktop component on large, x-large, and larger screens */}
            <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
                <SignUpDesktop />
            </div> 

            
        </div>
        
    );
};

export default Registration;
