import { useState } from "react";

function App() {

  return (
    <>
      <div className="w-full h-screen flex flex-row justify-center items-center gap-10">
        <div className="flex flex-col">
          <input type="text" className="border-2 border-lime-600 px-6 py-2 rounded-md outline-none" placeholder="Enter value..."></input>
          <select >
            <option value="km">km</option>
            <option value="ha">ha</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
        </div>
        <div className="flex flex-col">
          <button type="" className="px-6 py-2 bg-lime-600 rounded-md text-white">Convert</button>
        </div>
        <div className="flex flex-col">
          <input type="text" className="border-2 border-lime-600 px-6 py-2 rounded-md outline-none" placeholder="Enter value..."></input>
          <select default="km">
          <option value="km">km</option>
            <option value="ha">ha</option>
            <option value="dam">dam</option>
            <option value="m">m</option>
            <option value="dm">dm</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default App;