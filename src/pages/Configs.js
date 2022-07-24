import AllConfigs from "../data/AllConfigs";
import ConfigTypes from "../data/ConfigTypes";

function Configs() {
  const categories = ["Lean-To", " A-Frame", " Diagonal", " Tent"];

  return (
    <div>
      <h1 className="text-5xl mb-6 text-gray-500 text-center">Configurations In Detail</h1>
      <p>
        All <span className="italic">practical</span> tarp configurations fall into 1 of 4 categories: 1. <span className="text-lg font-semibold">{categories[0]}</span>, 2. <span className="text-lg font-semibold">{categories[1]}</span>, 3. <span className="text-lg font-semibold">{categories[2]}</span>, or 4. <span className="text-lg font-semibold">{categories[3]}</span>. There are 33 total tarp variations on this page for the following 21 types:
      </p>

      <div className="grid grid-cols-2 gap-4 justify-items-center items-start md:grid-cols-4">
        <div>
          <p className="text-2xl mt-6 mb-4 text-gray-500">Lean-To</p>
          <ol className="list-decimal mt-4 ml-4">
            {ConfigTypes[0].map((type, index) => (
              <li key={index}>
                <a href={`#` + type[1]} className="text-blue-500 hover:underline hover:underline-offset-2 hover:text-blue-700">
                  {type[0]}
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="text-2xl mt-6 mb-4 text-gray-500">A-Frame</p>
          <ol className="list-decimal mt-4 ml-4">
            {ConfigTypes[1].map((type, index) => (
              <li key={index}>
                <a href={`#` + type[1]} className="text-blue-500 hover:underline hover:underline-offset-2 hover:text-blue-700">
                  {type[0]}
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="text-2xl mt-6 mb-4 text-gray-500">Diagonal</p>
          <ol className="list-decimal mt-4 ml-4">
            {ConfigTypes[2].map((type, index) => (
              <li key={index}>
                <a href={`#` + type[1]} className="text-blue-500 hover:underline hover:underline-offset-2 hover:text-blue-700">
                  {type[0]}
                </a>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="text-2xl mt-6 mb-4 text-gray-500">Tent</p>
          <ol className="list-decimal mt-4 ml-4">
            {ConfigTypes[3].map((type, index) => (
              <li key={index}>
                <a href={`#` + type[1]} className="text-blue-500 hover:underline hover:underline-offset-2 hover:text-blue-700">
                  {type[0]}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <h2 className="text-3xl mt-8">Home page form fields explained</h2>
      <ul className="list-disc mt-4 ml-4">
        <h3 className="font-bold mb-2">Height</h3>
        <li>
          Your <span className="font-bold">height</span> is used for all configurations to find the smallest tarp size that will cover your body. A tarps' length must be at least 4 inches greater than your height for sleeping reasons.
        </li>
        <li>
          Height is also used to calculate your <span className="font-bold">sitting height</span> <span className="italic">(half of your height)</span> which is the main value to calculate the <strong>ridgeline height</strong> for the tarp. The calculated ridgeline height determines the main tarp <em>angle(s)</em>.
        </li>
        <h3 className="font-bold mb-2 mt-4">Body Width</h3>
        <li>
          For a few tarp configurations <strong>body width</strong> is important because the area covered by the tarp is so small. The widest part of your body is used to determine if a tarp size is large enough to cover you (minimum of 12" greater than body width).
        </li>
        <li>For men the widest body part is usually the shoulders, while for women it tends to be the hips.</li>
        <h3 className="font-bold mb-2 mt-4">Chair Sitting Height and Depth</h3>
        <li>
          Your <strong>chair sitting height</strong> and <strong>chair sitting depth</strong> is used to calculate whether or not you can use a chair under the tarp.
        </li>
        <li>For chair sitting height just measure the height of where the top of your head is while sitting in your chair.</li>
        <li>Chair sitting depth should be measured from the center of your body (your head) to whatever part of your body sticks out past your chair (your knees or feet).</li>
      </ul>
      <h3 className="text-2xl mb-2 mt-5">Miscellaneous Notes</h3>
      <p className="my-3">For rectagle tarps, the short side is used as the length, the long side as the width. For example, an 8' x 10' tarp has a length of 8 feet, and a width of 10 feet.</p>
      <p className="my-3">
        <span className="font-bold">Ridgeline heights</span> (the most important calculation) are calculated at the point where the sitting height is at least 3-4 inches below the tarp, or else that tarp size is not returned as viable. You may either raise the ridgeline or opt not to stake your tarp at ground level if sitting conditions are "<em>tight</em>".
      </p>
      <p className="mb-3">
        For almost every configuration on this page, an alternate ridgeline height is calculated for large tarps. In that case the ridgeline height is set to <span className="italic font-bold">your height.</span>.
      </p>
      <p className="mb-3">Also, some configurations require either more than 1 ridgeline or 1 ridgeline and poles. It's up to you what combination of poles and ridgelines you want to use but if you do not have tie-out points where required then you will need an additional ridgeline or two. The configurations below uses poles where additional ridgelines are required.</p>

      <h2 id="lean-to-configuration" className="text-3xl mt-12 mb-4 text-gray-500 text-center">
        <span className="font-bold">Lean-To</span> Configurations
      </h2>
      <p className="mb-3">The configs in this section are variations of the standard Lean-To set-up. All configurations ("configs") in this category:</p>

      <ul className="list-disc ml-4 mt-2 mb-6">
        <li>
          Are calculated with a <em>lean</em> between 30 and 50-degrees.
        </li>
        <li>They can all use either square or rectagular tarps.</li>
      </ul>

      <h3 id="lean-to" className="text-2xl mb-4 text-gray-500 font-semibold">
        Lean-To
      </h3>
      <p className="mb-3">The Lean-To is the most common tarp configuartion and if it serves your purpose, then there is no reason to try a different tarp set-up. However, sometimes a simple Lean-To doesn't provide the shelter you need given the size of your tarp and/or the weather conditions and climate.</p>
      <h3 id="flatroof-lt" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Flat-Roof Lean-To
      </h3>
      <p className="mb-3">This is a great config for large tarps and the 2nd most common lean-to. There are 3 variations requiring poles for the start of the roof: 1) the flat fold at the halfway point (50%), 2) the flat fold at the 2/3rds mark (66%), and 3) the fold at the 3/4 point (75%). Run your guylines towards the back corners.</p>
      <h3 id="flat-roof-cfly" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Flat Roof C-Fly
      </h3>
      <p className="mb-3">This is also called an Open Tube tent and is basically a Flat-Roof Lean-To with a floor. It's a good way to open the shelter up for air-flow and scenery.</p>
      <h3 id="backwall-lt" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Back-Wall Lean-To
      </h3>
      <p className="mb-3">This config is the opposite of a Flat Roof Lean-To: a vertical wall into the lean vs. the lean into a horizontal roof. The back-wall folds occur at the bottom 1/4 or 1/3 points of the tarp. This design gets you to a sitting height faster than other configs. Run your guylines to the back of the shelter.</p>

      <h3 id="bwfr-lt" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Back-Wall Flat-Roof Lean-To (BWFRLT)
      </h3>
      <p className="mb-3">A Back-Wall / Flat-Roof combination. You need a large tarp for this design since the 'lean' is only 1/3 or 1/2 the width of your tarp There are 2 variations: 1) the folds at the 1/4 and 3/4 points, or 2) the folds at the 1/3 and 2/3 points. Run the guylines of each side towards the back of the shelter.</p>

      <p className="mb-6">Here are the details of the types listed above:</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* lose the index # - I need to output notes */}
        {AllConfigs[0].map((config, i) => (
          <div key={i} className="border border-solid border-orange-400 bg-purple-50">
            <div className="border border-solid border-slate-400">CONFIG IMAGE GOES HERE</div>
            <div className="p-2">
              <h4 id="lean-to" className="text-2xl my-2 text-gray-500">
                {config.name}
              </h4>
              <p className="mb-3">{config.notes}</p>
              <p>{config.ridgelines !== 1 ? `Ridgelines: ` + config.ridgelines : null}</p>
              <p className="mb-3">
                <span className="font-bold">Tie points</span>: A minimum of {config.tiePoints.guylines !== 0 ? config.tiePoints.guylines + ` guylines, ` : null}
                {config.poles !== 0 ? config.poles + ` poles and pole tarp ties, ` : null} {config.tiePoints.stakes} stakes, and {config.tiePoints.ridgeline} ridgeline ties.
              </p>
              <p className="mb-3">
                <span className="font-bold">Tarp fold(s)</span>: <span>{config.foldPoints}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 id="aframe-configuration" className="text-3xl mt-12 mb-4 text-gray-500 text-center">
        <span className="font-bold">A-Frame</span> Configurations
      </h2>
      <p className="mb-3">The classic "pup" tent is another name for the A-Frame set-up.</p>

      <ul className="list-disc ml-4 mt-2 mb-8">
        <li>
          The first 3 configs are calculated with an A-Frame <em>lean</em> between 37 and 75-degrees.
        </li>
        <li>The A-Frame can use a square or rectangular tape, the Tube tent requires a 1:2 ratio rectangle tarp, the rest can use any ratio rectangle tarps.</li>
      </ul>

      <h3 id="aframe" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        A-Frame
      </h3>
      <p className="mb-3">This is the old-timey boy scout or infantry tent you would see in movies or paintings. It provides excellent cover in bad conditions but the max height is cut in half due to the fold at the center of the tarp.</p>
      <h3 id="aframe-lt" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        A-Frame Lean-To
      </h3>
      <p className="mb-3">This is similar to a Flat-Roof except the roof is at an angle resembling an A-Frame config. Note that the opposite lean at the ridgleline which may obstruct your view. Fold the tarp at either 1) the 2/3rds or 2) the 3/4ths point of the tarp.</p>
      <h3 id="sidewall-af" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Side-Wall A-Frame
      </h3>
      <p>The side walls for this design make it easier to sit inside the tarp during rain but wall-to-wall space is reduced. This is similar to the Open Stall in the Lean-To category. There are 2 variations: 1) wall height of 25% of the tarp, or 2) the walls at 33%.</p>
      <h3 id="tube-tent" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Tube Tent
      </h3>
      <p className="mb-3">This config requires folds at the 1/3 and 2/3rd points so you will need a tarp with tie-outs at the 1/3 point for staking to the ground, and at 2/3rds for the ridgeline. It's a config with a floor and could be in the tent category as well.</p>
      <h3 id="aframe-cfly" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        A-Frame C-Fly
      </h3>
      <p className="mb-3">This is similar to the Flat Roof C-Fly but the roof is pitched at an angle. That reduces visibility but may be prefable for rain or harsh sunlight.</p>
      <h3 id="open-stall" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Open Stall
      </h3>
      <p className="mb-3">You can look at this design as either an A-Frame Lean-To with a back-wall or a BWFRLT with the "roof" at an angle. The 2nd lean for this design, and for the A-Frame Lean-To designs, are set to the first lean angle. Vary that 2nd angle to whatever you want. Run your backwall guylines straight back.</p>
      <p className="mb-6">Here are the details of the types listed above:</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* lose the index # - I need to output notes */}
        {AllConfigs[1].map((config, i) => (
          <div key={i} className="border border-solid border-orange-400 bg-sky-50">
            <div className="border border-solid border-slate-400">CONFIG IMAGE GOES HERE</div>
            <div className="p-2">
              <h4 id="lean-to" className="text-2xl my-2 text-gray-500">
                {config.name}
              </h4>
              <p className="mb-3">{config.notes}</p>
              <p>{config.ridgelines !== 1 ? `Ridgelines: ` + config.ridgelines : null}</p>
              <p className="mb-3">
                <span className="font-bold">Tie points</span>: A minimum of {config.tiePoints.guylines !== 0 ? config.tiePoints.guylines + ` guylines, ` : null}
                {config.poles !== 0 ? config.poles + ` poles and pole tarp ties, ` : null} {config.tiePoints.stakes} stakes, and {config.tiePoints.ridgeline} ridgeline ties.
              </p>
              <p className="mb-3">
                <span className="font-bold">Tarp fold(s)</span>: <span>{config.foldPoints}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 id="diagonal-configuration" className="text-3xl mt-12 mb-4 text-gray-500 text-center">
        <span className="font-bold">Diagonal</span> Configurations
      </h2>
      <p className="mb-3">All diagonal tarp configurations require a square tarp, or a length-to-width ratio of 1:1, although you may be able to use a 4:5 ratio tarp like an 8' x 10'. The benefit of diagonal configs is the increase length you gain from the diagonal axis. The angles vary for these set-ups.</p>
      <p className="mb-3">
        <span className="font-bold">Note</span>: The Diamond and Plow Point are straight-forward set-ups. The other 3 are more involved. Unless you are feeling adventurous, just stick with the 1st two configs.
      </p>
      <h3 id="diamond" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Diamond
      </h3>
      <p className="mb-3">The Diamond configuration is typically used with hammock camping and is one of my favorite setups. You have a lot of leeway when it comes to the ridgeline height. The angles can vary between 45 and 75-degrees for the side wings. Think of a Diamond as a diagonal A-Frame.</p>
      <h3 id="plow-point" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Plow Point
      </h3>
      <p className="mb-3">The Plow Point is in my top three favorite configs after Lean-To and Diamond and is excellent for bad weather conditions, just make sure to face the opening away from the wind. The plow point ridgeline is calculated with a lean angle of 33-degrees, though you can vary that as you need. Think of this design as a Diamond resting on one end.</p>
      <h3 id="adirondack" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Adirondack
      </h3>
      <p className="mb-3">I consider the Adirondack as a picnic type configuration. Use this tarp setup for a day trip but the coverage is lacking unless you have a large tarp. You loose too much real estate by folding 3 of the 4 corners.</p>
      <h3 id="hex-diamond" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Hex Diamond
      </h3>
      <p className="mb-3">The Hex-Diamond is a Diamond config but with the corners of the wings folded inward and staked to the ground. I suppose that would be good for keeping electronics dry. The folds at the wings can be wherever you want, but the larger they are, the lower the height.</p>
      <h3 id="arrowhead" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        ArrowHead Wedge
      </h3>
      <p className="mb-3">This is a variation of the Plow Point. You can use a guyline to pull the front flap out, or use a ridgeline in the opposite direction to let it droop over. The recomendation is to set the guyline to slightly above your head. Fold from the midpoint on both sides back to the diagonal point. Those folds are your sides which you can prop up with poles if the front diagonal point is on a guyline, or tie to the ridgeline. The lean angle is 30-degrees for this config.</p>
      <p className="mb-6">Here are the details of the types listed above:</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* lose the index # - I need to output notes */}
        {AllConfigs[2].map((config, i) => (
          <div key={i} className="border border-solid border-orange-400 bg-slate-100">
            <div className="border border-solid border-slate-400">CONFIG IMAGE GOES HERE</div>
            <div className="p-2">
              <h4 id="lean-to" className="text-2xl my-2 text-gray-500">
                {config.name}
              </h4>
              <p className="mb-3">{config.notes}</p>
              <p>{config.ridgelines !== 1 ? `Ridgelines: ` + config.ridgelines : null}</p>
              <p className="mb-3">
                <span className="font-bold">Tie points</span>: A minimum of {config.tiePoints.guylines !== 0 ? config.tiePoints.guylines + ` guylines, ` : null}
                {config.poles !== 0 ? config.poles + ` poles and pole tarp ties, ` : null} {config.tiePoints.stakes} stakes, and {config.tiePoints.ridgeline} ridgeline ties.
              </p>
              <p className="mb-3">
                <span className="font-bold">Tarp fold(s)</span>: <span>{config.foldPoints}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 id="tent-configuration" className="text-3xl mt-12 mb-4 text-gray-500 text-center">
        <span className="font-bold">Tent</span> Configurations
      </h2>
      <p className="mb-3">My rule for a tarp tent is that 4+ "points" of cover are required. That means the roof plus 3 walls, and preferably a portion of the 4th wall. Given that definition, the Plow Point and Tube Tent set-ups from above would also fit into this category.</p>
      <h3 id="sidewall-lt" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Side-Wall Lean-To
      </h3>
      <p className="mb-3">This is a variation of the Bakers Wind Shed (see below) without the corner folds inward into the shelter. There are 3 versions for different tarp ratios: 1) 1:2 ratio, 2) 3:5 ration, and 3) 2:3 ratio. They all need to be folded from the 1/3 and 2/3 points to the back corner.</p>
      <h3 id="holden" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Holden Tent
      </h3>
      <p className="mb-3">This differs from the Side-Wall Lean-To in that you fold from the center point. A 1:2 ratio rectangle tarp would be best for this set-up. You need 1 pole and no ridgeline. There are also configs for 3:5, 2:3, 3:4 and 4:5 ratio tarps.</p>
      <h3 id="miners" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Miners Tent
      </h3>
      <p className="mb-3">This design will require a large 1:2 rectangle tarp and has full coverage: roof and all 4 sides. Add a ground-cloth and your protected from the ground as well. This config only needs a single pole, no ridgeline.</p>
      <h3 id="bakers" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Bakers Wind Shed
      </h3>
      <p className="mb-3">Use either this design or the Side-Wall design for bad weather conditions with your lean-to opening facing away from the wind. The folded corners are similar to the folds in the Hex Diamond set-up and would be good to protect electronics from the ground.</p>
      <h3 id="lavvu" className="text-2xl mt-6 mb-4 text-gray-500 font-semibold">
        Lavvu
      </h3>
      <p className="mb-3">Here is another design that requires a 1:2 rectangle tarp with the long side being at least 3x's you height. This config looks like a Native American tipi, but it is from the Sami people in Northern Europe.</p>
      <p className="mb-6">Here are the details of the types listed above:</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* lose the index # - I need to output notes */}
        {AllConfigs[3].map((config, i) => (
          <div key={i} className="border border-solid border-orange-400 bg-amber-50">
            <div className="border border-solid border-slate-400">CONFIG IMAGE GOES HERE</div>
            <div className="p-2">
              <h4 id="lean-to" className="text-2xl my-2 text-gray-500">
                {config.name}
              </h4>
              <p className="mb-3">{config.notes}</p>
              <p className="mb-3">
                <span className="font-bold">Tie points</span>: A minimum of {config.tiePoints.guylines !== 0 ? config.tiePoints.guylines + ` guylines, ` : null}
                {config.poles === 1 ? `1 pole and 1 pole tarp tie, ` : config.poles > 1 ? config.poles + ` poles and pole tarp ties, ` : null} {config.tiePoints.stakes} stakes{config.tiePoints.ridgeline !== 0 ? `, and ` + config.tiePoints.ridgeline + ` ridgeline ties.` : "."}
              </p>
              <p className="mb-3">
                <span className="font-bold">Tarp fold(s)</span>: <span>{config.foldPoints}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Configs;
