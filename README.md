# Tarp Configurations Project

My 3rd portfolio project using React and Tailwind.

This is a simple app that computes the tarp sizes you can use for 21 types of Tarp shelters. If you are not into Bushcraft, then I'm sure you are thinking...

> WHAAAAAT?

This is another project for myself since I practice bushcraft and wilderness survival techniques.

## Features

For the time being I have a `Calcs` page which shows all the calculations for the tarp configurations. I may remove that page if it doesn't make sense to have it.

## To-Do Items

1. Double check the 2 angles for all Side-Wall LT and Holden Tent configs.
1. Double check the constants used in the Miners Tent calculations.
1. Double check Adirondack sleep clearance calculation.
1. Double check _ALL_ calculations for all 5 Diagonal configs. Especially check `ridgeHt` for Hex Diamond.
1. Double check the alternate Cover equation for _ALL_ configs.
1. Consider changing 4 to 6 inches for A-Frame Sit Clearance conditional.
1. Consider changing for loop Sleep Clearance conditional negative to be able to push out the side walls. Maybe `-12`.
1. Remove `plowPointCover` from Plow Point forEach?
1. Include 4:5 ratio in Diagonal configs? If so, how? New file for square and 4:5?
1. Double check why configAngles differ for Hex Diamond from Diamond?
1. Should the for loops and forEach be inside functions?
1. Ask Geek37 to double check my Miners Tent equations since it has 3D geometry.
1. `sleepClr` has to be calulated using the inner diagonal (Make a note) for a config or two
1. Make it pretty: Choice images, 33 Inkscape graphics, and fantastic Tailwind cards
1. **CommonForLoop.js**: Looks like I don't know how to add the nested for loop into a function, export it, and then use it - got two empty arrays first time, then errors after that

**MAIN TO-DO**: Get onSubmit and onChange to work and output EVERYTHING!

## Contributing

...later

## License

...later
