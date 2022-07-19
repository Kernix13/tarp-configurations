import Config_LT from "../components/Config_LT";
import Config_FR from "../components/Config_FR";
import Config_BWFR from "../components/Config_BWFR";
import Config_AF from "../components/Config_AF";
import Config_SWAF from "../components/Config_SWAF";
import Config_OS from "../components/Config_OS";
import Config_TT from "../components/Config_TT";
import Config_FR_CFly from "../components/Config_FR_CFly";
import Config_AF_CFly from "../components/Config_AF_CFly";
import Config_Dia from "../components/Config_Dia";
import Config_HexDia from "../components/Config_HexDia";
import Config_Arrowhead from "../components/Config_Arrowhead";
import Config_PP from "../components/Config_PP";
import Config_Adir from "../components/Config_Adir";
import Config_SWLT from "../components/Config_SWLT";
import Config_Lavvu from "../components/Config_Lavvu";
import Config_Miners from "../components/Config_Miners";
import Config_Bakers from "../components/Config_Bakers";

function Results() {
  return (
    <div>
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
    </div>
  );
}

export default Results;
