import React, { useEffect, useState } from "react";


import Logo from "../../assets/Logo.png"
import Eagle from "../../assets/EAGLE.png"
import NavigationMobile from "../Navigation/NavigationMobile";
import CardMobile from "../MobilePhone/CardMobile";
import DetailsCard from "../MobilePhone/DetailsCard";
import NewsCard from "../MobilePhone/NewsCard";
import TabCard from "./TabCard";
import NavigationBar from "../Navigation/NavigationBar";
import TabNews from "./TabNews";
import { useNavigate } from "react-router-dom";


const HomeTab=()=>{
    const [weeklyDay,setWeeklyDay]=useState("Empty")
    const [monthlyDay, setMonthlyDay] = useState("Empty")
    const [month, setMonth]=useState("Empty")
    const navigate = useNavigate();
    const navigatetrend = ()=>{
        navigate("/trend")
    }

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
            <div style={{display:"flex", flexDirection:"column", margin:"10px 20px"}}>
                <div style={{display:"flex", flexDirection:"column", gap:10, marginTop:40}}>
                        <div>
                            <h2 className="text-xl font-bold " style={{fontFamily: 'Goldman'}}>YOUR BILL</h2>
                        </div>

                        <TabCard valueNumber="110.00" usage="RM" header="Muqtadir" caption="No 31, Jalan Hang Tuah, Kampung Tersusun Mukah,996400 Mukah, Serawak"/>

                        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center",gap:30, marginTop:20}}>
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
                <div style={{display:"flex", flexDirection:"column", gap:10, marginTop:20}}>
                        <div>
                            <h2 className="text-xl font-bold " style={{fontFamily: 'Goldman'}}>Total Usage</h2>
                        </div>
                        <TabCard valueNumber="Litre"  usage={monthlyDay.METER} caption="Total usage litre"/>
                </div>
                <div style={{display:"flex", flexDirection:"column", gap:10, marginTop:20}}>
                        <div>
                            <h2 className="text-xl font-bold " style={{fontFamily: 'Goldman'}}>Weekly Usage</h2>
                        </div>
                        <TabCard valueNumber="Litre" header={weeklyDay.ts} usage={weeklyDay.usage_liter}/>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:30}}>
                                <button style={{ backgroundColor: "#BBCDE5", padding: "10px 20px", border: "none", borderRadius: 5 }} onClick={navigatetrend}>
                                    <p className="text-xl font-bold" style={{fontFamily: 'Goldman'}}>Usage and Trend</p>
                                </button>
                        </div>
                </div>
                <div style={{marginTop:30,backgroundColor:"#D9D9D9", borderRadius:10}}>
                    <TabNews/>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:40}}>
                        <div>
                            <h2 className="text-2xl font-bold" style={{fontFamily: 'Goldman'}}>Developed By</h2>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", alignItems:"center", gap:30, marginTop:10, width:"100%"}}>
                            <div style={{flex:1, display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
                                <img src={Eagle} width={200}/>
                            </div>
                            <div style={{flex:1, display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
                                <img src={Logo} width={105}/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTab;