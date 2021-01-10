import React, { useState } from "react";
import {DatePicker} from "shards-react";

import "react-datepicker/dist/react-datepicker.css";



const DateComponent = () => {  

  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker 
    selected={startDate} 
    onChange={date => setStartDate(date)} 
    showTimeSelect
    />
  );
};

export default DateComponent;
