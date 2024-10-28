import React from "react";
import Brother from "../Brother/Brother";

// const Father = ({money}) => {
const Father = () => {
  return (
    <div className="text-2xl text-center my-5 p-10 border-green-500 border-2 rounded">
      {/* <h1>
        This is Father {money}
      </h1>
      <Brother money={money}></Brother> */}
      <h1>
        This is Father 
      </h1>
      <Brother></Brother>
    </div>
  );
};

export default Father;
