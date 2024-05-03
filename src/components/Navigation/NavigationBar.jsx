import React from "react";
import Laku from "../../assets/Laku.png"

const NavigationBar=()=>{
    return(
        <div style={{backgroundColor:"#142751", padding:10}}>
             <div style={{width:"100%",display:"flex", flexDirection:"row", justifyContent:"space-between"}}>

                <div className="flex flex-row items-center justify-center gap-8 ml-6">
                    <div>
                        <img src={Laku} width={75}/>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white" style={{fontFamily: 'Goldman'}}>myPay Air Sarawak</h2>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-8 mr-6">
                    <div>
                    <h2 className="text-2xl font-bold text-white" style={{fontFamily: 'Goldman'}}>My Profile</h2>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white" style={{fontFamily: 'Goldman'}}>Log out</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar