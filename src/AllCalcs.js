const AllCalcs = [
  [
    {
      name: "Lean-To",
      "Ridge Height": "sin(angle) * tarp width",
      "Overhead Cover": "cos(angle) * tarp width"
    },
    {
      name: "Flat Roof LT 50",
      "Ridge Height": "sin(angle) * tarp width * 0.5",
      "Overhead Cover": "cos(angle) * tarp width * 0.5 + tarp width * 0.5"
    },
    {
      name: "Flat Roof LT 33",
      "Ridge Height": "sin(angle) * tarp width * 0.667",
      "Overhead Cover": "cos(angle) * tarp width * 0.667 + tarp width * 0.333"
    },
    {
      name: "Flat Roof LT 25",
      "Ridge Height": "sin(angle) * tarp width * 0.75",
      "Overhead Cover": "cos(angle) * tarp width * 0.75 + tarp width * 0.25"
    },
    {
      name: "Back Wall LT 25",
      "Ridge Height": "sin(angle) * tarp width * 0.75 + tarp width * 0.25",
      "Overhead Cover": "cos(angle) * tarp width * 0.75"
    },
    {
      name: "Back Wall LT 33",
      "Ridge Height": "sin(angle) * tarp width * 0.667 + tarp width * 0.333",
      "Overhead Cover": "cos(angle) * tarp width * 0.667"
    },
    {
      name: "A-Frame LT 66",
      "Ridge Height": "sin(angle) * tarp width * 0.667",
      "Overhead Cover": "cos(angle) * tarp width"
    },
    {
      name: "A-Frame LT 66",
      "Ridge Height": "sin(angle) * tarp width * 0.75",
      "Overhead Cover": "cos(angle) * tarp width"
    },
    {
      name: "Back Wall Flat Roof LT 25",
      "Ridge Height": "sin(angle) * tarp width * 0.5 + tarp width * 0.25",
      "Overhead Cover": "cos(angle) * tarp width * 0.5 + tarp width * 0.25"
    },
    {
      name: "Back Wall Flat Roof LT 33",
      "Ridge Height": "sin(angle) * tarp width * 0.333 + tarp width * 0.333",
      "Overhead Cover": "cos(angle) * tarp width * 0.333 + tarp width * 0.333"
    },
    {
      name: "Open Stall",
      "Ridge Height": "sin(angle) * tarp width * 0.333 + tarp width * 0.333",
      "Overhead Cover": "cos(angle) * tarp width * 0.667"
    }
  ],
  [
    {
      name: "A-Frame",
      "Ridge Height": "sin(angle) * tarp width * 0.5",
      "Overhead Cover": "cos(angle) * tarp width"
    },
    {
      name: "Side-Wall AF 25",
      "Ridge Height": "sin(angle) * tarp width * 0.25 + tarp width * 0.25",
      "Overhead Cover": "cos(angle) * tarp width * 0.5"
    },
    {
      name: "Side-Wall AF 33",
      "Ridge Height": "sin(angle) * tarp width * 0.333 + tarp width * 0.333",
      "Overhead Cover": "cos(angle) * tarp width * 0.667"
    },
    {
      name: "Tube Tent",
      "Ridge Height": "sin(angle) * tarp width * 0.333",
      "Overhead Cover": "cos(angle) * tarp width * 0.667"
    },
    {
      name: "Flat-Roof C-Fly",
      "Ridge Height": "sin(angle) * tarp width * 0.333",
      "Overhead Cover": "cos(angle) * tarp width * 0.333 + tarp width * 0.333"
    },
    {
      name: "A-Frame C-Fly",
      "Ridge Height": "sin(angle) * tarp width * 0.333",
      "Overhead Cover": "cos(angle1) * tarp width * 0.333 + cos(angle2) * tarp width * 0.333"
    }
  ],
  [
    {
      name: "Diamond",
      "Ridge Height": "height + 6",
      "Overhead Cover": "cos(angle) * diagonal",
      "Sleep Clearance": "diagonal - height"
    },
    {
      name: "Hex Diamond",
      "Ridge Height": "sin(angle) * tarp length",
      "Overhead Cover": "cos(angle) * tarp length",
      "Sleep Clearance": "diagonal - height"
    },
    {
      name: "Arrowhead Wedge",
      "Ridge Height": "sin(angle) * diagonal",
      "Overhead Cover": "tarp length / 2",
      "Sleep Clearance": "cos(angle) * diagonal - height"
    },
    {
      name: "Plow Point 33",
      "Ridge Height": "sin(angle) * diagonal",
      "Overhead Cover": "cos(angle) * diagonal",
      "Sleep Clearance": "cos(angle) * diagonal - height",
      "Plow Point Side Cover": "cos(angle2) * diagonal",
      angle2: "???"
    },
    {
      name: "Adirondack",
      "Ridge Height": "(tarp length * 0.5) / sin(angle)",
      "Overhead Cover": "cos(angle) * sqrt( 2 * length * length)",
      "Sleep Clearance": "diagonal - height"
    }
  ],
  [
    {
      name: "Lavvu",
      "Ridge Height": "sin(angle) * tarp length",
      "Overhead Cover": "sin(angle) * tarp width / 3",
      "Sleep Clearance": "tarp width / 3 - height"
    },
    {
      name: "Miners Tent",
      "Ridge Height": "0.857 * tarp length",
      "Overhead Cover": "0.678 * tarp length",
      "Sleep Clearance": "0.75 * tarp length - height"
    },
    {
      name: "Bakers Wind Shed",
      "Ridge Height": "sin(angle) * tarp length",
      "Overhead Cover": "cos(angle) * tarp length",
      "Sleep Clearance": "sqrt((tarp length * 0.5) * (tarp length * 0.5) * 2) - height",
      "Sleep Clear2": "tarp width / 2 - height"
    },
    {
      name: "All Side Wall & Holden tents",
      "Ridge Height": "sin(angle2) * tarp length",
      "Overhead Cover": "cos(angle2) * tarp length",
      "Sleep Clearance": "(tarp width - (0.375 * height) / (tan(angle1) * 2)) - height",
      "Sleep Clear2": "tarp width - height"
    }
  ]
];

export default AllCalcs;
