import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function Config_TT() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  // const userTarp = [6, 12];
  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_TT {
    constructor(configName, len, width, mult1, mult2) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.mult1 = mult1;
      this.mult2 = mult2;
    }

    alpha = 60;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const tarpSize = [this.len, this.width];
      const sleepClear = l - state.height;

      const ridgeHt = Math.round(Math.sin(this.alpha * deg2Rad) * (w * this.mult1));

      const ridgeHeight = Math.min(ridgeHt, state.height);

      // Should't cover be equal to wid / 3
      if (ridgeHeight === state.height) {
        cover = Math.round(Math.sqrt(Math.pow(w * this.mult2, 2) - Math.pow(ridgeHeight, 2)));
      } else {
        cover = Math.round(Math.cos(this.alpha * deg2Rad) * w * this.mult2);
      }

      const sleepDiagClr = Math.floor(Math.sqrt(Math.pow(l, 2) + Math.pow(cover, 2))) - state.height;

      const coverClear = Math.round(w / 3 - state.bodyWidth);
      const sitTarpHtClear = ridgeHeight - sitHeight;
      const chairTarpHtClear = ridgeHeight - state.chairHeight;

      outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: this.alpha, configName: this.configName, ridgeHt, sleepDiagClr });

      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] / userTarp[1] === 0.5) {
    const Tube_Tent = new Config_TT("Tube Tent", userTarp[0], userTarp[1], 0.333, 0.667);
    Tube_Tent.calcs();
  }

  // console.log(finalObj);

  if (finalObj.length === 0) {
    return (
      <div>
        <h3 className="font-bold">Tube Tent</h3>
        <p className="mb-3 text-base">The Tube Tend config requires a 1:2 ratio rectangular tarp.</p>
      </div>
    );
  } else {
    return (
      <div>
        {finalObj.map((type, index) =>
          type[2].sleepClear <= 0 && type[2].sleepDiagClr < 6 ? null : (
            <div key={index}>
              <h3 className="font-bold">{type[2].configName}</h3>
              {type[2].coverClear <= 0 ? (
                <p className="mb-3">Tarp width is too small for sleeping based on your body measurements. Try a larger tarp or a different configuration.</p>
              ) : (
                <p className="mb-3 text-base">
                  Set your <span className="font-bold">ridgeline height </span>
                  to {type[2].ridgeHeight} inches which results in a <span className="italic">lean angle</span> of {type[2].angle}-degrees. {type[2].sitTarpHtClear > 0 ? " You can sit under the tarp on the ground" : "There is not enough room to sit in this design"}
                  {type[2].chairTarpHtClear > 0 ? " and in your chair." : "."}
                </p>
              )}
            </div>
          )
        )}
      </div>
    );
  }
}

export default Config_TT;
