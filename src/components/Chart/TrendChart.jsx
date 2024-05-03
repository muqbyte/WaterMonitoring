import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TrendChart = ({weekData}) => {
    
    // console.log("data",data)
    // const data = [
    //     { name: 'Page A', uv: 4000, amt: 2400 },
    //     { name: 'Page B', uv: 3000, amt: 2210 },
    //     { name: 'Page C', uv: 2000, amt: 2290 },
    //     { name: 'Page D', uv: 2780, amt: 2000 },
    //     { name: 'Page E', uv: 1890, amt: 2181 },
    //     { name: 'Page F', uv: 2390, amt: 2500 },
    //     { name: 'Page G', uv: 3490, amt: 2100 },
    // ];

    return (
        <ResponsiveContainer width="100%" height={300}>
        <BarChart
            data={weekData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="ts" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="usage_liter" fill="#82ca9d" />
            {/* Title */}
            
        </BarChart>
    </ResponsiveContainer>
    );
}

export default TrendChart;
