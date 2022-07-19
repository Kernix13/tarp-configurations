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

  const userTarp = [state.tarpLength, state.tarpWidth];

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

  if (finalObj.length === 0) {
    return (
      <div>
        <h3 className="font-bold">Miner's Tent</h3>
        <p className="mb-3">The Miner's Tent configuration requires a rectangle tarp with a ratio of 1:2.</p>
      </div>
    );
  } else {
    return (
      <div>
        {finalObj.map((type, index) => (
          <div key={index}>
            <h3 className="font-bold">{type[2].configName}</h3>
            {type[2].sleepDiagClr <= 0 && type[2].sleepClear <= 0 ? (
              "Tarp length too small for sleeping based on your height."
            ) : (
              <p className="mb-3 text-base">
                Attach your tarp to a <span className="font-bold">ridge pole </span>
                {type[2].ridgeHeight} inches above the ground for a <span className="italic">lean angle</span> of {type[2].angle}-degrees. {type[2].sitTarpHtClear > 0 ? " You can sit under the tarp on the ground" : "Ridgeline too low to sit in this design (consider using guylines to raise the ridgeline)"}
                {type[2].chairTarpHtClear > 0 ? " and in your chair." : "."}
                <br /> {type[2].sleepClear <= 0 ? "Note: you have to sleep along the tarp cover diagonal because the length is too small." : null}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Config_Miners;
