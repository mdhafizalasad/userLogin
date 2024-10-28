import React, { createContext } from "react";
import Father from "./Father/Father";
import Uncle from "./Uncle/Uncle";
import Fufi from "./Fufi/Fufi";


export const MoneyContext = createContext(50);
 
const Home = () => {


  const money = 5000;

  return (
    <div className=" my-5 p-10 border-green-500 border-2 rounded">
      <h1 className="text-4xl text-center">
        This is Grand Father House {money}
      </h1>
      <div className="flex justify-between">
        <MoneyContext.Provider value={money}>
          {/* <Father money={money}></Father> */}
          <Father></Father>
          <Uncle></Uncle>
          <Fufi></Fufi>
        </MoneyContext.Provider>

      </div>
    </div>
  );
};

export default Home;
