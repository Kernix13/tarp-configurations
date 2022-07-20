import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function ConfigLT() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;

  let outputObj = [];
  let finalObj = [];
  // Why do I need this? Because of if statement?
  let cover = 0;

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_LT {
    constructor(configName, len, width, mult1, mult2) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.mult1 = mult1;
      this.mult2 = mult2;
    }

    alpha = 30;
    beta = 50;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const tarpSize = [this.len, this.width];
      const sleepClear = l - state.height;

      for (let i = this.beta; i >= this.alpha; i--) {
        const ridgeHt = Math.round(Math.sin(i * deg2Rad) * (w * this.mult1) + w * this.mult2);

        const ridgeHeight = Math.min(ridgeHt, state.height);

        if (ridgeHeight === state.height) {
          cover = Math.round(Math.sqrt(Math.pow(w * this.mult1, 2) - Math.pow(ridgeHeight - w * this.mult2, 2)));
        } else {
          cover = Math.round(Math.cos(i * deg2Rad) * w * this.mult1);
        }

        const sleepDiagClr = Math.floor(Math.sqrt(Math.pow(l, 2) + Math.pow(cover, 2))) - state.height;
        const sitCover = Math.round(cover - (sitDepth + 3));
        const chairCover = Math.max(Math.round(cover - (state.chairDepth + 3)), 0);

        const sitTarpHt = Math.round(Math.tan(i * deg2Rad) * sitCover);
        const chairTarpHt = Math.round(Math.tan(i * deg2Rad) * chairCover);

        const coverClear = Math.round(cover - state.bodyWidth);
        const sitTarpHtClear = sitTarpHt - sitHeight;
        const chairTarpHtClear = chairTarpHt - state.chairHeight;

        outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i, configName: this.configName, ridgeHt, sleepDiagClr });

        if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
          break;
        }
      }
      finalObj.push(outputObj);
    }
  }

  const Lean_To = new Config_LT("Lean-To", userTarp[0], userTarp[1], 1, 0);
  Lean_To.calcs();

  const BWLT_25 = new Config_LT("Back-Wall LT 25", userTarp[0], userTarp[1], 0.75, 0.25);
  BWLT_25.calcs();

  const BWLT_33 = new Config_LT("Back-Wall LT 33", userTarp[0], userTarp[1], 0.667, 0.333);
  BWLT_33.calcs();

  // console.log(finalObj);

  // Old jsx at bottom of NOTES.md but this is good
  return (
    <div>
      {finalObj[0][2].sleepDiagClr <= 0 ? <p className="mb-3">Your tarp is too small for these configurations.</p> : null}
      {finalObj.map((type, index) =>
        type[2].sleepClear <= 0 && type[2].sleepDiagClr < 6 ? null : (
          <div key={index}>
            <h3 className="font-bold">{type[2].configName}</h3>
            <p className="mb-3 text-base">
              Set your <span className="font-bold">ridgeline height </span>
              to {type[2].ridgeHeight} inches which results in a <span className="italic">lean angle</span> of {type[2].angle}-degrees. {type[2].sitTarpHtClear > 0 ? " You can sit under the tarp on the ground" : "Ridgeline too low to sit in this design (consider using guylines to raise the ridgeline)"}
              {type[2].chairTarpHtClear > 0 ? " and in your chair." : "."}
              <br />{" "}
              {type[2].sleepClear <= 0 ? (
                <p className="mb-3">
                  <span className="font-semibold">Note</span>: You have to sleep along the diagonal of the tarp shadow because the length is too small.
                </p>
              ) : null}
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default ConfigLT;
