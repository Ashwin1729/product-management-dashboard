import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["City", "2023 Services", "2013 Services"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];

export const options = {
  title: "Products provided at largest U.S. Cities",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Products",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
  colors: ["rgb(53, 138, 148)", "rgb(40, 34, 70)"],
};

const HorizontalBarChart = () => {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="250px"
      data={data}
      options={options}
    />
  );
};

export default HorizontalBarChart;
