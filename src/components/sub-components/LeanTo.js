import React, { useContext, useState } from "react";
import TarpContext from "../../TarpContext";
import { subset } from "../LeanToConfig";
// import SleepWidthContext from "../../SleepWidthContext";

function LeanTo() {
  const state = useContext(TarpContext);
  // const height = state.height;
  // const bodyWidth = state.bodyWidth;
  // const chairHeight = state.chairHeight;
  // const chairDepth = state.chairDepth;

  // Calculated values from state.height & other constants
  const sitHeight = state.height / 2;
  console.log("Sitting Height: " + sitHeight);
  const sitDepth = (state.height * 7) / 32;
  const deg2Rad = Math.PI / 180;
  const configAngles = [30, 50];

  let outputObj = [];
  let finalObj = [];

  let cover,
    coverClear,
    ridgeHt,
    ridgeHeight,
    sitTarpHtClear,
    chairTarpHtClear = 0;

  // if a tarp size is selected, lose the forEach
  subset.forEach(item => {
    let len = item[0][0] * 12;
    let wid = item[0][1] * 12;
    let sleepClear = len - state.height;

    for (let i = configAngles[1]; i >= configAngles[0]; i--) {
      ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * wid));

      // Reduce the ridgeHeight to (height + 6) for really big tarps
      ridgeHeight = Math.min(ridgeHt, state.height + 6);

      // Calculate different "cover" values based on the 2 ridgeHeight calcs
      if (ridgeHeight === state.height + 6) {
        cover = Math.round(Math.sqrt(Math.pow(wid, 2) - Math.pow(ridgeHeight, 2)));
      } else {
        cover = Math.round(Math.cos(i * deg2Rad) * wid);
      }

      let sitCover = Math.round(cover - (sitDepth + 3));
      let chairCover = Math.max(Math.round(cover - (state.chairDepth + 3)), 0);

      let sitTarpHt = Math.round(Math.tan(i * deg2Rad) * sitCover);
      let chairTarpHt = Math.round(Math.tan(i * deg2Rad) * chairCover);

      coverClear = cover - state.bodyWidth;
      sitTarpHtClear = sitTarpHt - state.sitHeight;
      chairTarpHtClear = chairTarpHt - state.chairHeight;

      outputObj = item.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i, sitHeight });

      if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
        break;
      }
    }
    finalObj.push(outputObj);
  });
  // This logs for every onChange so rerenders? this is logging even more now that it is in LeanTo.js which is imported into LeanToConfig.js !!!!!
  console.log(finalObj);
  //
  return (
    <div>
      Lean-to
      <p>Ridgeline height: {finalObj[16][2]["ridgeHeight"]}</p>
    </div>
  );
}

export default LeanTo;
