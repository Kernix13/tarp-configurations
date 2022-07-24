import React, { useContext } from "react";
import TarpContext from "../TarpContext";

import BakersImg from "../assets/images/Bakers.png";

function Config_Bakers() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_Bakers {
    constructor(configName, len, width, img) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.img = img;
    }

    alpha = 27.5;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const tarpSize = [this.len, this.width];
      const configImg = this.img;

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

      outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: this.alpha, configName: this.configName, innerDiag, configImg });

      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] / userTarp[1] !== 1.0) {
    const Bakers = new Config_Bakers("Bakers Wind Shed", userTarp[0], userTarp[1], BakersImg);
    Bakers.calcs();
  }

  // console.log(finalObj);

  if (finalObj.length === 0) {
    return (
      <div>
        <h3 className="font-bold">Baker's Wind Shed</h3>
        <p className="mb-3">The Baker's Wind Shed configuration requires a rectangle tarp.</p>
      </div>
    );
  } else {
    return (
      <div>
        {finalObj.map((type, index) => (
          <div key={index} className="flex">
            <img src={type[2].configImg} alt={type[2].configName + ` configuration`} />
            <div>
              <h3 className="font-bold">{type[2].configName}</h3>
              {type[2].sleepDiagClr <= 0 && type[2].sleepClear <= 0 ? (
                <p className="mb-3">Tarp length is too small for sleeping based on your height.</p>
              ) : (
                <p className="mb-3 text-base">
                  Set your <span className="font-bold">ridgeline height </span>
                  to {type[2].ridgeHeight} inches for a <span className="italic">lean angle</span> of {type[2].angle}-degrees. {type[2].sitTarpHtClear > 0 ? " You can sit under the tarp on the ground" : "The ridgeline is too low to sit in this design"}
                  {type[2].chairTarpHtClear > 0 ? " and in your chair." : "."}
                  <br /> {type[2].sleepClear <= 0 ? "Note: you have to sleep along the tarp cover diagonal because the length is too small." : null}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Config_Bakers;
