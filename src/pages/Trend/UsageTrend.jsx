import React from "react";
import LoginMobile from "../../components/MobilePhone/Login";
import LoginTab from "../../components/Tab/Login";
import LoginDesktop from "../../components/Desktop/Login";
import LoginTabPro from "../../components/TabPro/TabPro";
import DesktopTrend from "../../components/Desktop/DesktopTrend/DesktopTrend";
import MobileTrend from "../../components/MobilePhone/MobileTrend.jsx/MobileTrend";

const UsageTrend = () => {
    return (
        <div>
             {/* Show LoginMobile component only on small screens */}
             <div className="hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden">
                <MobileTrend />
            </div>
          
            {/* Show LoginDesktop component on large, x-large, and larger screens */}
            <div className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block">
                 <DesktopTrend/>
            </div> 
        </div>
        
    );
};

export default UsageTrend;
