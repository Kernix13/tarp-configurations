# Tarp Configurations Project

My 3rd portfolio project using React and Tailwind.

This React app that calculates the ridgeline height for a user-supplied body dimensions and tarp size for 33 different tarp configurations based on 21 types of tarp shelters.

This application would be of interest to bushcrafters, wilderness survivalists, backpackers and campers.

This is another project for myself since I practice bushcraft and wilderness survival techniques.

## Features

1. For the time being I have a `Calcs` page which shows all the calculations for the tarp configurations. I may remove that page if it doesn't make sense to have it.
2. The `Results` page lists the ridgeline height, resulting lean angle for each tarp design that fits your height. It also cclulates whether or not you have room to sit on the ground and in your chair under the tarp.
3. The `Configs` page has information on each configuration like the number of tie points you need and where you need to fold your tarp.

## To-Do Items

DONE:

1. focus height field on clear (DONE) - useRef and useEffect - cleanup?
1. useNavigate to go back to `/results` - (DONE)
1. all config files that substracts a value from a state variable (DONE)

STILL LEFTT TO DO:

1. double check my config files jsx calcs: all good until 1) arrowhead angle text, 2) plow point angle text, 3) adirondack all messed up
1. redo Lavvu png, hex diamond png,
1. ConfigLT is better but lost li tags and use an icon of some sort - checkmark?
1. Calculate diagonal `sleepClr` for Lean-To and A-Frame categories, and Bakers - still need to do Miners and SWLT (?) STOPPED
1. How to have config png go to the edges?
1. output userDims at top of results page
1. results cards - diff color for configName in each category
1. button colors need to change
1. the error from `npm run build` - `noscript` and `You need to enable JavaScript to run this app`
1. useEffect **cleanup!!!** - yes, stop the focus when you are on another page? https://dmitripavlutin.com/react-useref-guide/ -
1. SHIT - a page reload loses state and therefore configs content - `localStorage`?
1. if user does not enter other fields, then calculate them and make a note to the user maybe - ned async/await, see notes in App.js
1. Double check the 2 angles for all Side-Wall LT and Holden Tent configs.
1. Double check Miners tent constants since it has 3D geometry (Geek37).
1. Consider changing Sleep Clearance conditional to negative to be able to push out the side walls for Adirondack, SWLT, Bakers & Holden, maybe `-12`.
1. Consider adding Half-Pyramid and Forest Tent into A-Frame category, and Trapezoid and Tetra into Tents. Which means I need to add 1-2 more in Lean-To (Envelope?) and Diagonal (Octagon? Forrester?)
1. no DaisyUI clsses?
1. added Config.js as a ES6 class - why?

## Contributing

...later

## License

...later
