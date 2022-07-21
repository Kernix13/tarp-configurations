import React, { useContext } from "react";
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
  return (
    <div>
      <p className="mb-3">If you do not see any configurations under any of the category types, then the tarp you chose is too small for those configurations.</p>
      <div>
        <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">Lean-To Configurations</h2>
        <Config_LT />
        <Config_FR />
        <Config_FR_CFly />
        <Config_BWFR />
      </div>
      <div>
        <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">A-Frame Configurations</h2>
        <Config_AF />
        <Config_SWAF />
        <Config_OS />
        <Config_TT />
        <Config_AF_CFly />
      </div>
      <div>
        <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">Diagonal Configurations</h2>
        <Config_Dia />
        <Config_HexDia />
        <Config_Arrowhead />
        <Config_PP />
        <Config_Adir />
      </div>
      <div>
        <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">Tent Configurations</h2>
        <Config_SWLT />
        <Config_Lavvu />
        <Config_Miners />
        <Config_Bakers />
      </div>
      <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
        Back to Home
      </Link>
    </div>
  );
}

export default Results;
