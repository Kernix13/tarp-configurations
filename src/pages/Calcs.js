import React from "react";

function Calcs() {
  return (
    <div>
      <h1>Calculations used in the JavaScript</h1>
      <h2>Lean-To calculations</h2>
      <p>Common to all Lean-To configs:</p>
      <ul className="list-disc ml-4">
        <li>
          <span className="italic">angle</span> ranges from 30-50-degrees (optimized in a for loop).
        </li>
        <li>
          <span className="font-semibold">Sleep Clearance</span> = tarp length - height.
        </li>
        <li>
          <span className="font-semibold">Sit Height</span> = height / 2
        </li>
        <li>
          <span className="font-semibold">Sit Depth</span> = (height * 7 ) / 32
        </li>
        <li>
          <span className="font-semibold">Sit Cover</span> = Overhead Cover - (Sit Depth + 3)
        </li>
        <li>
          <span className="font-semibold">Sit Cover Tarp Height</span> = tan(angle) * Sit Cover
        </li>
        <li>
          <span className="font-semibold">Sitting Clearance</span> = Sit Cover Tarp Height - Sit Height
        </li>
        <li>
          <span className="font-semibold">Chair Cover</span> = Overhead Cover - (Chair Depth + 3)
        </li>
        <li>
          <span className="font-semibold">Chair Cover Tarp Height</span> = tan(angle) * Chair Cover
        </li>
        <li>
          <span className="font-semibold">Chair Sit Clearance</span> = Chair Cover Tarp Height - Sit Height
        </li>
      </ul>
      <ul className="list-disc mt-4 ml-4">
        {/* These need to be in a map() function */}
        <h3>Lean-To</h3>
        <li>
          <span className="font-semibold">Ridge Height</span> = sin(angle) * tarp width.
        </li>
        <li>
          <span className="font-semibold">Overhead Cover</span> = cos(angle) * tarp width
        </li>
      </ul>
    </div>
  );
}

export default Calcs;
