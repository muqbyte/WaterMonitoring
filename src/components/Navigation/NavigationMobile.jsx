import React, { useState } from "react";
import Laku from "../../assets/Laku.png";

const NavigationMobile = () => {
  const [slideVisible, setSlideVisible] = useState(false);

  const toggleSlide = () => {
    setSlideVisible(!slideVisible);
  };

  const handleProfileClick = () => {
    // Handle profile button click
    console.log("Profile clicked");
  };

  const handleLogoutClick = () => {
    // Handle logout button click
    console.log("Logout clicked");
  };

  const handleCloseSlide = () => {
    setSlideVisible(false);
  };

  return (
    <div style={{ backgroundColor: "#142751", padding: 10 }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div className="flex flex-row items-center justify-center gap-4">
          <div>
            <img src={Laku} width={75} alt="Logo" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white" style={{ fontFamily: 'Goldman' }}>myPay Air Sarawak</h2>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-8 mr-6">
          <button className="text-sm font-bold text-white" style={{ fontFamily: 'Goldman' }} onClick={toggleSlide}>
            Menu
          </button>
        </div>
      </div>
      {slideVisible && (
        <div style={{ backgroundColor: "#142751", padding: "10px 20px", marginTop: 10, position: "fixed", top: 0, right: 0, bottom: 0, width: "50%", zIndex: 9999, display:"flex", flexDirection:"column" }}>
          <button className="text-sm font-bold text-white" style={{ fontFamily: 'Goldman', marginBottom: 10 }} onClick={handleProfileClick}>
            My Profile
          </button>
          <button className="text-sm font-bold text-white" style={{ fontFamily: 'Goldman', marginBottom: 10 }} onClick={handleLogoutClick}>
            Log out
          </button>
          <button className="text-sm font-bold text-white" style={{ fontFamily: 'Goldman', marginBottom: 10 }} onClick={handleCloseSlide}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default NavigationMobile;
