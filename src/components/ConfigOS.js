import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function Config_OS() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  // const userTarp = [8, 10];
  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_OS {
    constructor(configName, len, width, mult1, mult2) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.mult1 = mult1;
      this.mult2 = mult2;
    }

    // Change to 37, 75?
    alpha = 30;
    beta = 50;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const tarpSize = [this.len, this.width];
      const sleepClear = l - state.height;

      for (let i = this.beta; i >= this.alpha; i--) {
        const ridgeHt = Math.round(Math.sin(i * deg2Rad) * (w * this.mult1) + w * this.mult1);

        const ridgeHeight = Math.min(ridgeHt, state.height);

        if (ridgeHeight === state.height) {
          cover = Math.round(Math.sqrt(Math.pow(w * this.mult2, 2) - Math.pow(ridgeHeight - w * this.mult1, 2)));
        } else {
          cover = Math.round(Math.cos(i * deg2Rad) * w * this.mult2);
        }

        const sleepDiagClr = Math.floor(Math.sqrt(Math.pow(l, 2) + Math.pow(cover, 2))) - state.height;

        const coverClear = Math.round(cover - state.bodyWidth);
        const sitTarpHtClear = ridgeHeight - sitHeight;
        const chairTarpHtClear = ridgeHeight - state.chairHeight;

        outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i, configName: this.configName, ridgeHt, sleepDiagClr });

        if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
          break;
        }
      }
      finalObj.push(outputObj);
    }
  }

  const Open_Stall = new Config_OS("Open Stall (Back-Wall A-Frame LT 33)", userTarp[0], userTarp[1], 0.333, 0.667);
  Open_Stall.calcs();

  // console.log(finalObj);

  return (
    <div>
      {finalObj.map((type, index) =>
        type[2].sleepClear <= 0 && type[2].sleepDiagClr < 6 ? null : (
          <div key={index}>
            <h3 className="font-bold">{type[2].configName}</h3>
            {type[2].sleepDiagClr <= 0 && type[2].sleepClear <= 0 ? (
              <p className="mb-3">Tarp length is too small for sleeping based on your height.</p>
            ) : (
              <p className="mb-3 text-base">
                Set your <span className="font-bold">ridgeline height </span>
                to {type[2].ridgeHeight} inches which results in a <span className="italic">lean angle</span> of {type[2].angle}-degrees. {type[2].sitTarpHtClear > 0 ? " You can sit under the tarp on the ground" : "There is not room to sit in this design (consider using guylines to stake to the ground)"}
                {type[2].chairTarpHtClear > 0 ? " and in your chair." : "."}
                <br />{" "}
                {type[2].sleepClear <= 0 ? (
                  <p className="mb-3">
                    <span className="font-semibold">Note</span>: You have to sleep along the diagonal of the tarp shadow because the length is too small.
                  </p>
                ) : null}
              </p>
            )}
          </div>
        )
      )}
    </div>
  );
}

export default Config_OS;
