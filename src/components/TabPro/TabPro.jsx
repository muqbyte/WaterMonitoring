import React from "react";
import SarawakMap from "../../assets/SarawakMap.png"
import Laku from "../../assets/Laku.png"
import { useNavigate } from "react-router-dom";




const LoginTabPro=()=>{

    const navigate = useNavigate();
    const navigateHome = ()=>{
        navigate("/Home")
    }

    const navigateRegister = ()=>{
        navigate("/Registration")
    }
    return(
    <div className="flex flex-col items-center justify-center h-screen gap-10" style={{backgroundColor:"#DFE0E2"}}>
            
        <div className="flex flex-col items-center justify-center gap-8 mb-4">
            <img src={Laku} width={160} />
            <h2 className="text-2xl font-bold">Welcome to myPay Air Sarawak</h2>
        </div>

        <div style={{width:"50vw", backgroundColor:"white", borderRadius:10}}>
            <form>
               <div style={{display:"flex", flexDirection:"row",justifyContent:"space-evenly"}}>
                    <div style={{textAlign:"center",  flex:1}}>
                        <h2 className="p-2 text-2xl font-bold">Log in</h2>
                    </div>

                    <div style={{textAlign:"center", backgroundColor:"#EBEBEB", flex:1, borderTopRightRadius:10}} onClick={navigateRegister}>
                        <h2 className="p-2 text-2xl font-bold">Sign up</h2>
                    </div>
               </div>

                
                <div style={{display:"flex", flexDirection:"column"}}>
                <div className="mt-4 mb-4 text-center">
                    <h3 className="text-xl font-semibold">Log in to your account</h3>
                </div>
                    <div className="flex flex-col gap-1 mb-4 ml-20">
                        <p>Email Address</p>
                        <input className="w-4/5 border-2"></input>
                    </div>

                    <div className="flex flex-col gap-1 ml-20">
                        <p>Password</p>
                        <input className="w-4/5 border-2"></input>
                    </div>

                    <div style={{textAlign:"center", marginTop:10}}>
                        <p>Forget your password?</p>
                    </div>

                    <div style={{marginTop:20, marginBottom:30}} className="ml-20">
                        <button type="submit" style={{backgroundColor:"#416DA9", borderRadius:8}} className="w-4/5 p-1" onClick={navigateHome}>
                            <p className="font-bold text-white">Log in</p>
                        </button>
                    </div>                    
                </div>
            </form>
        </div>
</div>
    )
}

export default LoginTabPro;

