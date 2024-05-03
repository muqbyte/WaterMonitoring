import React from "react";
import HomeDesktop from "../../components/Desktop/HomeDesktop";
import HomeView from "../../components/Desktop/HomeView";
import HomeMobile from "../../components/MobilePhone/HomeMobile";
import HomeSecond from "../../components/MobilePhone/HomeSecond";
import HomeTab from "../../components/Tab/HomeTab";
import HomeTabPro from "../../components/TabPro/HomeTabPro";


const Home=()=>{
  return(
    <div>
          <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
                {/* <HomeMobile/> */}
                <HomeSecond/>
            </div>

            <div className="hidden sm:hidden md:block lg:block xl:hidden 2xl:hidden">
                <HomeTab />
            </div>

            <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
                <HomeTabPro />
            </div>

       
            <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
              <HomeView/>
            </div> 
    </div>
  )
}

export default Home;