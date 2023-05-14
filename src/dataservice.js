const dataService = {
  // filtering data for Flavanoids
    filterData: (data, filter) => {
      const filteredData = data.filter((item) => item.Alcohol == filter).map((item)=>item.Flavanoids);
      return filteredData;
    },
    // filtering data for Gamma
    filterDataGamma: (data, filter) => {
      const data1= data.map(item=>{return { ...item ,gamma:(item.Ash * item.Hue) / item.Magnesium}})
      const filteredData = data1.filter((item) => item.Alcohol == filter).map((item)=>item.gamma);
      return filteredData;
    },
  };
  
  export default dataService;
  