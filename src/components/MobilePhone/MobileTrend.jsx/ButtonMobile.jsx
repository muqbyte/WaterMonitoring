import React from "react";
import { CiReceipt } from "react-icons/ci";

const ButtonMobile=()=>{
    return(
        <div className="relative flex flex-col items-center justify-center mt-4 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
            <div className="flex flex-col items-center justify-center p-4">
            <div className="flex flex-row items-center justify-center">
                <CiReceipt size={35}/>
                <p className="block mb-2 font-sans text-xs antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Billing History and Payment
                </p>
            </div>
            </div>
        </div>
    )
}

export default ButtonMobile;