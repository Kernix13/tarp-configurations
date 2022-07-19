import React, { useContext } from "react";
import TarpContext from "../TarpContext";

// Do I need this file?
function Config() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;
  // const configAngles = [30, 50];

  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  // let configName = "";

  class Config {
    constructor(configName, len, width, alpha, beta, mult1, mult2) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.alpha = alpha;
      this.beta = beta;
      this.mult1 = mult1;
      this.mult2 = mult2;
    }

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const tarpSize = [this.len, this.width];
      const sleepClear = l - state.height;

      for (let i = this.beta; i >= this.alpha; i--) {
        const ridgeHt = Math.round(Math.sin(i * deg2Rad) * w * this.mult1 + w * this.mult2);

        const ridgeHeight = Math.min(ridgeHt, state.height + 6);

        if (ridgeHeight === state.height + 6) {
          cover = Math.round(Math.sqrt(Math.pow(w, 2) - Math.pow(ridgeHeight + w * this.mult2, 2)));
        } else {
          cover = Math.round(Math.cos(i * deg2Rad) * w) * this.mult1 + w * this.mult2;
        }

        const sitCover = Math.round(cover - (sitDepth + 3));
        const chairCover = Math.max(Math.round(cover - (state.chairDepth + 3)), 0);

        const sitTarpHt = Math.round(Math.tan(i * deg2Rad) * sitCover);
        const chairTarpHt = Math.round(Math.tan(i * deg2Rad) * chairCover);

        // it's these - flat roof doesn't have these
        const coverClear = Math.round(cover - state.bodyWidth);
        const sitTarpHtClear = sitTarpHt - sitHeight;
        const chairTarpHtClear = chairTarpHt - state.chairHeight;

        outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i, configName: this.configName });

        if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
          break;
        }
      }
      finalObj.push(outputObj);
      // something is wrong here need to do this over - only configName, ridgeHeight and sleepClear are good for Flat Roof, all other NaN
      // return outputObj;
    }
  }

  // Major problem - redo the class for maybe mult3 or something else
  const userTarp = [7, 7];
  const Lean_To = new Config("Lean-To", userTarp[0], userTarp[1], 30, 50, 1, 0);
  Lean_To.calcs();

  console.log(outputObj);

  // ABOVE IS PERFECT, got NaN for the 2nd console.log
  const Flat_Roof = new Config("Back Wall LT 33", userTarp[0], userTarp[1], 30, 50, 0.667, 0.333);
  Flat_Roof.calcs();

  console.log(outputObj);

  return <div>Configuration Name: {finalObj[0][2].configName}</div>;
}

export default Config;
