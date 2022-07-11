import React, { useState, useContext, useEffect } from "react";
import TarpContext from "../TarpContext";

// components
import LeanToConfig from "../components/LeanToConfig";

function Home() {
  const state = useContext(TarpContext);

  return (
    <div className="none">
      <h1 className="text-4xl mb-6 text-gray-500 text-center sm:text-6xl">Tarp Configuration Calculator</h1>
      {/* <p className="text-xl">Enter the following values in inches:</p> */}
      <div className="flex flex-col sm:flex-row">
        <form id="user-form" className="shadow-lg shadow-slate-400 basis-5/12 bg-gradient-to-br from-slate-100 to-slate-400 p-4 xl:basis-5/12">
          <div className="flex flex-col justify-center lg:flex-row md:justify-between">
            <div className="user-dims flex flex-col">
              <label className="text-black" htmlFor="height">
                Height in inches (in.):{" "}
              </label>
              <input type="number" className="border-solid border-2 border-slate-400 pl-2 w-40 mb-4 mt-2 placeholder:text-slate-500" placeholder="Your height" value={state.height} onChange={e => state.setHeight(e.target.value)} />
            </div>
            <div className="user-dims flex flex-col">
              <label className="text-black" htmlFor="body-width">
                Body width (in.):{" "}
              </label>
              <input type="number" className="border-solid border-2 border-slate-400 pl-2 w-40 mb-4 mt-2 placeholder:text-slate-500" placeholder="Shoulders or hips" value={state.bodyWidth} onChange={e => state.setBodyWidth(e.target.value)} />
            </div>
          </div>
          <div className="flex flex-col justify-center lg:flex-row md:justify-between">
            <div className="user-dims flex flex-col">
              <label className="text-black" htmlFor="chair-height">
                Chair sit height (in.):
              </label>
              <input type="number" className="border-solid border-2 border-slate-400 pl-2 w-40 mb-4 mt-2 placeholder:text-slate-500" placeholder="Height in chair" value={state.chairHeight} onChange={e => state.setChairHeight(e.target.value)} />
            </div>
            <div className="user-dims flex flex-col">
              <label className="text-black" htmlFor="chair-depth">
                Chair sit depth (in.):{" "}
              </label>
              <input type="number" className="border-solid border-2 border-slate-400 pl-2 w-40 mb-4 mt-2 placeholder:text-slate-500" placeholder="Chair depth" value={state.chairDepth} onChange={e => state.setChairDepth(e.target.value)} />
            </div>
          </div>
          <div className="user-dims flex flex-col">
            <label htmlFor="tarp-size">Select tarp size: </label>
            <select id="tarp-select" className="form-select border border-info w-28 mb-4 mt-2" aria-label="Default select example" value={state.tarps} onChange={e => state.setTarps(e.target.value)}>
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
          <div>
            <button id="user-submit" type="submit" className="bg-transparent hover:bg-cyan-700 text-cyan-700 font-semibold hover:text-white py-2 px-4 mr-4 border border-cyan-700 hover:border-transparent rounded">
              Submit
            </button>
            <button id="user-clear" type="submit" className="bg-transparent hover:bg-cyan-700 text-cyan-700 font-semibold hover:text-white py-2 px-4 mr-4 border border-cyan-700 hover:border-transparent rounded">
              Clear
            </button>
          </div>
        </form>
        <div className="basis-8/12 p-2 ml-4 xl:basis-7/12">
          <p className="mb-3">Enter your dimensions in inches in the form to get the ridgeline height in inches to use for the 33 tarp configurations for all the tarp sizes in the list. Or select a specific tarp size to see the configurations where you can at least sit on the ground with clearance between your head and the tarp.</p>
          <ul className="list-disc mt-4 ml-4">
            <li>Body width: measure the widest part of your body in inches.</li>
            <li>Chair sitting height: measure how high your head is when sitting in your camp chair.</li>
            <li>Chair sitting depth: measure from where your head is while sitting to the the part of your body that sticks out from the chair(your knees or feet).</li>
          </ul>
        </div>
      </div>
      <LeanToConfig />
    </div>
  );
}

export default Home;
