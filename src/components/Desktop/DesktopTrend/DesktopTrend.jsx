import React, { useEffect, useState } from "react";
import NavigationBar from "../../Navigation/NavigationBar";
import TrendChart from "../../Chart/TrendChart";
import TrendMonthChart from "../../Chart/TrendMonthChart";
import CardDetails from "../CardDetails";
import WeeklyCard from "./WeeklyCard";
import ButtonCard from "./ButtonCard";
import { BiSolidRectangle } from "react-icons/bi";

const DesktopTrend = () => {
    const [weeklyChart, setWeeklyChart] = useState([]);
    const [monthlyChart, setMonthlyChart] = useState([]);
    const [chartState, setChartState] = useState(true);
    const [highestUsageDay, setHighestUsageDay] = useState('');
    const [highestUsageLiter, setHighestUsageLiter] = useState(0);

    const getMonthData = async () => {
        setChartState(false);
        try {
            const monthlyQuery = await fetch("https://data.iozr.xyz/api/meter/analytics/month?id=FM-01");
            const dataMonth = await monthlyQuery.json();
            if (dataMonth.length > 0) {
                setMonthlyChart(dataMonth);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const getData = async () => {
        setChartState(true);
        let maxUsage = 0;
        let dayWithMaxUsage = '';
        try {
            const weeklyQuery = await fetch("https://data.iozr.xyz/api/meter/analytics/weekly?id=FM-01");
            const data = await weeklyQuery.json();
            if (data.length > 0) {
                setWeeklyChart(data);
             
        
                data.forEach(day => {
                    if (day.usage_liter > maxUsage) {
                        maxUsage = day.usage_liter;
                        dayWithMaxUsage = day.ts;
                    }
                });
        
                setHighestUsageDay(dayWithMaxUsage);
                setHighestUsageLiter(maxUsage);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <NavigationBar />
            <div style={{ marginTop: 30, display: "flex", flexDirection: "column", margin: "0px 50px" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 20 }}>
                    <WeeklyCard highestUsage={highestUsageLiter} highestDay={highestUsageDay}/>
                    
                    <ButtonCard />
                </div>

                <div style={{ margin: "0px 40px", marginTop: 20, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div>
                        {chartState ? (
                            <>
                                <p className="font-sans text-2xl font-semibold">Weekly Data Report</p>
                                <div className="flex flex-row items-center justify-center gap-3 font-semibold">
                                    <BiSolidRectangle color="#82ca9d" />
                                    <p>Usage (Liter)</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="font-sans text-2xl font-semibold">Monthly Data Report</p>
                                <div className="flex flex-row items-center justify-center gap-3 font-semibold">
                                    <BiSolidRectangle color="#82ca9d" />
                                    <p>Usage (Liter)</p>
                                </div>
                            </>
                        )}
                    </div>
                    {chartState ? <TrendChart weekData={weeklyChart} /> : <TrendMonthChart monthData={monthlyChart} />}
                </div>

                <div className="flex flex-row items-center justify-center gap-10">
                    <button className="px-4 py-2 font-bold text-white rounded hover:bg-blue-700" style={{ backgroundColor: "#142751" }} onClick={getData}>
                        Weekly Trend
                    </button>

                    <button className="px-4 py-2 font-bold text-white rounded hover:bg-blue-700" style={{ backgroundColor: "#142751" }} onClick={getMonthData}>
                        Monthly Trend
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DesktopTrend;
