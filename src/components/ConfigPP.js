import React, { useContext } from "react";
import TarpContext from "../TarpContext";

import PlowPointImg from "../assets/images/PlowPoint.png";

function Config_PP() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;
  const sitDepth = (state.height * 7) / 32;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_PP {
    constructor(configName, len, width, img) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.img = img;
    }

    alpha = 30;
    beta = 45;

    calcs() {
      const l = this.len * 12;
      const diagonal = Math.round(Math.sqrt(Math.pow(l, 2) * 2));
      const tarpSize = [this.len, this.width];
      const configImg = this.img;

      for (let i = this.beta; i >= this.alpha; i--) {
        const sleepClear = Math.round(Math.cos(i * deg2Rad) * diagonal - state.height);
        const ridgeHt = Math.round(Math.sin(i * deg2Rad) * diagonal);

        const ridgeHeight = Math.min(ridgeHt, state.height);

        if (ridgeHeight === state.height) {
          cover = Math.round(Math.sqrt(Math.pow(diagonal, 2) - Math.pow(ridgeHeight, 2)) * 2);
        } else {
          cover = Math.round(Math.cos(i * deg2Rad) * diagonal);
        }

        const coverClear = Math.round(cover - state.bodyWidth);

        const sitCover = Math.round(cover - (sitDepth + 3));
        const chairCover = Math.round(cover - (state.chairDepth + 3));

        const sitTarpHt = Math.round(Math.tan(i * deg2Rad) * sitCover);
        const chairTarpHt = Math.round(Math.tan(i * deg2Rad) * chairCover);

        const sitTarpHtClear = sitTarpHt - sitHeight;
        const chairTarpHtClear = chairTarpHt - state.chairHeight;

        outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i, configName: this.configName, ridgeHt, configImg });

        if (sitTarpHtClear < 7 || chairTarpHtClear < 7) {
          break;
        }
      }
      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] === userTarp[1]) {
    const PlowPoint = new Config_PP("Plow Point", userTarp[0], userTarp[1], PlowPointImg);
    PlowPoint.calcs();
  }

  // console.log(finalObj);

  return (
    <div>
      {finalObj.map((type, index) => (
        <div key={index} className="flex">
          <img src={type[2].configImg} alt={type[2].configName + ` configuration`} />
          <div>
            <h3 className="font-bold">{type[2].configName}</h3>
            {type[2].coverClear <= 0 ? (
              <p className="mb-3">Tarp width too small for sleeping based on your body measurements. Try a larger tarp or a different configuration.</p>
            ) : (
              <p className="mb-3 text-base">
                Set your end <span className="font-bold">ridgeline </span>
                connection point to {type[2].ridgeHeight} inches which results in a <span className="italic">lean angle</span> of {type[2].angle}-degrees. {type[2].sitTarpHtClear > 0 ? " You can sit under the tarp on the ground" : "There is not room to sit in this design"}
                {type[2].chairTarpHtClear > 0 ? " and in your chair." : "."}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Config_PP;
