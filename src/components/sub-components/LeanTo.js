import React, { useContext } from "react";
import TarpContext from "../../TarpContext";
import { subset } from "../LeanToConfig";

function LeanTo() {
  const state = useContext(TarpContext);

  // Calculated values from state.height & angle related constants
  const sitHeight = state.height / 2;
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
      ridgeHt = Math.round(Math.sin(i * deg2Rad) * wid);

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
      sitTarpHtClear = sitTarpHt - sitHeight;
      chairTarpHtClear = chairTarpHt - state.chairHeight;

      outputObj = item.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i });

      if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
        break;
      }
    }
    finalObj.push(outputObj);
  });
  console.log(finalObj);

  return (
    <div>
      <h2 className="text-4xl">Lean-to</h2>
      <div className="flex flex-wrap">
        {finalObj.map((tarp, i) => (
          <div key={i} className="p-3 m-2 bg-purple-50">
            <div>
              <p className="mb-3">
                Tarp size: {tarp[0][0]} x {tarp[0][1]}
              </p>
              <p className="mb-3">Ridgeline height: {tarp[2]["ridgeHeight"]}</p>
              <p className="mb-3">Sit clearance: {tarp[2]["sitTarpHtClear"]}</p>
              <p className="mb-3">Chair Sit clearance: {tarp[2]["chairTarpHtClear"]}</p>
              <p className="mb-3">Lean angle: {tarp[2]["angle"]}-degrees</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeanTo;
// export default React.memo(LeanTo);
