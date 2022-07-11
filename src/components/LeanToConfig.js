import React, { useContext, useState, useEffect } from "react";
import TarpContext from "../TarpContext";
import AllTarpSizes from "../AllTarpSizes";
import LeanTo from "./sub-components/LeanTo";

export let subset = [];
function LeanToConfig() {
  const state = useContext(TarpContext);
  // const state = useContext(SleepWidthContext);

  // if a specific tarp size is selected I can skip this for loop and just calculate sleepClr - retrun if < 4 (or not)
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
  // console.log("subset: ", subset);
  // console.log("Why does subset log to the console twice from LeanToConfig.js?");

  return (
    <div className="container">
      <p className="my-4">From LeanToConfig.js</p>
      {/* How do I do a forEach to output each finalObj object properties?*/}
      {/* try outputObj.map(item => )*/}
      <p>Height = {state.height}</p>
      {/* <p>Body Width = {bodyWidth}</p>
      <p>chair Height = {chairHeight}</p>
      <p>chair Depth = {chairDepth}</p> */}
      <LeanTo />
    </div>
  );
}

export default LeanToConfig;
