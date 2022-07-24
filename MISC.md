# Traversy Feedback app

- make a new branch and try just state
- lessons 10 Dynamic values, 11 jsx conditionals, 12 component & props, 14 state and useState,

```
git checkout -b form/basics
git push --set-upstream origin branch_name
<!-- or -->
git checkout master
git merge form/basics
```

Not sure but in a file do:

```jsx
const loading = true;
if (loading) return <h1>Loading...</h1>;
// then set it to false or try:
if (state.height === "") {
  return null; // or
  <p>Need your body measurements to output config data</p>;
} else {
  // the entire return
}
```

With a ternary it's `{condition ? something : null}` but you can also do `{condition && something}`

```jsx
{state.height !== "" && (
  return (
    <div>
      <div>
        <p className="mb-3">If you do not see any configurations under any of the category types, then the tarp you chose is too small for those configurations.</p>
        <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">Lean-To Configurations</h2>
        <Config_LT />
        <Config_FR />
        <Config_FR_CFly />
        <Config_BWFR />
      </div>
      <div>
        <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">A-Frame Configurations</h2>
        <Config_AF />
        <Config_SWAF />
        <Config_OS />
        <Config_TT />
        <Config_AF_CFly />
      </div>
      <div>
        <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">Diagonal Configurations</h2>
        <Config_Dia />
        <Config_HexDia />
        <Config_Arrowhead />
        <Config_PP />
        <Config_Adir />
      </div>
      <div>
        <h2 className="text-3xl m-6 text-gray-500 text-center sm:text-4xl">Tent Configurations</h2>
        <Config_SWLT />
        <Config_Lavvu />
        <Config_Miners />
        <Config_Bakers />
      </div>
    </div>
  );
)}
// or in ConfigAF.js:
{finalObj[0][2].sleepDiagClr <= 0 && <p className="mb-3">Your tarp is too small for these configurations.</p>}
// above return do
const tooSmallMsg = (
  <p className="mb-3">Your tarp is too small for these configurations.</p>
)
// then
{finalObj[0][2].sleepDiagClr <= 0 && tooSmallMsg}
```

## State

component level state: associated with that one component:

```jsx
// Global/App level state - should go into App.js
const [height, setHeight] = useState("");
const [bodyWidth, setBodyWidth] = useState("");
const [chairHeight, setChairHeight] = useState("");
const [chairDepth, setChairDepth] = useState("");
const [tarpLength, setTarpLength] = useState("");
const [tarpWidth, setTarpWidth] = useState("");
// Should the below be in state or stored somewhere else?
const deg2Rad = Math.PI / 180;
const sitHeight = state.height / 2;
const userTarp = [state.tarpLength, state.tarpWidth];
const sitDepth = (state.height * 7) / 32;
// These 3 can be used if the user does not enter values - async/await?
const bodyWidth = state.height * (5 / 16);
const chairHeight = (state.height * 5) / 8;
const chairDepth = (state.height * 13) / 32;
// and maybe:
let outputObj = [];
let finalObj = [];
let cover = 0;
// Component state: maybe the files for Configs.js and Calcs.js, how about
const [formValues, setFormValues] = useState({
  height: "",
  bodyWidth: "",
  chairHeight: "",
  chairDepth: "",
  tarpLength: "",
  tarpWidth: "",
  buttonText: "Submit"
});
```

app/global level state: gets passed down to any component that needs it -

STOPPED ON LESSON 15 - REMEMBER i AM IN A NEW BRANCH `git branch` and `git checkout form/basics`

## Forms

- LOOKS GOOD: https://adityatyagi.com/index.php/2022/02/04/a-guide-to-working-with-forms-and-input-fields-in-react/
- LOOKS GOOD: https://betterprogramming.pub/you-dont-need-all-that-react-state-in-your-forms-a2c38b8e21d5
- https://dmitripavlutin.com/react-forms-tutorial/
- https://bobbyhadz.com/blog/react-get-form-input-value-on-submit
- https://thewebdev.info/2020/04/29/how-to-add-a-react-input-with-a-required-attribute/
- https://engineering.udacity.com/mastering-the-art-of-forms-in-react-1bd65fb664d7

### useRef

- Traversy lessons 70-74, 98,
- Schiff lesson 66

### useNavigate

- Schiff: 38 – view single post screen - React browser is managing the browser history for us – and it has a Fx where we can navigate to route/url called useNavigate – but we need to redirect to the id of the newly created post - AND 55 – quick attention... import from react-router-dom
- 39 – flash messages

```jsx
// Home page
import React, { useContext, useState } from "react";
import TarpContext from "../TarpContext";

function Home() {
  const state = useContext(TarpContext);

  const [height, setHeight] = useState("");
  const [bodyWidth, setBodyWidth] = useState("");
  const [chairHeight, setChairHeight] = useState("");
  const [chairDepth, setChairDepth] = useState("");
  const [tarpLength, setTarpLength] = useState("");
  const [tarpWidth, setTarpWidth] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (height === "" || bodyWidth === "" || chairHeight === "" || chairDepth === "" || tarpLength === "" || tarpWidth === "") {
      alert("Please fill out ALL the fields");
    } else {
      setHeight("");
      setBodyWidth("");
      setChairHeight("");
      setChairDepth("");
      setTarpLength("");
      setTarpWidth("");
      console.log(height, bodyWidth, chairHeight, chairDepth, tarpLength, tarpWidth);
    }
  };

  return (
    <div className="none">
      <h1 className="text-3xl mb-6 text-gray-500 text-center sm:text-5xl">
        Tarp Configuration <span className="italic">Calculator</span>
      </h1>
      <div className="flex flex-col sm:flex-row">
        <form onSubmit={handleSubmit} id="user-form" className="shadow-lg shadow-slate-400 basis-5/12 bg-gradient-to-br from-slate-100 to-slate-400 p-4 xl:basis-5/12">
          <div className="flex flex-col justify-center lg:flex-row md:justify-between">
            <div className="user-dims flex flex-col">
              <label className="text-black text-base" htmlFor="height">
                Height in inches (in.):
              </label>
              <input type="number" className="border-solid border-2 border-slate-400 pl-2 w-40 mb-4 mt-1 placeholder:text-slate-500" placeholder="Your height" value={height} onChange={e => setHeight(e.target.value)} />
            </div>
            <div className="user-dims flex flex-col">
              <label className="text-black text-base" htmlFor="body-width">
                Body width (in.):{" "}
              </label>
              <input type="number" className="border-solid border-2 border-slate-400 pl-2 w-40 mb-4 mt-1 placeholder:text-slate-500" placeholder="Shoulders or hips" value={bodyWidth} onChange={e => setBodyWidth(e.target.value)} />
            </div>
          </div>
          <div className="flex flex-col justify-center lg:flex-row md:justify-between">
            <div className="user-dims flex flex-col">
              <label className="text-black text-base" htmlFor="chair-height">
                Chair sit height (in.):
              </label>
              <input type="number" className="border-solid border-2 border-slate-400 pl-2 w-40 mb-4 mt-1 placeholder:text-slate-500" placeholder="Height in chair" value={chairHeight} onChange={e => setChairHeight(e.target.value)} />
            </div>
            <div className="user-dims flex flex-col">
              <label className="text-black text-base" htmlFor="chair-depth">
                Chair sit depth (in.):{" "}
              </label>
              <input type="number" className="border-solid border-2 border-slate-400 pl-2 w-40 mb-4 mt-1 placeholder:text-slate-500" placeholder="Chair depth" value={chairDepth} onChange={e => setChairDepth(e.target.value)} />
            </div>
          </div>
          <div className="flex flex-col justify-center lg:flex-row md:justify-between">
            <div className="user-dims flex flex-col">
              <label className="text-black text-base" htmlFor="tarp-length">
                Tarp Length (ft.):
              </label>
              <input type="number" className="border-solid border-2 border-slate-400 pl-2 w-40 mb-2 mt-1 placeholder:text-slate-500" placeholder="Short side in feet" value={tarpLength} onChange={e => setTarpLength(e.target.value)} />
            </div>
            <div className="user-dims flex flex-col">
              <label className="text-black text-base" htmlFor="tarp-width">
                Tarp Width (ft.):
              </label>
              <input type="number" className="border-solid border-2 border-slate-400 pl-2 w-40 mb-2 mt-1 placeholder:text-slate-500" placeholder="Long side in feet" value={tarpWidth} onChange={e => setTarpWidth(e.target.value)} />
            </div>
          </div>
          {/* 
          <div className="user-dims flex flex-col">
            <label htmlFor="tarp-size">Select tarp size: </label>
            <select id="tarp-select" className="form-select border border-info w-28 mb-4 mt-2" aria-label="Default select example">
              <option value="0" defaultValue={"All"}>
                All
              </option>
              <optgroup label="1:2 ratio">
                <option value="1">6 x 12</option>
                <option value="2">7 x 14</option>
                <option value="3">8 x 16</option>
                <option value="4">10 x 20</option>
              </optgroup>
              <optgroup label="3:5 ratio">
                <option value="5">6 x 10</option>
                <option value="6">9 x 15</option>
                <option value="7">12 x 20</option>
              </optgroup>
              <optgroup label="2:3 ratio">
                <option value="8">6 x 9</option>
                <option value="9">8 x 12</option>
                <option value="10">10 x 15</option>
                <option value="11">12 x 18</option>
              </optgroup>
              <optgroup label="3:4 ratio">
                <option value="12">6 x 8</option>
                <option value="13">9 x 12</option>
                <option value="14">12 x 16</option>
              </optgroup>
              <optgroup label="4:5 ratio">
                <option value="15">4 x 5</option>
                <option value="16">8 x 10</option>
                <option value="17">12 x 15</option>
                <option value="18">16 x 20</option>
              </optgroup>
              <optgroup label="Odd">
                <option value="19">5 x 7</option>
                <option value="20">7 x 9</option>
                <option value="21">7 x 10</option>
                <option value="22">10 x 12</option>
                <option value="23">10 x 13</option>
                <option value="24">10 x 14</option>
              </optgroup>
              <optgroup label="1:1 ratio">
                <option value="25">5 x 5</option>
                <option value="26">6 x 6</option>
                <option value="27">7 x 7</option>
                <option value="28">8 x 8</option>
                <option value="29">9 x 9</option>
                <option value="30">10 x 10</option>
                <option value="31">12 x 12</option>
                <option value="32">15 x 15</option>
              </optgroup>
            </select>
          </div>
           */}
          <div>
            <button id="user-submit" type="submit" className="bg-transparent hover:bg-cyan-700 text-cyan-700 font-semibold hover:text-white py-2 px-4 mr-4 border border-cyan-700 hover:border-transparent rounded">
              Submit
            </button>
            {height !== "" && (
              <button id="user-clear" type="submit" className="bg-transparent hover:bg-cyan-700 text-cyan-700 font-semibold hover:text-white py-2 px-4 mr-4 border border-cyan-700 hover:border-transparent rounded">
                Won't Clear
              </button>
            )}
          </div>
        </form>
        <div className="basis-8/12 px-2 ml-4 xl:basis-7/12">
          <p className="mb-3">Enter your dimensions in inches in the form to get the ridgeline height in inches to use for the 33 tarp configurations for all the tarp sizes in the list. Or select a specific tarp size to see the configurations where you can at least sit on the ground with clearance between your head and the tarp.</p>
          <ul className="list-disc mt-4 ml-4">
            <li>Body width: measure the widest part of your body in inches.</li>
            <li>Chair sitting height: measure how high your head is when sitting in your camp chair.</li>
            <li>Chair sitting depth: measure from where your head is while sitting to the the part of your body that sticks out from the chair(your knees or feet).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
// export default React.memo(Home);
```

### useRef

- used it with `useEffect` to add focus to the height field - https://bosctechlabs.com/set-focus-on-input-field-after-rendering-react/ and https://bobbyhadz.com/blog/react-focus-input-on-element - searched for "how to focus an input field in react"

## Alerts

- react-toastify in TRaversy 10) user profile & alerts or Schiff's context alerts?
- or should I just create my own?
