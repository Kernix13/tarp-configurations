import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function Config_SWLT() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [9, 15];

  class Config_SWLT {
    constructor(configName, len, width, alpha, beta) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.alpha = alpha;
      this.beta = beta;
    }

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const tarpSize = [this.len, this.width];
      const sleepClear = Math.round(w - (0.375 * state.height) / (Math.tan(this.alpha) * 2) - state.height);

      const ridgeHt = Math.round(Math.sin(this.beta * deg2Rad) * l);

      const ridgeHeight = Math.min(ridgeHt, state.height + 6);

      if (ridgeHeight === state.height + 6) {
        cover = Math.round(Math.sqrt(Math.pow(l, 2) - Math.pow(ridgeHeight, 2)));
      } else {
        cover = Math.round(Math.cos(this.beta * deg2Rad) * l);
      }

      const sitCover = Math.round(cover - (sitDepth + 3));
      const chairCover = Math.round(cover - (state.chairDepth + 3));

      const sitTarpHt = Math.round(Math.tan(this.beta * deg2Rad) * sitCover);
      const chairTarpHt = Math.round(Math.tan(this.beta * deg2Rad) * chairCover);

      const coverClear = Math.round(cover - state.bodyWidth);
      const sitTarpHtClear = sitTarpHt - sitHeight;
      const chairTarpHtClear = chairTarpHt - state.chairHeight;

      outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, "Wall angle": this.alpha, "Lean angle": this.beta, configName: this.configName, ridgeHt });

      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] / userTarp[1] === 0.5) {
    const SWLT_1to2 = new Config_SWLT("Side-Wall LT 1:2", userTarp[0], userTarp[1], 60, 33.3);
    SWLT_1to2.calcs();

    const Holden_1to2 = new Config_SWLT("Holden Tent 1:2", userTarp[0], userTarp[1], 50, 45);
    Holden_1to2.calcs();
  }

  if (userTarp[0] / userTarp[1] === 0.6) {
    const SWLT_3to5 = new Config_SWLT("Side-Wall LT 3:5", userTarp[0], userTarp[1], 50, 29);
    SWLT_3to5.calcs();

    const Holden_3to5 = new Config_SWLT("Holden Tent 3:5", userTarp[0], userTarp[1], 45, 40);
    Holden_3to5.calcs();
  }

  if (userTarp[1] / userTarp[0] === 1.5) {
    const SWLT_2to3 = new Config_SWLT("Side-Wall LT 2:3", userTarp[0], userTarp[1], 58, 27);
    SWLT_2to3.calcs();

    const Holden_2to3 = new Config_SWLT("Holden Tent 2:3", userTarp[0], userTarp[1], 56, 38);
    Holden_2to3.calcs();
  }

  if (userTarp[0] / userTarp[1] === 0.75) {
    const Holden_3to4 = new Config_SWLT("Holden Tent 3:4", userTarp[0], userTarp[1], 55, 33);
    Holden_3to4.calcs();
  }

  if (userTarp[0] / userTarp[1] === 0.8) {
    const Holden_4to5 = new Config_SWLT("Holden Tent 4:5", userTarp[0], userTarp[1], 58, 30);
    Holden_4to5.calcs();
  }

  // console.log(finalObj);

  return (
    <div>
      {/* if ratio = 3:4 or 4:5, no Sidewall so I need to account for that */}
      <p>Configuration Name: {finalObj[0][2].configName}</p>
      <p>Configuration Name: {finalObj[1][2].configName}</p>
    </div>
  );
}

export default Config_SWLT;
