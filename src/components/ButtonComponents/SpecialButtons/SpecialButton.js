import React from "react";

const SpecialButton = (props) => {
  return (
    <>
    <button onClick={() => props.setDisplayValue(props.special)}>    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
export default SpecialButton;