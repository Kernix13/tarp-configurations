import React, { useContext } from "react";
import TarpContext from "../TarpContext";

function Config_Lavvu() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [state.tarpLength, state.tarpWidth];

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

  if (finalObj.length === 0) {
    return (
      <div>
        <h3 className="font-bold">Lavvu</h3>
        <p className="mb-3">The Lavvu configuration requires a rectangle tarp with a ratio of 1:2.</p>
      </div>
    );
  } else {
    return (
      <div>
        {finalObj.map((type, index) => (
          <div key={index}>
            <h3 className="font-bold">{type[2].configName}</h3>
            {type[2].sleepClear <= 0 ? <p className="mb-3">Tarp length is too small for sleeping based on your height.</p> : <p className="mb-3 text-base">Attach your tarp {type[2].ridgeHeight} inches high on your tripod for a 60-degree lean angle. This design has plenty of room to sit in a chair inside the tent during a storm.</p>}
          </div>
        ))}
      </div>
    );
  }
}

export default Config_Lavvu;
