import React, { useEffect, useState } from 'react';

export const Mean = (props) => {
  const {data} = props;
  const [finalResult,setFinalResult] = useState(0);
  useEffect(()=>{
  function calculateMean(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const mean = sum / numbers.length;
    return mean;
  }
  var result = calculateMean(data);
  setFinalResult(parseFloat(result).toFixed(3))
},[])
  return (<div >{finalResult} </div>);
}
