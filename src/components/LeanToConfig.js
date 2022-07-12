import React, { useContext } from "react";
import TarpContext from "../TarpContext";
import AllTarpSizes from "../data/AllTarpSizes";
import LeanTo from "./sub-components/LeanTo";

export let subset = [];

function LeanToConfig() {
  const state = useContext(TarpContext);

  // if a specific tarp size is selected I can skip this for loop and just calculate sleepClr - return if < 4 (or not)
  let sleepClr = 0;

  for (let i = 0; i < AllTarpSizes.length; i++) {
    for (let j = 0; j < AllTarpSizes[i].tarpSizes.length; j++) {
      let len = AllTarpSizes[i]["tarpSizes"][j][0];
      // sleepClr = len * 12 - height;
      sleepClr = len * 12 - state.height;

      if (sleepClr > 4) {
        let tarpType = AllTarpSizes[i]["tarpCategory"] + " " + AllTarpSizes[i]["tarpRatio"];
        subset.push([AllTarpSizes[i]["tarpSizes"][j], tarpType]);
      }
    }
  }
  // console.log("subset: ", subset);

  return (
    <div className="mt-4">
      <p className="mb-3">Below here is LeanTo component:</p>
      <LeanTo />
    </div>
  );
}

export default LeanToConfig;
// export default React.memo(LeanToConfig);
