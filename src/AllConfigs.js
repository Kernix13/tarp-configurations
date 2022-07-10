const configObjects = [
  [
    {
      id: 1,
      name: "Lean-To",
      notes: "Simple to setup and best used for good weather or light rain.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 2,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "N/A"
    },
    {
      id: 2,
      name: "Flat Roof LT 50",
      notes: "Tie poles to tarp at the mid-points.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 2,
        guylines: 2
      },
      foldPoints: "Middle"
    },
    {
      id: 3,
      name: "Flat Roof LT 66",
      notes: "You need to tie the poles to the tarp at the 2/3rds point.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 2,
        guylines: 2
      },
      foldPoints: "Two-thirds point"
    },
    {
      id: 4,
      name: "Flat Roof LT 75",
      notes: "Tie the poles to the tarp at the 3/4ths point.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 2,
        guylines: 2
      },
      foldPoints: "Three-quarters point"
    },
    {
      id: 5,
      name: "Back-Wall LT 25",
      notes: "Tie the poles to the 1/4 tie on the tarp for the back wall.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 2,
        guylines: 2
      },
      foldPoints: "First-quarter point"
    },
    {
      id: 6,
      name: "Back-Wall LT 33",
      notes: "Tie the tarp to the poles at the 1/3rd points or use a rope.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 2,
        guylines: 2
      },
      foldPoints: "First-third point"
    },
    {
      id: 7,
      name: "A-Frame LT 66",
      notes: "Attach your ridgline at the 2/3rds point then use guylines.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 2
      },
      foldPoints: "Two-thirds point"
    },
    {
      id: 8,
      name: "A-Frame LT 75",
      notes: "Attach your ridgline at the 3/4 points of your tarp.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 2
      },
      foldPoints: "Three-quarters point"
    },
    {
      id: 9,
      name: "Back Wall Flat Roof LT 25",
      notes: "Tie your poles to the tarp at the 1/4 & 3/4 marks.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 4,
      tiePoints: {
        stakes: 6,
        ridgeline: 2,
        poles: 4,
        guylines: 4
      },
      foldPoints: "Quarter and three-quarters"
    },
    {
      id: 10,
      name: "Back Wall Flat Roof LT 33",
      notes: "You need tarp attachment points at the 1/3 & 2/3 marks.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 4,
      tiePoints: {
        stakes: 6,
        ridgeline: 2,
        poles: 4,
        guylines: 4
      },
      foldPoints: "Third and two-thirds"
    },
    {
      id: 11,
      name: "Open Stall",
      notes: "Tie You need tie-outs at the 1/3, 1/2 & 2/3 marks.",
      imgUrl: "",
      tarps: "All",
      angles: [30, 50],
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 6,
        ridgeline: 2,
        poles: 2,
        guylines: 4
      },
      foldPoints: "Third, middle and two-thirds"
    }
  ],
  [
    {
      id: 12,
      name: "A-Frame",
      notes: "Drape your tarp over the ridgeline at the mid-point.",
      imgUrl: "",
      tarps: "All",
      angles: [37, 75],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "Middle"
    },
    {
      id: 13,
      name: "Side-Wall AF 25",
      notes: "Attach your poles at the 1/4 and 3/4 points of your tarp.",
      imgUrl: "",
      tarps: "All",
      angles: [37, 75],
      ridgelines: 1,
      poles: 4,
      tiePoints: {
        stakes: 8,
        ridgeline: 2,
        poles: 4,
        guylines: 4
      },
      foldPoints: "Quarter, half, three-quarters"
    },
    {
      id: 14,
      name: "Side-Wall AF 33",
      notes: "Attach your poles at the 1/3 and 2/3 points of your tarp.",
      imgUrl: "",
      tarps: "Rectangle",
      angles: [37, 75],
      ridgelines: 1,
      poles: 4,
      tiePoints: {
        stakes: 8,
        ridgeline: 2,
        poles: 4,
        guylines: 4
      },
      foldPoints: "Thirds"
    },
    {
      id: 15,
      name: "Tube tent",
      notes: "Stake the ends together and at the 1/3 point, then add the ridgeline.",
      imgUrl: "",
      tarps: "Rectangle 1:2",
      angles: 60,
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "Thirds"
    },
    {
      id: 16,
      name: "Flat-Roof C-Fly",
      notes: "Stake at the 1/3 point, add poles at the 2/3 mark.",
      imgUrl: "",
      tarps: "Rectangle",
      angles: 60,
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 2,
        guylines: 0
      },
      foldPoints: "Thirds (or quarters)"
    },
    {
      id: 17,
      name: "A-Frame C-Fly",
      notes: "Stake at the 1/3 point, add the ridgeline at the 2/3 mark.",
      imgUrl: "",
      tarps: "Rectangle",
      angles: [75, 30],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 6,
        ridgeline: 2,
        poles: 0,
        guylines: 2
      },
      foldPoints: "Thirds (or quarters)"
    }
  ],
  [
    {
      id: 18,
      name: "Diamond",
      notes: "Drape over the ridgeline along the tarp diagonal, stake the wings to the ground or with guylines.",
      imgUrl: "",
      tarps: "Square",
      angles: [45, 75],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 2,
        ridgeline: 2,
        poles: 0,
        guylines: 2
      },
      foldPoints: "Along diagonal"
    },
    {
      id: 19,
      name: "Plow Point 33",
      notes: "Run the ridgeline along the diagonal from the ground to a tree or branch.",
      imgUrl: "",
      tarps: "Square",
      angles: 33,
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 3,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "Along diagonal"
    },
    {
      id: 20,
      name: "Adirondack 45",
      notes: "Lean on the diagonal, bottom and sides folded at the half-way points.",
      imgUrl: "",
      tarps: "Square",
      angles: 45,
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 5,
        ridgeline: 2,
        poles: 0,
        guylines: 1
      },
      foldPoints: "Diagoanl folds at 3 corners"
    },
    {
      id: 21,
      name: "Hex Diamond",
      notes: "Setup as the Adirondack but don't fold in the bottom. Also, run a ridgeline along the diagonal.",
      imgUrl: "",
      tarps: "Square",
      angles: [45, 60],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "Along diagonal"
    },
    {
      id: 22,
      name: "Arrowhead Wedge",
      notes: "Fold from the midpoints back to the diagonal point that is staked to the ground.",
      imgUrl: "",
      tarps: "Square",
      angles: 30,
      ridgelines: 1,
      poles: 2,
      tiePoints: {
        stakes: 5,
        ridgeline: 2,
        poles: 2,
        guylines: 2
      },
      foldPoints: "Middle on the sides back to diagonal"
    }
  ],
  [
    {
      id: 23,
      name: "Side Wall LT 1:2",
      notes: "The lean angle is 33.3-degrees, and the side walls are at a 60-degree angle from the back of the tarp.",
      imgUrl: "",
      tarps: "Rectangle 1:2",
      angles: [60, 33.3],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "Third and three-quarter points"
    },
    {
      id: 24,
      name: "Side Wall LT 3:5",
      notes: "The lean angle is 29-degrees, and the side walls are at a 55-degree angle from the back of the tarp.",
      imgUrl: "",
      tarps: "Rectangle 3:5",
      angles: [55, 29],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "Third and three-quarter points"
    },
    {
      id: 25,
      name: "Side Wall LT 2:3",
      notes: "The lean angle is 27-degrees, and the side walls are at a 58-degree angle from the back of the tarp.",
      imgUrl: "",
      tarps: "Rectangle 2:3",
      angles: [58, 27],
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "Third and three-quarter points"
    },
    {
      id: 26,
      name: "Holden Tent 1:2",
      notes: "The lean angle is 45-degrees, and the side walls are at a 50-degree angle from the back of the tarp.",
      imgUrl: "",
      tarps: "Rectangle 1:2",
      angles: [50, 45],
      ridgelines: 0,
      poles: 1,
      tiePoints: {
        stakes: 4,
        ridgeline: 0,
        poles: 1,
        guylines: 0
      },
      foldPoints: "From bottom corner to middle"
    },
    {
      id: 27,
      name: "Holden Tent 3:5",
      notes: "The lean angle is 40-degrees, and the side walls are at a 45-degree angle from the back of the tarp.",
      imgUrl: "",
      tarps: "Rectangle 3:5",
      angles: [45, 40],
      ridgelines: 0,
      poles: 1,
      tiePoints: {
        stakes: 4,
        ridgeline: 0,
        poles: 1,
        guylines: 0
      },
      foldPoints: "From bottom corner to middle"
    },
    {
      id: 28,
      name: "Holden Tent 2:3",
      notes: "The lean angle is 38-degrees, and the side walls are at a 56-degree angle from the back of the tarp.",
      imgUrl: "",
      tarps: "Rectangle 2:3",
      angles: [56, 38],
      ridgelines: 0,
      poles: 1,
      tiePoints: {
        stakes: 4,
        ridgeline: 0,
        poles: 1,
        guylines: 0
      },
      foldPoints: "From bottom corner to middle"
    },
    {
      id: 29,
      name: "Holden Tent 3:4",
      notes: "The lean angle is 33-degrees, and the side walls are at a 55-degree angle from the back of the tarp.",
      imgUrl: "",
      tarps: "Rectangle 3:4",
      angles: [55, 33],
      ridgelines: 0,
      poles: 1,
      tiePoints: {
        stakes: 4,
        ridgeline: 0,
        poles: 1,
        guylines: 0
      },
      foldPoints: "From bottom corner to middle"
    },
    {
      id: 30,
      name: "Holden Tent 4:5",
      notes: "The lean angle is 30-degrees, and the side walls are at a 58-degree angle from the back of the tarp.",
      imgUrl: "",
      tarps: "Rectangle 4:5",
      angles: [58, 30],
      ridgelines: 0,
      poles: 1,
      tiePoints: {
        stakes: 4,
        ridgeline: 0,
        poles: 1,
        guylines: 0
      },
      foldPoints: "From bottom corner to middle"
    },
    {
      id: 31,
      name: "Miners Tent",
      notes: "The lean angle is at 67.5-degrees. This design requires a lot of folds and geometry.",
      imgUrl: "",
      tarps: "Rectangle 1:2",
      angles: 67.5,
      ridgelines: 0,
      poles: 1,
      tiePoints: {
        stakes: 6,
        ridgeline: 0,
        poles: 3,
        guylines: 0
      },
      foldPoints: "Various..."
    },
    {
      id: 32,
      name: "Bakers Wind Shed",
      notes: "You can fold at the 1/4 and 3/4 or the 1/3 and 2/3 points. The 1/4 points gives a lean angle of 27.5 degrees.",
      imgUrl: "",
      tarps: "Rectangle 1:2",
      angles: 27.5,
      ridgelines: 1,
      poles: 0,
      tiePoints: {
        stakes: 4,
        ridgeline: 2,
        poles: 0,
        guylines: 0
      },
      foldPoints: "At the thirds or quarters"
    },
    {
      id: 33,
      name: "Lavvu",
      notes: "Create a tripod with three poles much larger than the short-side spaced evenly for a tetrahedron type structure.",
      imgUrl: "",
      tarps: "Rectangle 1:2",
      angles: 60,
      ridgelines: 0,
      poles: 3,
      tiePoints: {
        stakes: 3,
        ridgeline: 0,
        poles: 2,
        guylines: 0
      },
      foldPoints: "Thirds"
    }
  ]
];

export default configObjects;
