import React, { useEffect, useState } from 'react';
import dataService from '../../dataservice';
import { Mean } from '../Mean';
import { Median } from '../Median';
import { Mode } from '../Mode';
import { data } from '../../Wine-Data'
export const Main = () => {
  const [content, setContent] = useState([])
  const [contentGamma, setCotentGamma] = useState([])

  const [columnNames, setColumnNames] = useState([]);
  useEffect(() => {
    // Grouuping data on the basis of class
    const groupedData = data.reduce((acc, item) => {
      const id = item.Alcohol;
      if (!acc[id])
        acc[id] = [];
      else
        acc[id].push(item);
      return acc;
    }, {})

    const keyobject = Object.keys(groupedData)

// filtering and content set up
    keyobject.map((item) => {
      const filteredData = dataService.filterData(data, item);
      const newData = { key: item, value: filteredData };
      setContent(content => [...content, newData])
    })

    // filtering and content set up
    keyobject.map((item) => {
      const filteredData1 = dataService.filterDataGamma(data, item);
      const newData1 = { key: item, value: filteredData1 };
      setCotentGamma(contentGamma => [...contentGamma, newData1])
    })

    setColumnNames(Object.keys(groupedData));
  }, [])

  return (<>
        <table className="table">
          <thead>
            <tr>
              <th>Measure</th>
              {columnNames.map((columnName) => (
                <th key={columnName}>{"Alcohol " + columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Flavanoids Mean</td>
              {content.map((row, rowIndex) => (
                <td key={rowIndex}>
                  <Mean data={row.value} />
                </td>
              ))}
            </tr>
            <tr>
              <td> Flavanoids Median</td>
              {content.map((row, rowIndex) => (
                <td key={rowIndex}>
                  <Median data={row.value} />
                </td>
              ))}
            </tr>
            <tr>
              <td> Flavanoids Mode</td>
              {content.map((row, rowIndex) => (
                <td key={rowIndex}>
                  <Mode data={row.value} />
                </td>
              ))}
            </tr>
          </tbody>
        </table>

<br/>
<br/>
        <table className="table"> 
          <thead>
            <tr>
              <th>Measure</th>
              {columnNames.map((columnName) => (
                <th key={columnName}>{"Gamma " + columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Gamma Mean</td>
              {contentGamma.map((row, rowIndex) => (
                <td key={rowIndex}>
                  <Mean data={row.value} />
                </td>
              ))}
            </tr>
            <tr>
              <td> Gamma Median</td>
              {contentGamma.map((row, rowIndex) => (
                <td key={rowIndex}>
                  <Median data={row.value} />
                </td>
              ))}
            </tr>
            <tr>
              <td> Gamma Mode</td>
              {contentGamma.length > 0 ? contentGamma.map((row, rowIndex) => (
                <td key={rowIndex}>
                  <Mode data={row.value} />
                </td>
              )) : "no mode"}
            </tr>
          </tbody>
        </table>
  </>);
}
