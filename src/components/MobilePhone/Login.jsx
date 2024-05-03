import React from "react";
import SarawakMap from "../../assets/SarawakMap.png"
import Laku from "../../assets/Laku.png"
import { useNavigate } from "react-router-dom";



const LoginMobile=()=>{
    const navigate = useNavigate();
    const navigateSignUp = ()=>{
        navigate("/Registration")
    }

    const navigateHome = ()=>{
        navigate("/Home")
    }
    return(
        <div className="flex flex-row justify-center h-screen" style={{backgroundColor:"#DFE0E2"}}>
            <div style={{display:"flex", flexDirection:"column", marginTop:30}}>
            <form>
                <div className="flex flex-row items-center justify-center">
                    <img src={Laku} width={160}/>
                </div>

                <div style={{textAlign:"center"}}>
                    <h2 className="text-2xl font-bold">Welcome to myPay Air Sarawak</h2>
                </div>

                <div style={{textAlign:"center", marginTop:20, marginBottom:50}}>
                    <h3 className="text-xl font-semibold">Log in to your account</h3>
                </div>

                <div className="flex flex-col gap-2 mb-6">
                    <p>Email Address</p>
                    <input className="h-10 border-2 rounded-md"></input>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                    <p>Password</p>
                    <input className="h-10 border-2 rounded-md"></input>
                </div>

                <div style={{textAlign:"center"}}>
                    <p>Forget your password?</p>
                </div>

                

                <div className="flex flex-col items-center justify-center p-2 mt-8" style={{backgroundColor:"#416DA9", borderRadius:8}} onClick={navigateHome}>
                    <button>
                        <p className="font-bold text-white">LOG IN</p>
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center p-2 mt-8" style={{ borderRadius:8}} onClick={navigateSignUp}>
                    <button>
                        <p className="font-bold">SIGN UP</p>
                    </button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default LoginMobile;

