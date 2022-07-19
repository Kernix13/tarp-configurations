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

        const ridgeHeight = Math.min(ridgeHt, state.height + 6);

        if (ridgeHeight === state.height + 6) {
          cover = Math.round(Math.sqrt(Math.pow(w, 2) - Math.pow(ridgeHeight, 2)));
        } else {
          cover = Math.round(Math.cos(i * deg2Rad) * w);
        }

        const coverClear = Math.round(cover - state.bodyWidth);
        const sitTarpHtClear = ridgeHeight - sitHeight;
        const chairTarpHtClear = ridgeHeight - state.chairHeight;

        outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i, configName: this.configName, ridgeHt });

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

  // console.log(finalObj);

  return (
    <div>
      {finalObj.map((type, index) => (
        <div key={index}>
          <h3 className="font-bold">{type[2].configName}</h3>
          {type[2].coverClear <= 0 ? (
            "Tarp width too small for sleeping based on your body width. Try a larger tarp or a different configuration."
          ) : (
            <p className="mb-3 text-base">
              Ridgeline height: {type[2].ridgeHeight} inches. Lean angle: {type[2].angle}-degrees. {type[2].sitTarpHtClear > 0 ? " You can sit on the ground" : "There is not room to sit in this design (consider using guylines to stake to the ground)"}
              {type[2].chairTarpHtClear > 0 ? " and in your chair." : "."}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Config_AF;
