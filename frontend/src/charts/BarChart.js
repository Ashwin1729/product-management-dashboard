import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
  ["2018", 200, 400, 200],
  ["2019", 670, 260, 550],
  ["2020", 460, 920, 350],
  ["2021", 1000, 340, 650],
  ["2022", 1230, 340, 750],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
  colors: ["rgb(53, 138, 148)", "rgb(37, 11, 165)", "#188310"],
};

const BarChart = () => {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
};

export default BarChart;
