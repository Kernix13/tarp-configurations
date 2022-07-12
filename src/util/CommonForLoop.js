import { useContext } from "react";
import TarpContext from "../TarpContext";
import AllTarpSizes from "../data/AllTarpSizes";

export let subset = [];

function CommonForLoop() {
  const state = useContext(TarpContext);

  let sleepClr = 0;

  for (let i = 0; i < AllTarpSizes.length; i++) {
    for (let j = 0; j < AllTarpSizes[i].tarpSizes.length; j++) {
      let len = AllTarpSizes[i]["tarpSizes"][j][0];
      sleepClr = len * 12 - state.height;

      if (sleepClr > 4) {
        let tarpType = AllTarpSizes[i]["tarpCategory"] + " " + AllTarpSizes[i]["tarpRatio"];
        subset.push([AllTarpSizes[i]["tarpSizes"][j], tarpType]);
      }
    }
  }

  return subset;
}

export default CommonForLoop;
