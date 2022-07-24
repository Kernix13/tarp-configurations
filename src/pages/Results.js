import React, { useContext, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import TarpContext from "../TarpContext";

import Config_LT from "../components/ConfigLT";
import Config_FR from "../components/ConfigFR";
import Config_BWFR from "../components/ConfigBWFR";
import Config_AF from "../components/ConfigAF";
import Config_SWAF from "../components/ConfigSWAF";
import Config_OS from "../components/ConfigOS";
import Config_TT from "../components/ConfigTT";
import Config_FR_CFly from "../components/ConfigFRCFly";
import Config_AF_CFly from "../components/ConfigAFCFly";
import Config_Dia from "../components/ConfigDia";
import Config_HexDia from "../components/ConfigHexDia";
import Config_Arrowhead from "../components/ConfigArrowhead";
import Config_PP from "../components/ConfigPP";
import Config_Adir from "../components/ConfigAdir";
import Config_SWLT from "../components/ConfigSWLT";
import Config_Lavvu from "../components/ConfigLavvu";
import Config_Miners from "../components/ConfigMiners";
import Config_Bakers from "../components/ConfigBakers";

function Results() {
  const state = useContext(TarpContext);
  console.log(state);

  if (state.height === "") {
    return (
      <div>
        <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">Lean-To Configurations</h2>
        <p className="mb-3 text-center">Please submit the form to see the configurations.</p>
        <div className="mt-6 text-center">
          <button id="user-submit" type="submit" className="bg-transparent hover:bg-cyan-700 text-cyan-700 font-semibold hover:text-white py-2 px-4 mr-4 border border-cyan-700 hover:border-transparent rounded">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Back to Home Page Form
            </Link>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <p className="mb-3">If you do not see any configurations under any of the category types, then the tarp you chose is too small for those configurations.</p>
          <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">Lean-To Configurations</h2>
          <Config_LT />
          <Config_FR />
          <Config_FR_CFly />
          <Config_BWFR />
          <p className="mb-3">
            Go to{" "}
            <Link to="/configs#lean-to-configuration" className="font-bold text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-2">
              Configs page
            </Link>{" "}
            for more details.
          </p>
        </div>
        <div>
          <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">A-Frame Configurations</h2>
          <Config_AF />
          <Config_SWAF />
          <Config_OS />
          <Config_TT />
          <Config_AF_CFly />
          <p className="mb-3">
            Go to{" "}
            <Link to="/configs#aframe-configuration" className="font-bold text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-2">
              Configs page
            </Link>{" "}
            for more details.
          </p>
        </div>
        <div>
          <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">Diagonal Configurations</h2>
          <Config_Dia />
          <Config_HexDia />
          <Config_Arrowhead />
          <Config_PP />
          <Config_Adir />
          <p className="mb-3">
            Go to{" "}
            <Link to="/configs#diagonal-configuration" className="font-bold text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-2">
              Configs page
            </Link>{" "}
            for more details.
          </p>
        </div>
        <div>
          <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">Tent Configurations</h2>
          <Config_SWLT />
          <Config_Lavvu />
          <Config_Miners />
          <Config_Bakers />
          <p className="mb-3">
            Go to{" "}
            <Link to="/configs#tent-configuration" className="font-bold text-blue-600 hover:text-blue-800 hover:underline hover:underline-offset-2">
              Configs page
            </Link>{" "}
            for more details.
          </p>
        </div>
        <div className="text-left mt-6">
          <button id="user-submit" type="submit" className="bg-transparent hover:bg-cyan-700 text-cyan-700 font-semibold hover:text-white py-2 px-4 mr-4 border border-cyan-700 hover:border-transparent rounded">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Back to Home Page Form
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Results;
