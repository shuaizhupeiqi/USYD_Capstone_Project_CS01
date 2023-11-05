import React, { useState, useEffect, Component } from "react";
import { withRouter } from "next/router";
import { LanguageHelper } from "../helpers/languageHelper";
import { Space } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ReferenceArea,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import LoadingCard from "./LoadingCard";
import { atom, useRecoilState } from 'recoil';
import {useLanguage} from "../hooks/useLanguage";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const time = payload[0].payload.time;
    const riskValue = payload[0].value;

    // Formatting time
    const formattedTime = time > 12 ? `${time - 12}pm` : `${time}am`;

    // Determine the risk level according to riskValue
    let riskLevel;
    if (riskValue <= 0.25) riskLevel = "Low";
    else if (riskValue <= 0.5) riskLevel = "Moderate";
    else if (riskValue <= 0.75) riskLevel = "High";
    else riskLevel = "Extreme";

    return (
      <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '5px', border: '1px solid black' }}>
        <p className="label" style={{ margin: '2px 0' }}>{`Time: ${formattedTime}`}</p>
        <p className="intro" style={{ margin: '2px 0' }}>{`RiskValue: ${riskLevel}(${riskValue.toFixed(2)})`}</p>
      </div>
    );
  }

  return null;
};

//chartstate us an atom, which is a initial state with some default values
const chartState = atom({
  key: 'chartState',
  default: {
    componentSize: "middle",
    loading: false,
    data: [],
    parameters: {},
    chartType: "",
    maxRiskLevel: "",
    backgroundColor: "",
    maxLevel: "",
    fillColors: {
      low: "#52B795",
      medium: "#FFA600",
      high: "#ED5711",
      extreme: "#BA2011",
    },
  }
});

const CustomDot = ({ cx, cy, payload, maxValue, width, index, firstMaxIndices, translation }) => {
  // Check if cy value is less than 20
  const isNearTop = cy < 29;

  // Determine the position of the data point
  let textX = cx;
  if (cx < width * 0.15) {  // If the data point is within the leftmost 15% of the chart
    textX = cx + 15;  // Offset label to the right
  } else if (cx > width * 0.95) {  // If the data point is within the rightmost 5% of the chart
    textX = cx - 10;  // Offset label to the left
  }

  if (payload.riskValue === maxValue) {
    if (index === firstMaxIndices[0]) {
      // For the first largest value point, display the "Max" text label
      return (
        <g>
          <circle cx={cx} cy={cy} r={5} strokeWidth={2} fill="#990000" />
          <text x={textX} y={isNearTop ? cy + 28 : cy - 20} textAnchor="middle" fill="black">{translation.max}</text>
          <path d={`M${cx},${isNearTop ? cy + 10 : cy - 10} L${cx - 5},${isNearTop ? cy + 15 : cy - 15} L${cx + 5},${isNearTop ? cy + 15 : cy - 15} Z`} fill="black" />
        </g>
      );
    } else if (firstMaxIndices.includes(index)) {
      // For other maximum value points, only display a specific style without the "Max" text
      return <circle cx={cx} cy={cy} r={5} strokeWidth={2} fill="#990000" />;
    }
  }

  // By default, render a standard data point
  return <circle cx={cx} cy={cy} r={3} stroke="black" strokeWidth={1} fill="black" />;
};



// Custom Y-axis label
function CustomYAxisTick({ x, y, payload, translation }) {
  const value = payload.value;
  let displayValue = "";
  // Assign translated display values based on the value
  if (value === 0) displayValue = translation.Low_Short;
  else if (value === 0.25) displayValue = translation.Moderate_Short;
  else if (value === 0.5) displayValue = translation.High_Short;
  else if (value === 0.75) displayValue = translation.Extreme_Short;
  
  return (
    <text
      x={x + 5}
      y={y + 15}   
      fill="#666"
      textAnchor="middle"
      transform={`rotate(-90, ${x - 20}, ${y})`}  // Rotate by 90 degrees around the original position
      fontWeight="350" // Set the font weight, 300 is a thinner value
      fontSize="14"    // Set font size, here it is 14px
    >
      {displayValue}
    </text>
  );
}

const Chart = (props) => {
  //chart is the current value of the atom
  //useRecoilState to read and set the value of the atom
  const { languageHelper } = props;
  const translation = useLanguage(languageHelper, 'CurrentHssRiskDisplay');
  const [chart, setChart] = useRecoilState(chartState);
  const [state, setState] = useState({
    componentSize: "middle",
    loading: props.loading,
    data: props.data,
    parameters: props.parameters,
    chartType: props.chartType,
    maxRiskLevel: "",
    backgroundColor: "",
    maxLevel: props.maxLevel,
  });

  // Modified: new method added to find the index of the first maximum value
  const findFirstMaxIndex = (data, maxValue) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].riskValue === maxValue) {
        return i;
      }
    }
    return -1;
  };

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      parameters: props.parameters,
      loading: props.loading,
      data: props.data,
      chartType: props.chartType,
      maxLevel: props.maxLevel,
    }));
  }, [props]);

  const findMaxValue = (data) => {
  let maxVal = -Infinity;
  data.forEach((item) => {
    if (item.riskValue > maxVal) {
      maxVal = item.riskValue;
    }
  });
  return maxVal;
  };

  const areaChart = () => {
    return (
      <AreaChart data={state.data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis
          domain={[0, 1]}
          axisLine={false}
          tick={<CustomYAxisTick translation={translation} />}
          interval={0} // Make sure all labels are displayed
          padding={{ top: 20, bottom: 20 }} // added  padding
        />
        <Tooltip content={<CustomTooltip />} /> {/* Using Customized Tooltips */}
        <Area
          type="monotone"
          dataKey="riskValue"
          stroke="black"
          fillOpacity={1}
          fill="blue"
        />
        {['low', 'medium', 'high', 'extreme'].map((level, index) => (
          <ReferenceArea
            y1={index * 0.25}
            y2={(index + 1) * 0.25}
            fill={chart.fillColors[level]}
            fillOpacity={0.8}
            key={level}
          />
        ))}
      </AreaChart>
    );
  };


  const lineChart = () => {
    const { data } = state;
    const maxValue = findMaxValue(data);
    // Get the index of all maximum points
    const maxIndices = data.map((item, index) => item.riskValue === maxValue ? index : -1).filter(index => index !== -1);
    // Get the index of the first 5 maximum points according to the number of maximum points
    const firstMaxIndices = maxIndices.slice(0, Math.min(5, maxIndices.length));

    return (
      <LineChart data={state.data} margin={{ top: 0, right: 10, left: -35, bottom: 0 }}>
        <XAxis dataKey="time" interval={1} />
        <YAxis
          domain={[0, 1]}
          axisLine={false}
          tick={<CustomYAxisTick translation={translation} />}
          interval={0} // Make sure all labels are displayed
          padding={{ top: 20, bottom: 20 }} // added  padding
        />
        {['low', 'medium', 'high', 'extreme'].map((level, index) => (
          <ReferenceArea
            y1={index * 0.25}
            y2={(index + 1) * 0.25}
            fill={chart.fillColors[level]}
            fillOpacity={0.8}
            key={level}
          />
        ))}
        <Line
          type="monotone"
          dataKey="riskValue"
          stroke="black"
          dot={<CustomDot maxValue={maxValue} firstMaxIndices={firstMaxIndices} translation={translation} />}
          strokeWidth={3}
        />
        <Tooltip content={<CustomTooltip />} /> {/* Using Customized Tooltips */}
      </LineChart>
    );
  };

  return (
    <div>
      {state.loading ? (
        <LoadingCard />
      ) : (
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex",
          }}
        >
          <ResponsiveContainer width="100%" height={250}>
            {state.chartType === "AreaChart"
              ? areaChart()
              : lineChart()}
          </ResponsiveContainer>
        </Space>
      )}
    </div>
  );
}

export default withRouter(LanguageHelper(Chart));