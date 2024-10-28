import React from 'react';
import BrotherSpecial from '../BrotherSpecial/BrotherSpecial';

// const Brother = ({money}) => {
const Brother = () => {
    return (
        <div className="text-2xl text-center my-5 p-10 border-green-500 border-2 rounded">
      {/* <h1>
        This is Brother {money}
      </h1>
      <BrotherSpecial money={money}></BrotherSpecial> */}
      <h1>
        This is Brother 
      </h1>
      <BrotherSpecial></BrotherSpecial>
    </div>
    );
};

export default Brother;