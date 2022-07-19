import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function Config_Arrowhead() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [8, 8];

  class Config_Arrowhead {
    constructor(configName, len, width) {
      this.configName = configName;
      this.len = len;
      this.width = width;
    }

    alpha = 30;

    calcs() {
      const l = this.len * 12;
      const diagonal = Math.round(Math.sqrt(Math.pow(l, 2) * 2));
      // const halfDiag = diagonal / 2;
      const totalDiagonalCover = Math.round(Math.cos(this.alpha * deg2Rad) * diagonal);
      const sleepClear = Math.round(totalDiagonalCover - state.height);
      const tarpSize = [this.len, this.width];

      const ridgeHt = Math.round(Math.sin(this.alpha * deg2Rad) * diagonal);

      const ridgeHeight = Math.min(ridgeHt, state.height + 6);

      const cover = diagonal / 2;

      const coverClear = Math.round(cover - state.bodyWidth);

      const sitCover = Math.round(totalDiagonalCover - (sitDepth + 3));
      const chairCover = Math.round(totalDiagonalCover - (state.chairDepth + 3));

      const sitTarpHt = Math.round(Math.tan(this.alpha * deg2Rad) * sitCover);
      const chairTarpHt = Math.round(Math.tan(this.alpha * deg2Rad) * chairCover);

      const sitTarpHtClear = sitTarpHt - sitHeight;
      const chairTarpHtClear = chairTarpHt - state.chairHeight;

      outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: this.alpha, configName: this.configName, ridgeHt, totalDiagonalCover });

      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] === userTarp[1]) {
    const Arrowhead = new Config_Arrowhead("Arrowhead Wedge", userTarp[0], userTarp[1]);
    Arrowhead.calcs();
  }

  // console.log(finalObj);

  return (
    <div>
      <p>Configuration Name: {finalObj[0][2].configName}</p>
    </div>
  );
}

export default Config_Arrowhead;
