import React, { useState } from "react";
import "./ratingbar.scss"

const RatingBar = () => {
  const [value, setValue] = useState(0);

  const handleClick = (newValue) => {
    setValue(newValue);
  };

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const getBackgroundColor = (num) => {

    if (num > value) {
      return 'white';
    } else {
      var p = value/5;
     return rgbToHex(255 - (255*p), 255*p,0);
    }

  }

  return (
    <div className="no-borderRadiusImportant border-radiusImportant">
      {[1, 2, 3, 4, 5].map((rating) => (
        <div
          key={rating}
          style={{
            backgroundColor: [getBackgroundColor(rating)],
            display: "inline-block",
            padding: 15,
            color: "black",
            cursor: "pointer",
            border: "1px solid black"
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
