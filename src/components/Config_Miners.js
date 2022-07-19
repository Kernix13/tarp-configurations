import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function Config_Miners() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  // const userTarp = [state.tarpLength, state.tarpWidth];
  const userTarp = [8, 16];

  class Config_Miners {
    constructor(configName, len, width) {
      this.configName = configName;
      this.len = len;
      this.width = width;
    }

    alpha = 67.5;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const sleepClear = Math.round(0.75 * w - state.height);
      const tarpSize = [this.len, this.width];

      const ridgeHeight = Math.round(0.857 * l);
      const cover = Math.round(0.678 * l);

      const sitCover = Math.round(cover - (sitDepth + 3));
      const chairCover = Math.round(cover - (state.chairDepth + 3));

      const sitTarpHt = Math.round(Math.tan(this.alpha * deg2Rad) * sitCover);
      const chairTarpHt = Math.round(Math.tan(this.alpha * deg2Rad) * chairCover);

      const coverClear = Math.round(cover - state.bodyWidth);
      const sitTarpHtClear = sitTarpHt - sitHeight;
      const chairTarpHtClear = chairTarpHt - state.chairHeight;

      outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: this.alpha, configName: this.configName });

      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] / userTarp[1] === 0.5) {
    const Miners_tent = new Config_Miners("Miners Tent", userTarp[0], userTarp[1]);
    Miners_tent.calcs();
  }

  // console.log(finalObj);

  return (
    <div>
      <p>Configuration Name: {finalObj[0][2].configName}</p>
    </div>
  );
}

export default Config_Miners;
