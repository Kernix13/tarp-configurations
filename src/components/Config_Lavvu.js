import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function Config_Lavvu() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [8, 16];

  class Config_Lavvu {
    constructor(configName, len, width) {
      this.configName = configName;
      this.len = len;
      this.width = width;
    }

    alpha = 60;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const sleepClear = w / 3 - state.height;
      const tarpSize = [this.len, this.width];

      const ridgeHeight = Math.round(Math.sin(this.alpha * deg2Rad) * l);

      const cover = Math.round(Math.sin(this.alpha * deg2Rad) * w * 0.333);

      const coverClear = Math.round(cover - state.bodyWidth);
      const sitTarpHtClear = ridgeHeight - sitHeight;
      const chairTarpHtClear = ridgeHeight - state.chairHeight;

      outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: this.alpha, configName: this.configName, height: state.height });

      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] / userTarp[1] === 0.5) {
    const Lavvu = new Config_Lavvu("Lavvu", userTarp[0], userTarp[1]);
    Lavvu.calcs();
  }

  // console.log(finalObj);

  if (finalObj[0][2].sleepClear > 0) {
    return (
      <div>
        <p>Configuration Name: {finalObj[0][2].configName}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Your tarp is too small to sleep in a {finalObj[0][2].configName} configuration.</p>
      </div>
    );
  }
}

export default Config_Lavvu;
