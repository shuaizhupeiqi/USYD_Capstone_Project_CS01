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

class CustomDot extends Component {
  render() {
    const { cx, cy, payload, maxValue, width, index, firstMaxIndices } = this.props;

    // 检查cy值是否小于20
    const isNearTop = cy < 29;

    // 判断数据点位置
    let textX = cx;
    if (cx < width * 0.15) {  // 如果数据点在图表的最左端15%以内
      textX = cx + 15;  // 标签向右偏移
    } else if (cx > width * 0.95) {  // 如果数据点在图表的最右端5%以内
      textX = cx - 10;  // 标签向左偏移
    }

    if (payload.riskValue === maxValue) {
      if (index === firstMaxIndices[0]) {
        // 第一个最大值点，显示“Max”文字标记
        return (
          <g>
            <circle cx={cx} cy={cy} r={5} strokeWidth={2} fill="#990000" />
            <text x={textX} y={isNearTop ? cy + 28 : cy - 20} textAnchor="middle" fill="black">Max</text>
            <path d={`M${cx},${isNearTop ? cy + 10 : cy - 10} L${cx - 5},${isNearTop ? cy + 15 : cy - 15} L${cx + 5},${isNearTop ? cy + 15 : cy - 15} Z`} fill="black" />
          </g>
        );
      } else if (firstMaxIndices.includes(index)) {
        // 其他最大值点，只显示特定样式，不显示“Max”文字
        return <circle cx={cx} cy={cy} r={5} strokeWidth={2} fill="#990000" />;
      }
    }

    return <circle cx={cx} cy={cy} r={3} stroke="black" strokeWidth={1} fill="black" />;
  }
}



// 自定义Y轴标签
class CustomYAxisTick extends Component {
  render() {
    const { x, y, payload } = this.props;
    const value = payload.value;
    let displayValue = "";
    if (value === 0) displayValue = "Low.";
    else if (value === 0.25) displayValue = "Mod.";
    else if (value === 0.5) displayValue = "Hig.";
    else if (value === 0.75) displayValue = "Ext.";
    return (
      <text
        x={x + 5}   // 调整x坐标的位置
        y={y + 15}  // 文字和颜色之间的间隙
        fill="#666"
        textAnchor="middle"
        transform={`rotate(-90, ${x - 20}, ${y})`}  // 在原来的位置上旋转90度
        fontWeight="350" // 设置字体粗细，300是较细的值
        fontSize="14"    // 设置字号，这里是12px
      >
        {displayValue}
      </text>
    );
  }
}

const Chart = (props) => {
  //chart is the current value of the atom
  //useRecoilState to read and set the value of the atom
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

  // 修改：新添加的方法，用来找到第一个最大值的索引
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
          tick={<CustomYAxisTick />}
          interval={0} // 确保所有标签都被显示
          padding={{ top: 20, bottom: 20 }} // 添加了padding
        />
        <Tooltip />
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
    // 获取所有最大值点的索引
    const maxIndices = data.map((item, index) => item.riskValue === maxValue ? index : -1).filter(index => index !== -1);
    // 根据最大值点的数量获取前5个最大值点的索引
    const firstMaxIndices = maxIndices.slice(0, Math.min(5, maxIndices.length));

    return (
      <LineChart data={state.data} margin={{ top: 0, right: 10, left: -35, bottom: 0 }}>
        <XAxis dataKey="time" interval={1} />
        <YAxis
          domain={[0, 1]}
          axisLine={false}
          tick={<CustomYAxisTick />}
          interval={0} // 确保所有标签都被显示
          padding={{ top: 20, bottom: 20 }} // 添加了padding
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
          dot={<CustomDot maxValue={maxValue} firstMaxIndices={firstMaxIndices} />}
          strokeWidth={3}
        />
        <Tooltip />
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