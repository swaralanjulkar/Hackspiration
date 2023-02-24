import React from "react";
import { Chart } from "react-google-charts";

const options = {
  curveType: "line",
  titleTextStyle: {
    fontSize: 24,
    bold: true,
  },
  hAxis: {
    title: "Month",
    titleTextStyle: {
      fontSize: 18,
      bold: true,
    },
  },
  vAxis: {
    title: "Price",
    titleTextStyle: {
      fontSize: 18,
      bold: true,
    },
  },
  pointSize: 10,
  pointShape: "circle",
  legend: { position: "bottom" },
  colors: ["#FF0000"],
};

function ForecastPlot(props) {
  let val = [["Month", "Price"]];
  for (var i = 0; i < 12; i++) {
    val.push([props.data[0][i][0], props.data[0][i][1]]);
  }
  console.log(props.data[0]);
  console.log("val: " + val);
  return (
    <Chart
      // width={'800px'}
      height={"500px"}
      chartType="LineChart"
      data={val}
      options={options}
      wrapper={{ className: "" }}
      // color={{ "red" }}
      // style={{ marginTop: "10rem" }}
      color={"red"}
      legendToggle
    />
    // <></>
  );
}

export default ForecastPlot;
