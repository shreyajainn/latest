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
        modes = [num];
      } else if (frequencyMap[num] === maxFrequency) {
        modes.push(num);
      }
    });

  //same frequency
    if (modes.length === Object.keys(frequencyMap).length) {
      return 'No mode';
    }
  
    return modes;
  }
  var result = calculateMode(data);
  if(result != "No mode")
  setFinalResult(parseFloat(result).toFixed(3))
  else
  setFinalResult("No mode")
},[])
  return (<div >{finalResult} </div>);
}
