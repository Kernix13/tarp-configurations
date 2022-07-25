# Tarp Configurations Project

My 3rd portfolio project using React and Tailwind.

This is a simple app that computes the tarp sizes you can use for 21 types of Tarp shelters. If you are not into Bushcraft, then I'm sure you are thinking...

Having a lot of issues - user has to enter tarp size in feet then it will return the configs that will cover your sleeping length.

> TARP CONFIG WHAAAAAT?

This is another project for myself since I practice bushcraft and wilderness survival techniques.

## Features

For the time being I have a `Calcs` page which shows all the calculations for the tarp configurations. I may remove that page if it doesn't make sense to have it.

## To-Do Items

DONE:

1. focus height field on clear (DONE) - useRef and useEffect - cleanup?
1. useNavigate to go back to `/results` - (DONE)
1. `sleepClr` has to be calulated using the inner diagonal (Make a note) for a config or two (DONE)

STILL LEFTT TO DO:

1. button colors need to change
1. the error from `npm run build`
1. useEffect **cleanup!!!** - yes, stop the focus when you are on another page? https://dmitripavlutin.com/react-useref-guide/ -
1. SHIT - a page reload loses state and therefore configs content -
1. if user does not enter other fields, then calculate them and make a note to the user maybe - nee notes in App.js
1. Double check the 2 angles for all Side-Wall LT and Holden Tent configs.
1. Double check the constants used in the Miners Tent calculations.
1. Consider changing for loop Sleep Clearance conditional negative to be able to push out the side walls. Maybe `-12`.
1. Remove `plowPointCover` from Plow Point forEach?
1. Double check why configAngles differ for Hex Diamond from Diamond?
1. Ask Geek37 to double check my Miners Tent equations since it has 3D geometry.
1. Make it pretty: Choice images, 33 Inkscape graphics, and fantastic Tailwind cards
1. Consider adding Half-Pyramid and Forest Tent into A-Frame category, and Trapezoid and Tetra into Tents. Which means I need to add at least 1 more into Lean-To (Envelope?) and Diagonal (Octagon? Forrester?)
1. no DaisyUI clsses?
1. added Config.js as a ES6 class - why?

**MAIN TO-DO**: Get onSubmit and onChange to work and output EVERYTHING!

## Contributing

...later

## License

...later

- LT, BWLT25, BWLT33, FRLT25, FRLT33, FRLT50, FR CFLY, BWFRLT25, BWFRLT33 (9)
- AF, AFLT66, AFLT75, AFCFly, TubeTent, SWAF25, SWAF33, OpenStall (8, 17)
- Diamond, HexDiamond, Arrowhead, PlowPoint, Adirondack ()
- Bakers, Lavvu, Miners, SWLT, Holden ()
