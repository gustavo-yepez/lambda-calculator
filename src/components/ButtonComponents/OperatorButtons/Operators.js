import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

export default function Operators() {
  // STEP 2 - add the imported data to state
  const [OpsButton, setOpsButton] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       <p>
        <span className ="operator_button"> {}</span>
      </p>
      <div className="button_container">
        {OperatorButton.map((button,index)=>
        <OperatorButton key={index} button={button}/>)}
    </div>
    </div>
  );
};
