import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Produced", 11],
  ["Improvements", 2],
  ["Replacements", 2],
  ["Innovation", 3],
  ["Sold", 8], // CSS-style declaration
];

export const options = {
  title: "Product Activities",
  pieHole: 0.4,
  is3D: false,
};

const PieChart = () => {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
};

export default PieChart;
