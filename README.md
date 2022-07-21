# Tarp Configurations Project

My 3rd portfolio project using React and Tailwind.

This is a simple app that computes the tarp sizes you can use for 21 types of Tarp shelters. If you are not into Bushcraft, then I'm sure you are thinking...

Having a lot of issues - user has to enter tarp size in feet then it will return the configs that will cover your sleeping length.

> TARP CONFIG WHAAAAAT?

This is another project for myself since I practice bushcraft and wilderness survival techniques.

## Features

For the time being I have a `Calcs` page which shows all the calculations for the tarp configurations. I may remove that page if it doesn't make sense to have it.

## To-Do Items

1. `sleepClr` has to be calulated using the inner diagonal (Make a note) for a config or two (DONE)
1. Double check the 2 angles for all Side-Wall LT and Holden Tent configs.
1. Double check the constants used in the Miners Tent calculations.
1. Consider changing for loop Sleep Clearance conditional negative to be able to push out the side walls. Maybe `-12`.
1. Remove `plowPointCover` from Plow Point forEach?
1. Double check why configAngles differ for Hex Diamond from Diamond?
1. Ask Geek37 to double check my Miners Tent equations since it has 3D geometry.

**MAIN TO-DO**: Get onSubmit and onChange to work and output EVERYTHING!

## Contributing

...later

## License

...later
