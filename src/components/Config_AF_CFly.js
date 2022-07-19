import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function Config_AF_CFly() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_AF_CFly {
    constructor(configName, len, width, mult1) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.mult1 = mult1;
    }

    alpha = 75;
    beta = 30;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const tarpSize = [this.len, this.width];
      const sleepClear = l - state.height;

      const ridgeHt = Math.round(Math.sin(this.alpha * deg2Rad) * (w * this.mult1));

      const ridgeHeight = Math.min(ridgeHt, state.height);

      if (ridgeHeight === state.height) {
        cover = Math.round(Math.sqrt(Math.pow(w * this.mult1 + Math.cos(this.beta * deg2Rad) * w * this.mult1, 2) - Math.pow(ridgeHeight, 2)));
      } else {
        cover = Math.round(Math.cos(this.alpha * deg2Rad) * w * this.mult1 + Math.cos(this.beta * deg2Rad) * w * this.mult1);
      }

      const coverClear = Math.round(cover - state.bodyWidth);
      const sitTarpHtClear = ridgeHeight - sitHeight;
      const chairTarpHtClear = ridgeHeight - state.chairHeight;

      outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: this.alpha, configName: this.configName, ridgeHt });

      finalObj.push(outputObj);
    }
  }

  const AFrame_CFly = new Config_AF_CFly("A-Frame C-Fly", userTarp[0], userTarp[1], 0.333);
  AFrame_CFly.calcs();

  // console.log(finalObj);

  return (
    <div>
      {finalObj.map((type, index) => (
        <div key={index}>
          <h3 className="font-bold">{type[2].configName}</h3>
          {type[2].sleepDiagClr <= 0 && type[2].sleepClear <= 0 ? (
            "Tarp length too small for sleeping based on your height."
          ) : (
            <p className="mb-3 text-base">
              Set your <span className="font-bold">ridgeline height </span>
              to {type[2].ridgeHeight} inches which results in a <span className="italic">lean angle</span> of {type[2].angle}-degrees. {type[2].sitTarpHtClear > 0 ? " You can sit under the tarp on the ground" : "There is not enough height to sit in this design"}
              {type[2].chairTarpHtClear > 0 ? " and in your chair." : "."}
              <br /> {type[2].sleepClear <= 0 ? "Note: you have to sleep along the tarp diagonal because the length is too small." : null}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Config_AF_CFly;
