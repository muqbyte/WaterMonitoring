import React from "react";

const PaymentPages=()=>{
    return(
        <div className="flex flex-col w-screen border-2 justify-center items-center h-screen">
            <div className="flex flex-row gap-4">
                <p>Current due</p>
                <p>RM110.00</p>
            </div>
            <div>
                <p>Input Payment Amount</p>
                <div className="border-2 flex flex-row h-8 gap-2">
                    <p className="text-sm">RM</p>
                    <input placeholder="0"></input>
                </div>
            </div>
        </div>
    )
}

export default PaymentPages;