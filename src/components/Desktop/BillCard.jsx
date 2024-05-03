import React from "react";
import Ellipse from "../../assets/Ellipse.png"
import Home from "../../assets/Home.png"

const BillCard=()=>{
    return(
        <div style={{backgroundColor:"#BBCDE5", width:"20vw", height:"50vh", borderRadius:20, display:"flex", flexDirection:"column", alignItems:"center", position:"relative"}}>
            <div style={{marginTop:20, marginBottom:20}}>
                <h2 className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Your Bill</h2>
            </div>
            <div>
                <img src={Ellipse} width={200}/>
            </div>
            <div style={{position:"absolute", top:"35%"}}>
                <img src={Home} width={100}/>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",marginTop:5}}>
                <p className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Amount due</p>
                <p className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>RM110</p>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:10, gap:40}}>
                <p className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Due in</p>
                <p className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>24 days</p>
            </div>
        </div>
    )
}

export default BillCard;