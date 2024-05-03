import React from 'react';

const WeeklyCardMobile = (props) => {
    const {highestUsage, highestDay} = props;
    return (
        <div className="relative flex flex-col mt-2 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80"> {/* Adjusted width */}
            <div className="p-4"> {/* Adjusted padding */}
                <h5 className="block mb-2 font-sans text-base antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"> {/* Adjusted font size */}
                    {highestUsage} Liter
                </h5>
                <p className="block font-sans text-sm antialiased font-light leading-relaxed text-inherit"> {/* Adjusted font size */}
                    {highestDay}
                </p>
                <p className="block font-sans text-sm antialiased font-light leading-relaxed text-inherit"> {/* Adjusted font size */}
                    The highest usage in the past 7 days
                </p>
            </div>
        </div>
    );
}

export default WeeklyCardMobile;
