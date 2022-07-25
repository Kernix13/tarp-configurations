import React, { useContext } from "react";
import TarpContext from "../TarpContext";

import HexDiamondImg from "../assets/images/HexDiamond.png";

function Config_HexDia() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;

  const deg2Rad = Math.PI / 180;
  let outputObj = [];
  let finalObj = [];
  let cover = 0;

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_HexDia {
    constructor(configName, len, width, img) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.img = img;
    }

    alpha = 45;

    calcs() {
      const l = this.len * 12;
      const diagonal = Math.round(Math.sqrt(Math.pow(l, 2) * 2));
      const halfDiag = diagonal / 2;
      const sleepClear = diagonal - state.height;
      const tarpSize = [this.len, this.width];
      const configImg = this.img;

      // Times length? Because of ratio of folds to diagonal? Dbl-Check
      const ridgeHt = Math.round(Math.sin(this.alpha * deg2Rad) * halfDiag);

      const ridgeHeight = Math.min(ridgeHt, state.height);

      if (ridgeHeight === state.height) {
        // cover = Math.round(Math.sqrt(Math.pow(l, 2) - Math.pow(ridgeHeight, 2)));
        cover = Math.round(Math.sqrt(Math.pow(halfDiag / 2, 2) - Math.pow(ridgeHeight, 2)) * 2);
      } else {
        cover = Math.round(Math.cos(this.alpha * deg2Rad) * halfDiag);
      }

      const coverClear = Math.round(cover - state.bodyWidth);
      const sitTarpHtClear = ridgeHeight - sitHeight;
      const chairTarpHtClear = ridgeHeight - state.chairHeight;

      outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: this.alpha, configName: this.configName, ridgeHt, configImg });

      finalObj.push(outputObj);
    }
  }

  if (userTarp[0] === userTarp[1]) {
    const Hex_Diamond = new Config_HexDia("Hex Diamond", userTarp[0], userTarp[1], HexDiamondImg);
    Hex_Diamond.calcs();
  }

  // console.log(finalObj);

  return (
    <div>
      {finalObj.map((type, index) => (
        <div key={index} className="flex flex-col justify-center items-center my-8 bg-slate-100 border border-solid border-slate-400 sm:flex-row">
          <img src={type[2].configImg} alt={type[2].configName + ` configuration`} className="w-11/12 border-2 boder-solid border-slate-400 sm:m-4 sm:w-1/3 md:w-1/2" />
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-4 mt-2 md:text-3xl">{type[2].configName}</h3>
            {type[2].coverClear <= 0 ? (
              <p className="mb-3 text-base-lg lg:text-xl">Tarp width too small for sleeping based on your body measurements. Try a larger tarp or a different configuration.</p>
            ) : (
              <p className="mb-3 text-base-lg lg:text-xl">
                Set your <span className="font-bold">ridgeline height </span>
                to {type[2].ridgeHeight} inches which results in a <span className="italic">lean angle</span> of {type[2].angle}-degrees for the side walls. {type[2].sitTarpHtClear > 0 ? " You can sit under the tarp on the ground" : "There is not enough room to sit in this design"}
                {type[2].chairTarpHtClear > 0 ? " and in your chair." : "."}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Config_HexDia;
