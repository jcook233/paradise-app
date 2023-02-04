import React from "react";
import { Link } from 'react-router-dom';  

export default function HomePage() {
    return (
    <>
        <h1>Paradise Finder</h1>
        <p>Find your ideal paradise.</p>
        <Link className="btn1" to="/start" >  Start  </Link> 

    </>
    );
}