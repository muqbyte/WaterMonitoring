import React from "react";
import Laku from "../../assets/Laku.png"
import Ellipse from "../../assets/Ellipse.png"
import Home from "../../assets/Home.png"
import Payment from "../../assets/Payment.png"
import HandWater from "../../assets/HandWater.png"
import Help from "../../assets/Help.png"
import Logo from "../../assets/Logo.png"
import Eagle from "../../assets/EAGLE.png"

const HomeMobile=()=>{
    return(
        <div >
            <div style={{backgroundColor:"#BBCDE5", borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
            <div>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:30, padding:10}}>
                    <img src={Laku} width={80}/>
                    <h2 className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>myPay Air Sarawak</h2>
                </div>
            </div>
            
                    <div style={{ marginLeft:30, display:"flex", flexDirection:"column", gap:5}}>
                        <div>
                            <h2 className="text-base font-bold" style={{fontFamily: 'Goldman'}}>Welcome Back, Abdul Muqtadir</h2>
                        </div>
                       
                    
                    </div>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", position:"relative", paddingBottom:20}}>
                        <div style={{marginTop:20, marginBottom:20}}>
                            <h2 className="text-base font-bold" style={{fontFamily: 'Goldman'}}>Your Bill</h2>
                        </div>
                        <div>
                            <img src={Ellipse} width={150}/>
                        </div>
                        <div style={{position:"absolute", top:"40%"}}>
                            <img src={Home} width={60}/>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",marginTop:5}}>
                            <p className="text-base font-bold" style={{fontFamily: 'Goldman'}}>Amount due</p>
                            <p className="text-base font-bold" style={{fontFamily: 'Goldman'}}>RM110</p>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:10, gap:40}}>
                            <p className="text-base font-bold" style={{fontFamily: 'Goldman'}}>Due in</p>
                            <p className="text-base font-bold" style={{fontFamily: 'Goldman'}}>24 days</p>
                        </div>
                    </div>
            </div>
           
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:30, gap:40}}>
                        <div className="flex flex-col items-center justify-center gap-6">
                            <img src={Payment} width={40}/>
                            <p className="text-sm font-bold" style={{fontFamily: 'Goldman'}}>Payment</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6">
                            <img src={HandWater} width={40}/>
                            <p className="text-sm font-bold" style={{fontFamily: 'Goldman'}}>Water Trend</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6">
                            <img src={Help} width={40}/>
                            <p className="text-sm font-bold" style={{fontFamily: 'Goldman'}}>Help</p>
                        </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center",gap:10, marginTop:20 }}>
                    <div>
                        <button style={{ backgroundColor: "#BBCDE5", padding: "10px 20px", border: "none", borderRadius: 5 }}>
                            <p className="text-sm font-bold">My Profile</p>
                        </button>
                    </div>
                    <div>
                        <button style={{ backgroundColor: "#BBCDE5", padding: "10px 20px", border: "none", borderRadius: 5 }}>
                            <p className="text-sm font-bold">Log Out</p>
                        </button>
                    </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:30}}>
                <div>
                    <h2 className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Developed By</h2>
                </div>
                <div style={{display:"flex", flexDirection:"row",  justifyContent:"center", alignItems:"center"}}>
                    <div>

                    <img src={Logo} width={100}/>
                    </div>
                    <div>
                    <img src={Eagle} width={200}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMobile;