import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';  
import {useGlobalStore} from "../store/globalStore"
import fetchData  from"../fetchData"

export default function ResultsPage() {
    const [obj, setObj] = useState(fetchData(null));

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
        <h1>Your Paradise is</h1>
        <h2>{obj.statename ? obj.statename.trim() + " " + [<div className="score">obj.paradisescore</div>] : "loading.."}</h2>
        <hr>
        </hr>
        <p>description here </p>
    </>
    );
}