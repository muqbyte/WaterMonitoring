import React from "react";
import { FaNewspaper } from "react-icons/fa6";


const TabNews=()=>{
    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <div style={{display:"flex", flexDirection:"column", gap:10, padding:"20px 30px", borderRadius:10, backgroundColor:"#D9D9D9"}}>
            <div style={{display:"flex", flexDirection:"row", gap:10}}>
                    <FaNewspaper size={40}/>
                    <p className="text-2xl font-bold" style={{fontFamily: 'Goldman'}}>News</p>
            </div>
            <div style={{display:"flex", flexDirection:"row", gap:10}}>
            <p className="text-xl font-bold">Water Disrupt on 5/5/2024</p>
            </div>
            </div>
        </div>
    )
}

export default TabNews;