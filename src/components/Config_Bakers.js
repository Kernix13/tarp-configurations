import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function Config_Bakers() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  // const userTarp = [state.tarpLength, state.tarpWidth];
  const userTarp = [8, 16];

  class Config_Bakers {
    constructor(configName, len, width) {
      this.configName = configName;
      this.len = len;
      this.width = width;
    }

    alpha = 27.5;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const tarpSize = [this.len, this.width];

      const ridgeHt = Math.round(Math.sin(this.alpha * deg2Rad) * l);

      const ridgeHeight = Math.min(ridgeHt, state.height + 6);

      if (ridgeHeight === state.height + 6) {
        cover = Math.round(Math.sqrt(Math.pow(l, 2) - Math.pow(ridgeHeight, 2)));
      } else {
        cover = Math.round(Math.cos(this.alpha * deg2Rad) * l);
      }

      const innerDiag = Math.round(Math.sqrt(Math.pow(w / 2, 2) + Math.pow(cover, 2)));
      // const sleepClear = w / 2 - height;
      const sleepClear = innerDiag - state.height;

      const sitCover = Math.round(cover - (sitDepth + 3));
      const chairCover = Math.round(cover - (state.chairDepth + 3));

      const sitTarpHt = Math.round(Math.tan(this.alpha * deg2Rad) * sitCover);
      const chairTarpHt = Math.round(Math.tan(this.alpha * deg2Rad) * chairCover);

      const coverClear = Math.round(cover - state.bodyWidth);
      const sitTarpHtClear = sitTarpHt - sitHeight;
      const chairTarpHtClear = chairTarpHt - state.chairHeight;

      outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: this.alpha, configName: this.configName, innerDiag });

      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] / userTarp[1] !== 1.0) {
    const Bakers = new Config_Bakers("Bakers Wind Shed", userTarp[0], userTarp[1]);
    Bakers.calcs();
  }

  // console.log(finalObj);

  return (
    <div>
      <p>Configuration Name: {finalObj[0][2].configName}</p>
    </div>
  );
}

export default Config_Bakers;
