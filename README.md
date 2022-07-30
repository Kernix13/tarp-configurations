# Tarp Configurations Project

> UPDATING AllConfigs.js: stopped at line 100

My 3rd portfolio project using React and Tailwind.

This React app that calculates the ridgeline height for a user-supplied body dimensions and tarp size for 33 different tarp configurations based on 21 types of tarp shelters.

This application would be of interest to bushcrafters, wilderness survivalists, backpackers and campers.

This is another project for myself since I practice bushcraft and wilderness survival techniques.

## Features

1. The `Results` page lists the ridgeline height, resulting lean angle for each tarp design that fits your height. It also cclulates whether or not you have room to sit on the ground and in your chair under the tarp.
1. The `Configs` page has information on each configuration like the number of tie points you need and where you need to fold your tarp.
<!-- 1. For the time being I have a `Calcs` page which shows all the calculations for the tarp configurations. I may remove that page if it doesn't make sense to have it. -->

## To-Do Items

IMPORTANT TO DO:

1. DOUBLE-CHECK ALL CSS ESPECIALLY CARDS
1. button colors need to change
1. I need additional conditional in the event the user only wants to change the tarp size (Home.js)
1. Why is Lavvu h3 tag displaying twice? in ConfigLavvu.js
1. JS: 1) Back-to-top button, 2) hamburger icon
1. double check my config files jsx calcs: all good until 1) arrowhead angle text, 2) plow point angle text, 3) adirondack all messed up
1. redo Lavvu png
1. Calculate diagonal `sleepClr` for Lean-To (DONE) and A-Frame (DONE) categories, and Bakers and SWLT and maybe Miners
1. the error from `npm run build` - `noscript` and `You need to enable JavaScript to run this app`
1. useEffect **cleanup!!!** - yes, stop the focus when you are on another page? https://dmitripavlutin.com/react-useref-guide/ -
1. SHIT - a page reload loses state and therefore configs content - `localStorage`?
1. if user does not enter `bodyWidth`, `chairHeight` and `chairDpeth` fields, then calculate them and make a note to the user maybe - ned async/await, see notes in App.js
1. Double check the 2 angles for all Side-Wall LT and Holden Tent configs.
1. Double check Miners tent constants since it has 3D geometry (Geek37).
1. The import of all the tarp designs in Configs.js to get the `src` to work - have to find a better way
1. Why doesn't my img src work in Configs.js? My working solution sucks

LESS IMPORTANT TO DO:

1. How to have config png go to the edges?
1. Consider changing Sleep Clearance conditional to negative to be able to push out the side walls for Adirondack, SWLT, Bakers & Holden, maybe `-12`.
1. Consider adding _Half-Pyramid_ and _Forest Tent_ into A-Frame category, and _Trapezoid_ and _Tetra_ into Tents. Which means I need to add 1-2 more in Lean-To (Envelope?) and Diagonal (Octagon? Forrester? Bivi Bag Cornet)
1. no DaisyUI clsses?
1. added Config.js as a ES6 class - why?

## Contributing

...later

## License

...later
