import React, { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {

    // Get Job Info from API
    useEffect(() => {
        axios.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=0&location=sf&full_time=on")
        .then(res => {
            console.log(res);
        })
    }, []);

    return (
        <div>
            <h1>List of Jobs</h1>
        </div>
    )
}

export default List;