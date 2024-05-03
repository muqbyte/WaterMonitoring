import React from "react";
import CurveLayout from "../../layouts/CurveLayout/CurveLayout";
import TopBar from "../../layouts/TopBar/TopBar";
import Laku from "../../assets/Laku.png"
import HandWater from "../../assets/HandWater.png"
import Payment from "../../assets/Payment.png"
import Help from "../../assets/Help.png"
import Ellipse from "../../assets/Ellipse.png"
import BillCard from "./BillCard";

const HomeDesktop=()=>{
    return(
        
            <TopBar>
                <div style={{width:"100%",display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:5 }}>

                    <div className="flex flex-row items-center justify-center gap-8 ml-6">
                        <div>
                            <img src={Laku} width={110}/>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold" style={{fontFamily: 'Goldman'}}>myPay Air Sarawak</h2>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-8 mr-6">
                        <div>
                        <h2 className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>My Profile</h2>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Log out</h2>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:20, marginLeft:30, width:"40vw"}}>
                    <div>
                        <h2 className="text-2xl font-bold" style={{fontFamily: 'Goldman'}}>Welcome Back, Abdul Muqtadir</h2>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>No 31, Jalan Hang Tuah, Kampung Tersusun Mukah, 996400 Mukah, Sarawak </h2>
                    </div>
                </div>
                {/* card display */}
                <div style={{marginTop:70, marginLeft:70}}>
                    <BillCard/>
                </div>






                {/* card display */}
                {/* <div style={{marginTop:60, display:"flex",flexDirection:"row", justifyContent:"center", alignItems:"center", gap:120}}>

                    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly", alignItems:"center", gap:20}}>
                        <div>
                            <h2 className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Bill Amount Due</h2>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Payment Due</h2>
                        </div>
                    </div>

                    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly", alignItems:"center", gap:20}}>
                        <div>
                            <h2 className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>RM110.00</h2>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>24/5/2024</h2>
                        </div>
                    </div>
                </div> */}
                {/* <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:80, gap:90}}>
                    <div className="flex flex-col items-center justify-center gap-6">
                        <img src={Payment} width={60}/>
                        <p className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Payment</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6">
                        <img src={HandWater} width={60}/>
                        <p className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Water Trend</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6">
                        <img src={Help} width={60}/>
                        <p className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Help</p>
                    </div>
                </div> */}
                
            </TopBar>
        
    )
}

export default HomeDesktop;