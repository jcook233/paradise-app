import React, { useState } from "react";
import "./category.scss"

import RatingBar from '../RatingBar/RatingBar'

const Category = ({categoryName}) => {

    return (<>
        <div className="category-wrapper">
        <div className="category">
            <b>{categoryName}</b>
            <RatingBar/>
        </div>
        </div>
    </>);
}

export default Category;