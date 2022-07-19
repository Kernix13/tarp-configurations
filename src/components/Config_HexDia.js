import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function Config_HexDia() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [8, 8];

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

      const ridgeHeight = Math.min(ridgeHt, state.height + 6);

      if (ridgeHeight === state.height + 6) {
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
      <p>Configuration Name: {finalObj[0][2].configName}</p>
    </div>
  );
}

export default Config_HexDia;
