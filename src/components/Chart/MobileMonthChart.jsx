import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MobileMonthChart = ({monthData}) => {
    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    
    // Check if data is defined before mapping
    const transformedData = monthData ? monthData.map(item => {
        const monthName = months[item.month - 1]; // Months array is zero-based
        return {
            ...item,
            month: monthName
        };
    }) : [];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={transformedData} 
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="meter_difference" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default MobileMonthChart;
