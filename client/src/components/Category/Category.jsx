import React, { useState } from "react";
import "./category.scss"

import RatingBar from '../RatingBar/RatingBar'

const Category = ({categoryName, barKey, startingValue}) => {

    return (<>
        <div className="category-wrapper">
        <div className="category">
            <b className="cat-name">{categoryName}</b>
            <RatingBar barKey={barKey} startingValue={startingValue} categoryName={categoryName.toLowerCase()}/>
        </div>
        </div>
    </>);
}

export default Category;