import React, { useEffect, useState } from "react";
import NavigationBar from "../Navigation/NavigationBar";
import BillCard from "./BillCard";
import Payment from "../../assets/Payment.png"
import HandWater from "../../assets/HandWater.png"
import Help from "../../assets/Help.png"
import Logo from "../../assets/Logo.png"
import Eagle from "../../assets/EAGLE.png"
import CardDetails from "./CardDetails";
import { FaNewspaper } from "react-icons/fa6";
// import useFetch from "../useFetch/useFetch";

import { useNavigate } from "react-router-dom";


const HomeView=()=>{
    const navigate = useNavigate();
    const navigatetrend = ()=>{
        navigate("/trend")
    }

    // const {getData,response}=useFetch();
    const [weeklyDay,setWeeklyDay]=useState("Empty")
    const [monthlyDay, setMonthlyDay] = useState("Empty")
    const [month, setMonth]=useState("Empty")

    const getData = async () => {
        try {
            const classCourseQuery = await fetch("https://data.iozr.xyz/api/meter/analytics/weekly?id=FM-01");
            const monthlyQuery = await fetch("https://data.iozr.xyz/api/meter/now?id=FM-01");
            const data = await classCourseQuery.json();
            const monthlyData=await monthlyQuery.json();

            if(data.length>0 && monthlyData.length>0){

                const lastDataEntry = data[data.length - 1];
                console.log("data",data)
                console.log("last",lastDataEntry)

                // const weeklyUsage=data[4]
                setWeeklyDay(lastDataEntry);
                console.log(weeklyDay)
    
                const monthlyUsage=monthlyData[0]
                setMonthlyDay(monthlyUsage)
            }

            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Call getData function
    useEffect(() => {
        getData();
    }, [weeklyDay]); // Empty dependency array ensures this effect runs only once after the initial render

    return(
        <div>
            <NavigationBar/>
            <div style={{display:"flex", flexDirection:"row", gap:20, marginLeft:50, marginTop:20}}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div style={{display:"flex", flexDirection:"column", gap:10}}>
                        <div>
                            <h2 className="text-2xl font-bold " style={{fontFamily: 'Goldman'}}>YOUR BILL</h2>
                        </div>
                        <CardDetails valueNumber="110.00" usage="RM" header="Muqtadir" caption="No 31, Jalan Hang Tuah, Kampung Tersusun Mukah,996400 Mukah, Serawak"/>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center",gap:40}}>
                            <div>
                                <p className="text-xl font-bold text-neutral-700" style={{fontFamily: 'Goldman'}}>Payment due in 24 days</p>
                            </div>
                            <div>
                                <button style={{ backgroundColor: "#BBCDE5", padding: "10px 20px", border: "none", borderRadius: 5 }}>
                                    <p className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Pay Bill</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"column", gap:10}}>
                        <div>
                            <h2 className="text-2xl font-bold " style={{fontFamily: 'Goldman'}}>Total Usage</h2>
                        </div>
                        <CardDetails valueNumber="Litre"  usage={monthlyDay.METER} caption="Total usage litre"/>
                    </div> 
                    <div style={{display:"flex", flexDirection:"column", gap:10, marginTop:20}}>
                        <div>
                            <h2 className="text-2xl font-bold " style={{fontFamily: 'Goldman'}}>Weekly Usage</h2>
                        </div>
                        <CardDetails valueNumber="Litre" header={weeklyDay.ts} usage={weeklyDay.usage_liter}/>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                                <button style={{ backgroundColor: "#BBCDE5", padding: "10px 20px", border: "none", borderRadius: 5 }} onClick={navigatetrend}>
                                    <p className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Usage and Trend</p>
                                </button>
                        </div>
                    </div>
                </div>
                <div style={{ flex:1,marginLeft:20, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", borderLeftWidth:2}}>
                    <div style={{display:"flex", gap:20, marginBottom:30}}>
                        <FaNewspaper size={30}/>
                        <p className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>News</p>
                    </div>
                    <div style={{backgroundColor:"#D9D9D9",  display:"flex", flexDirection:"column", padding:20, borderRadius:10}}>
                            <p className="text-sm font-bold">Water Disrupt on 5/5/2024</p>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:70}}>
                        <div>
                            <h2 className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Developed By</h2>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <img src={Eagle} width={200}/>
                            <img src={Logo} width={100}/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HomeView;