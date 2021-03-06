import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function Config_AF() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_AF {
    constructor(configName, len, width, mult1) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.mult1 = mult1;
    }

    alpha = 37;
    beta = 75;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const tarpSize = [this.len, this.width];
      const sleepClear = l - state.height;

      for (let i = this.beta; i >= this.alpha; i--) {
        const ridgeHt = Math.round(Math.sin(i * deg2Rad) * (w * this.mult1));

        const ridgeHeight = Math.min(ridgeHt, state.height);

        if (ridgeHeight === state.height) {
          cover = Math.round(Math.sqrt(Math.pow(w, 2) - Math.pow(ridgeHeight, 2)));
        } else {
          cover = Math.round(Math.cos(i * deg2Rad) * w);
        }

        const sleepDiagClr = Math.floor(Math.sqrt(Math.pow(l, 2) + Math.pow(cover, 2))) - state.height;

        const coverClear = Math.round(cover - state.bodyWidth);
        const sitTarpHtClear = ridgeHeight - sitHeight;
        const chairTarpHtClear = ridgeHeight - state.chairHeight;

        outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i, configName: this.configName, ridgeHt, sleepDiagClr });

        if (sitTarpHtClear < 7 || chairTarpHtClear < 7) {
          break;
        }
      }
      finalObj.push(outputObj);
    }
  }

  const A_Frame = new Config_AF("A-Frame", userTarp[0], userTarp[1], 0.5);
  A_Frame.calcs();

  const AFLT_66 = new Config_AF("A-Frame LT 66", userTarp[0], userTarp[1], 0.667);
  AFLT_66.calcs();

  const AFLT_75 = new Config_AF("A-Frame LT 75", userTarp[0], userTarp[1], 0.75);
  AFLT_75.calcs();

  console.log(finalObj);

  const outputMap = (
    <div key={index}>
      <h3 className="font-bold">{type[2].configName}</h3>
      {type[2].coverClear <= 0 ? (
        <p className="mb-3">Tarp length is too small for sleeping based on your body mesurements. Try a larger tarp or a different configuration.</p>
      ) : (
        <p className="mb-3 text-base">
          Set your <span className="font-bold">ridgeline height </span>
          to {type[2].ridgeHeight} inches which results in a <span className="italic">lean angle</span> of {type[2].angle}-degrees. {type[2].sitTarpHtClear > 0 ? " You can sit under the tarp on the ground" : "There is not enough room to sit in this design (consider using guylines to stake to the ground)"}
          {type[2].chairTarpHtClear > 0 ? " and in your chair." : "."}
        </p>
      )}
    </div>
  );

  return (
    <div>
      {finalObj[0][2].sleepDiagClr <= 0 && <p className="mb-3">Your tarp is too small for these configurations.</p>}

      {finalObj.map((type, index) => type[2].sleepClear <= 0 && type[2].sleepDiagClr < 6 && outputMap)}
    </div>
  );
}

export default Config_AF;
