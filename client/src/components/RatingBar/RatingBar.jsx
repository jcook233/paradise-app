import React, { useState, useEffect } from "react";
import "./ratingbar.scss"
import {useGlobalStore} from "../../store/globalStore"

const RatingBar = ({categoryName, barKey, startingValue}) => {
  const [value, setValue] = useState(startingValue);

  const setSafety = useGlobalStore((state) => state.setSafety);
  const setEducation = useGlobalStore((state) => state.setEducation);
  const setEnvironment = useGlobalStore((state) => state.setEnvironment);
  const setHealth = useGlobalStore((state) => state.setHealth);


  const handleClick = (rating) => {
    setValue(rating);

    switch(categoryName) {
      case "health":
        setHealth(rating)
        break;
      case "environment":
        setEnvironment(rating)
        break;
      case "education":
        setEducation(rating)
        break;
      case "safety":
        setSafety(rating)
        break;
    }

  };

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const getBackgroundColor = (rating) => {
    if (rating > value) {
      return 'white';
    } else {
      var p = value/5;
      return rgbToHex(255 - (255*p), 255*p,0);
    }
  }

  const getFontWeight = (rating) => {
    if (rating === value) {
      return "bolder";
    } else {
      return "inherit";
    }
  }

  return (
    <div order={barKey} className="no-borderRadiusImportant border-radiusImportant">
      {[1, 2, 3, 4, 5].map((rating) => (
        <div

          key={rating}
          style={{
            backgroundColor: [getBackgroundColor(rating)],
            display: "inline-block",
            padding: 15,
            color: "black",
            cursor: "pointer",
            border: "1px solid black",
            fontWeight: [getFontWeight(rating)]
          }}
          onClick={() => handleClick(rating)}
        >
          {rating}
        </div>
      ))}
    </div>
  );
};

export default RatingBar;
