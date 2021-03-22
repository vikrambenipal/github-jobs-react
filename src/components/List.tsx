import React, { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {

    let GetData = async (): Promise<void> => {
        const data = await axios.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=0&location=sf&full_time=on");
        console.log(data);
    }

    // Get Job Info from API
    useEffect(() => {
        GetData();
    }, []);
      

    return (
        <div>
            <h1>List of Jobs</h1>
        </div>
    )
}

export default List;