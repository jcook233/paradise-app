import React from "react";
import { Link } from 'react-router-dom';  
import Category from "../components/Category/Category";


export default function CategoryPage() {
return (
  <>
   <h1>Which of these categories are important to you?</h1>
    <p>This is your awesome subtitle</p>

    <Category categoryName="Health"/>
    <Category categoryName="Education"/>
    <Category categoryName="Safety"/>
    <Category categoryName="Environment"/>

    <Link className="btn2" to="/start" >  Next  </Link> 

  </>
);
}