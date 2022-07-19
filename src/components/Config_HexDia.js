import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function Config_HexDia() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_HexDia {
    constructor(configName, len, width) {
      this.configName = configName;
      this.len = len;
      this.width = width;
    }

    alpha = 45;

    calcs() {
      const l = this.len * 12;
      const diagonal = Math.round(Math.sqrt(Math.pow(l, 2) * 2));
      const halfDiag = diagonal / 2;
      const sleepClear = diagonal - state.height;
      const tarpSize = [this.len, this.width];

      // Times length? Because of ratio of folds to diagonal? Dbl-Check
      const ridgeHt = Math.round(Math.sin(this.alpha * deg2Rad) * halfDiag);

      const ridgeHeight = Math.min(ridgeHt, state.height);

      if (ridgeHeight === state.height) {
        // cover = Math.round(Math.sqrt(Math.pow(l, 2) - Math.pow(ridgeHeight, 2)));
        cover = Math.round(Math.sqrt(Math.pow(halfDiag / 2, 2) - Math.pow(ridgeHeight, 2)) * 2);
      } else {
        cover = Math.round(Math.cos(this.alpha * deg2Rad) * halfDiag);
      }

      const coverClear = Math.round(cover - state.bodyWidth);
      const sitTarpHtClear = ridgeHeight - sitHeight;
      const chairTarpHtClear = ridgeHeight - state.chairHeight;

      outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: this.alpha, configName: this.configName, ridgeHt });

      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] === userTarp[1]) {
    const Hex_Diamond = new Config_HexDia("Hex Diamond", userTarp[0], userTarp[1]);
    Hex_Diamond.calcs();
  }

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
              Set your <span className="font-bold">ridgeline height </span>
              to {type[2].ridgeHeight} inches which results in a <span className="italic">lean angle</span> of {type[2].angle}-degrees for the side walls. {type[2].sitTarpHtClear > 0 ? " You can sit under the tarp on the ground" : "There is not room to sit in this design (consider using guylines to stake to the ground)"}
              {type[2].chairTarpHtClear > 0 ? " and in your chair." : "."}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Config_HexDia;
