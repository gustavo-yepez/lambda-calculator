import React, {useState} from "react";
import NumberButton from "./NumberButton";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
import { numbers, operators } from '../../../data'


const Numbers = () => {
  const [buttonNumbers, setButtonNumbers] = useState(numbers);
  // STEP 2 - add the imported data to state
  console.log(buttonNumbers);
  return (
    <div>
      {
        buttonNumbers.map(number => (
          <NumberButton number={number}/>
        )) 
      }
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Numbers;