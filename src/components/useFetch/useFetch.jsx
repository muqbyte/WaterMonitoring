import { useState } from "react";

const useFetch = () => {
    const [response, setResponse] = useState(null);

    const getData = async (url) => {
        try {
            const classCourseQuery = await fetch(url);
            const data = await classCourseQuery.json();
            const newData = data[6];
            setResponse(newData);
            return newData; // Return the fetched data
        } catch (error) {
            console.log(error);
            throw error; // Rethrow the error
        }
    };

    return { getData, response };
};

export default useFetch;
