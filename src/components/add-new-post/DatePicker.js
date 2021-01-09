import React, { useState } from "react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";



const DatePicker = ({}) => {  

  const [date, setDate] = useState();

  const handleOnChoose = (date) => {
    setDate(date)
  }

  return(
    <div>
         <DatePicker
          size="sm"
          selected={(date) => handleOnChoose(date)}
          onChange={(date) => handleOnChoose(date)}
          placeholderText="Start Date"
          dropdownMode="select"
          className="text-center"
        />
    </div>
  )
};

export default DatePicker;
