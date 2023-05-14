import React, { useEffect, useState } from 'react';

export const ClassTwo = (props) => {
  const {data} = props;
  const [finalResult,setFinalResult] = useState(0);
  useEffect(()=>{
  function calculateMedian(numbers) {
    const sorted = numbers.slice().sort((a, b) => a - b); // sorting
    const middleIndex = Math.floor(sorted.length / 2);
  
    if (sorted.length % 2 === 0) {
      const median = (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
      return median;
    }
  
    return sorted[middleIndex];
  }
  var result = calculateMedian(data)
  setFinalResult(parseFloat(result).toFixed(3));
},[])
  return (<div >{finalResult}</div>);
}
