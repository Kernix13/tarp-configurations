# Tarp Configurations Project

My 3rd portfolio project using React and Tailwind.

This is a simple app that computes the tarp sizes you can use for 21 types of Tarp shelters. If you are not into Bushcraft, then I'm sure you are thinking...

Having a lot of issues - user has to enter tarp size in feet then it will return the configs that will cover your sleeping length and that you can sleep in

Redirect to `/results` on form submit:

- this one uses `useNavigate`: https://bobbyhadz.com/blog/react-redirect-after-form-submit
- https://stackoverflow.com/questions/70848130/how-to-redirect-to-another-page-with-passing-data-after-submitting-form-in-using
- TRY DOING `action="/results"` in form tag | check out [codegrepper](https://www.codegrepper.com/code-examples/javascript/how+to+redirect+a+form+to+another+page+when+we+submitted+a+form+in+react+js)

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
1. Consider changing for loop Sleep Clearance conditional negative to be able to push out the side walls. Maybe `-12`.
1. Remove `plowPointCover` from Plow Point forEach?
1. Include 4:5 ratio in Diagonal configs? If so, how? New file for square and 4:5?
1. Double check why configAngles differ for Hex Diamond from Diamond?
1. Ask Geek37 to double check my Miners Tent equations since it has 3D geometry.
1. `sleepClr` has to be calulated using the inner diagonal (Make a note) for a config or two
1. Make it pretty: Choice images, 33 Inkscape graphics, and fantastic Tailwind cards
1. **CommonForLoop.js**: Looks like I don't know how to add the nested for loop into a function, export it, and then use it - got two empty arrays first time, then errors after that: DELETED
1. added Config.js as a ES6 class

**MAIN TO-DO**: Get onSubmit and onChange to work and output EVERYTHING!

## WHAT IS NOSCRIPT

- WTF is `You need to enable JavaScript to run this app` - how?
- https://www.upbeatcode.com/react/solved-you-need-to-enable-javascript-to-run-this-app/

## Contributing

...later

## License

...later
