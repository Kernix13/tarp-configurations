import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function Config_Dia() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [8, 8];

  class Config_Dia {
    constructor(configName, len, width, mult1) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.mult1 = mult1;
    }

    alpha = 30;
    beta = 60;

    calcs() {
      const l = this.len * 12;
      const diagonal = Math.round(Math.sqrt(Math.pow(l, 2) * 2));
      const sleepClear = diagonal - state.height;
      const tarpSize = [this.len, this.width];

      for (let i = this.beta; i >= this.alpha; i--) {
        const ridgeHt = Math.round(Math.sin(i * deg2Rad) * (diagonal * this.mult1));

        const ridgeHeight = Math.min(ridgeHt, state.height + 6);

        if (ridgeHeight === state.height + 6) {
          cover = Math.round(Math.sqrt(Math.pow(diagonal / 2, 2) - Math.pow(ridgeHeight, 2)) * 2);
        } else {
          cover = Math.round(Math.cos(i * deg2Rad) * diagonal);
        }

        const coverClear = cover - state.bodyWidth;
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

  if (userTarp[0] === userTarp[1]) {
    const Diamond = new Config_Dia("Diamond", userTarp[0], userTarp[1], 0.5);
    Diamond.calcs();
  }

  // console.log(finalObj);

  return (
    <div>
      <p>Configuration Name: {finalObj[0][2].configName}</p>
    </div>
  );
}

export default Config_Dia;
