import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';  
import {useGlobalStore} from "../store/globalStore"
import fetchData  from"../fetchData"



export default function ResultsPage() {
    const getStateObject = useGlobalStore((state) => state)


    /*

    const getImageByLocation = async (location) => {
        // Call a third-party API that provides image URLs for a given location
        const response = await fetch(`https://api.example.com/images?location=${location}`);
        const data = await response.json();
  
        // Return the URL of the image
        return data.imageUrl;
    }



    */


    return (
    <>
        <h1>Your Paradise is..</h1>
        <h2>{fetchData(getStateObject).statename}</h2>
        <p className="score">{fetchData(getStateObject).paradisescore}</p>
        <hr>
        </hr>
        <p>description here</p>
        <a href={fetchData(getStateObject).city!==undefined ? 
            fetchData(getStateObject).vrlink : "https://hubs.mozilla.com/LegVjmz/smart-scientific-dominion"
        }>View in VR</a><br></br><br></br>

        <Link className="btn1" to="/" >Try Again</Link> 
    </>
    );
}