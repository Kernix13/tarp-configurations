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

  const userTarp = [state.tarpLength, state.tarpWidth];

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

      const ridgeHeight = Math.min(ridgeHt, state.height);

      if (ridgeHeight === state.height) {
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

  if (finalObj.length === 0) {
    return (
      <div>
        <h3 className="font-bold">Side-Wall Configs</h3>
        <p className="mb-3">The Side-Wall Lean-To configuration requires a rectangle tarp with a ratio of 1:2, 3:5, or 2:3. The Holden Tent requires the same but can also be 3:4 or 4:5 ratio tarps.</p>
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
                Set your {type[2].configName.split(" ")[0] === "Side-Wall" ? <span className="font-bold">ridgeline height </span> : <span className="font-bold">ridge pole height </span>}
                to {type[2].ridgeHeight} inches for a <span className="italic">lean angle</span> of {type[2]["Lean angle"]}-degrees. {type[2].sitTarpHtClear > 0 ? " You can sit under the tarp on the ground" : type[2].configName.split(" ")[0] === "Side-Wall" ? "Ridgeline too low to sit in this design (consider using guylines to raise the ridgeline)" : "There is not enough height to sit in this design"}
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

export default Config_SWLT;
