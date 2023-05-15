import React, { useEffect, useState } from 'react';

export const Mode = (props) => {
  const {data} = props;
  const [finalResult,setFinalResult] = useState([]);
  useEffect(()=>{
  function calculateMode(numbers) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let modes = [];

  //calculate largest frequency
    numbers.forEach((num) => {
      frequencyMap[num] = frequencyMap[num] ? frequencyMap[num] + 1 : 1;
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        modes = [parseFloat(num).toFixed(3)];
      } else if (frequencyMap[num] === maxFrequency) {
        modes.push(parseFloat(num).toFixed(3));
      }
    });

  //same frequency
    if (modes.length === Object.keys(frequencyMap).length) {
      return modes.join("\n");
    }
    return modes.join("\n");
  }
  var result = calculateMode(data);
  // if(result != "No mode")
  setFinalResult(result)
  // else
  // setFinalResult("No mode")
},[])
  return (<div >{finalResult} </div>);
}
