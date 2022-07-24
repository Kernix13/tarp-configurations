import React, { useContext } from "react";
import TarpContext from "../TarpContext";

import FRLT25Img from "../assets/images/FRLT25.png";
import FRLT33Img from "../assets/images/FRLT33.png";
import FRLT50Img from "../assets/images/FRLT50.png";

function Config_FR() {
  const state = useContext(TarpContext);

  const sitHeight = state.height / 2;

  const deg2Rad = Math.PI / 180;

  let outputObj = [];
  let finalObj = [];
  // Why do I need this? Because of if statement?
  let cover = 0;

  const userTarp = [state.tarpLength, state.tarpWidth];

  class Config_FR {
    constructor(configName, len, width, mult1, mult2, img) {
      this.configName = configName;
      this.len = len;
      this.width = width;
      this.mult1 = mult1;
      this.mult2 = mult2;
      this.img = img;
    }

    alpha = 30;
    beta = 50;

    calcs() {
      const l = this.len * 12;
      const w = this.width * 12;
      const tarpSize = [this.len, this.width];
      const sleepClear = l - state.height;
      const configImg = this.img;

      for (let i = this.beta; i >= this.alpha; i--) {
        const ridgeHt = Math.round(Math.sin(i * deg2Rad) * (w * this.mult1));

        const ridgeHeight = Math.min(ridgeHt, state.height);

        if (ridgeHeight === state.height) {
          cover = Math.round(Math.sqrt(Math.pow(w * this.mult1, 2) - Math.pow(ridgeHeight, 2)) + w * this.mult2);
        } else {
          cover = Math.round(Math.cos(i * deg2Rad) * w * this.mult1 + w * this.mult2);
        }

        const sleepDiagClr = Math.floor(Math.sqrt(Math.pow(l, 2) + Math.pow(cover, 2))) - state.height;
        const coverClear = Math.round(cover - state.bodyWidth);
        const sitTarpHtClear = ridgeHeight - sitHeight;
        const chairTarpHtClear = ridgeHeight - state.chairHeight;

        outputObj = tarpSize.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i, configName: this.configName, ridgeHt, sleepDiagClr, configImg });

        if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
          break;
        }
      }
      finalObj.push(outputObj);
    }
  }

  const FRLT_25 = new Config_FR("Flat-Roof LT 25", userTarp[0], userTarp[1], 0.75, 0.25, FRLT25Img);
  FRLT_25.calcs();

  const FRLT_33 = new Config_FR("Flat-Roof LT 33", userTarp[0], userTarp[1], 0.667, 0.333, FRLT33Img);
  FRLT_33.calcs();

  const FRLT_50 = new Config_FR("Flat-Roof LT 50", userTarp[0], userTarp[1], 0.5, 0.5, FRLT50Img);
  FRLT_50.calcs();

  // console.log(finalObj);

  return (
    <div>
      {finalObj.map((type, index) =>
        type[2].sleepClear <= 0 && type[2].sleepDiagClr < 6 ? null : (
          <div key={index} className="flex">
            <img src={type[2].configImg} alt={type[2].configName + ` configuration`} />
            <div>
              <h3 className="font-bold">{type[2].configName}</h3>
              {type[2].sleepDiagClr <= 0 && type[2].sleepClear <= 0 ? (
                <p className="mb-3">Tarp length is too small for sleeping based on your height.</p>
              ) : (
                <p className="mb-3 text-base">
                  Set your <span className="font-bold">ridgeline height </span>
                  to {type[2].ridgeHeight} inches which results in a <span className="italic">lean angle</span> of {type[2].angle}-degrees. {type[2].sitTarpHtClear > 0 ? " You can sit under the tarp on the ground" : "There is not room to sit in this design (consider using guylines to stake to the ground)"}
                  {type[2].chairTarpHtClear > 0 ? " and in your chair." : "."}
                  <br />{" "}
                  {type[2].sleepClear <= 0 ? (
                    <p className="mb-3">
                      <span className="font-semibold">Note</span>: You have to sleep along the diagonal of the tarp shadow because the length is too small.
                    </p>
                  ) : null}
                </p>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Config_FR;
