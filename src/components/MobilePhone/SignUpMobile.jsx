import React from "react";
import SarawakMap from "../../assets/SarawakMap.png"
import Laku from "../../assets/Laku.png"
import { useNavigate } from "react-router-dom";



const SignUpMobile=()=>{
    const navigate = useNavigate();
    const homeNavigate = ()=>{
        navigate("/home")
    }

    const navigateLogIn = ()=>{
        navigate("/")
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

                <div className="flex flex-col gap-2 mb-8">
                    <p>Home Address</p>
                    <input className="h-10 border-2 rounded-md"></input>
                </div>

              

                

               
                <div className="flex flex-col items-center justify-center p-2 mt-8" style={{backgroundColor:"#416DA9", borderRadius:8}}>
                    <button onClick={homeNavigate}>
                        <p className="font-bold text-white">Register</p>
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center p-2 mt-8" style={{backgroundColor:"#416DA9", borderRadius:8}}>
                    <button onClick={navigateLogIn}>
                        <p className="font-bold text-white">Log In</p>
                    </button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default SignUpMobile;

