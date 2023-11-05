import React, { Component } from "react";
import { withRouter } from "next/router";
import { LanguageHelper } from "../helpers/languageHelper";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  ReferenceArea,
  ResponsiveContainer,
  LabelList,
  Rectangle,
} from "recharts";  // Create scatter plots and other chart elements
import LoadingCard from "./../components/LoadingCard"; //Display used to show loading status
import { Popover } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';


const dataLow = [{ x: 0.1, y: 0.5 }]; //Represents points on a scatter plot

const dataMedium = [{ x: 0.35, y: 0.5 }];

const dataHigh = [{ x: 0.61, y: 0.5 }];

const dataExtreme = [{ x: 0.85, y: 0.5 }];

const dataLowPort = [{ x: 0.05, y: 0.5 }];

const dataMediumPort = [{ x: 0.27, y: 0.5 }];

const dataHighPort = [{ x: 0.55, y: 0.5 }];

const dataExtremePort = [{ x: 0.78, y: 0.5 }];

const renderCustomizedNowLabel = (props, label) => {  //Set the label rendering of the scatter plot, such as the position of the interface, horizontal screen and vertical screen
  let { x, y, value } = props;
  if (window.innerWidth > 1100 && window.innerWidth - x > 900) {
    x = x + 28;
  } else if (window.innerWidth <= 1100 && window.innerWidth + x < 1150) {
    x = x + 28;
  } else {
    x = x - 17;
  }
  return (
    <text
      x={x}
      y={y + 20}
      fill="black"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {label}
    </text>
  );
};

const renderCustomizedMaxLabel = (props, label) => { //Rendering of scatter plot
  let { x, y, value } = props;
  const offset = 25; //You can adjust the offset as needed
  const chartWidth = window.innerWidth; // Assume the chart width is the same as the window width
  if (value == "Now is Max") {
    if (x < 80) {
      x = x + 45;
    } else {
      x = x - 40;
    }
  } else if (value == "当前为最高") {
    if (x < 80) {
      x = x + 45;
    } else {
      x = x - 40;
    }
  } else {
    if (window.innerWidth > 1100 && window.innerWidth - x < 300) {
      x = x - 18;
    } else if (window.innerWidth <= 1100 && window.innerWidth - x < 200) {
      x = x - 18;
    } else {
      x = x + 23;
    }
  }

   // Newly added logic
  if (x < chartWidth * 0.1) { // If x is within 10% of the left side of the chart
    x = x + offset;
  } else if (x > chartWidth * 0.9) { // If x is within 10% of the right side of the chart
    x = x - offset;
  }

  return (
    <text
      x={x}
      y={y - 10}
      fill="black"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {label}
    </text>
  );
};

const renderLegendLowLabel = (props, label) => {
  const { x, y } = props;

  return (
    <text
      x={x + 40}
      y={y + 5}
      fill="black"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {label}
    </text>
  );
};

const renderLegendMediumLabel = (props, label) => {
  const { x, y } = props;

  return (
    <text
      x={x + 50}
      y={y + 5}
      fill="black"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {label}
    </text>
  );
};

const renderLegendHighLabel = (props, label) => {
  const { x, y } = props;

  return (
    <text
      x={x + 40}
      y={y + 5}
      fill="black"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {label}
    </text>
  );
};

const renderLegendExtremeLabel = (props, label) => {
  const { x, y } = props;

  return (
    <text
      x={x + 50}
      y={y + 5}
      fill="black"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {label}
    </text>
  );
};

const CustomReferenceShape = (props) => {
  return (
    <Rectangle
      width={2}
      height={55}
      x={props.x + 5}
      y={props.y - 23}
      fill="black"
    />
  );
};

const CustomReferenceShapeMax = (props) => {
  const { x } = props;
  const chartWidth = window.innerWidth; // Assume the chart width is the same as the window width
  let rectWidth = 2; //Default rectangle width

  // Increase the width of the rectangle if the x value is close to the left or right edge of the chart
  if (x < chartWidth * 0.01 || x > chartWidth * 0.99) {
    rectWidth = 5;
  }

  return (
    <>
      <Rectangle
        width={rectWidth}
        height={12}
        x={x + 2}
        y={props.y - 22}
        fill="black"
      />
      <Rectangle
        width={rectWidth}
        height={12}
        x={x + 2}
        y={props.y - 5}
        fill="black"
      />
      <Rectangle
        width={rectWidth}
        height={9}
        x={x + 2}
        y={props.y + 25}
        fill="black"
      />
      <Rectangle
        width={rectWidth}
        height={12}
        x={x + 2}
        y={props.y + 10}
        fill="black"
      />
    </>
  );
};
const CustomReferenceShapePort = (props) => {
  return (
    <Rectangle
      width={2}
      height={55}
      x={props.x + 8}
      y={props.y - 21}
      fill="black"
    />
  );
};

const CustomReferenceShapeMaxPort = (props) => {
  return (
    <>
      <Rectangle
        width={2}
        height={12}
        x={props.x + 5}
        y={props.y - 22}
        fill="black"
      />
      <Rectangle
        width={2}
        height={12}
        x={props.x + 5}
        y={props.y - 5}
        fill="black"
      />
      <Rectangle
        width={2}
        height={9}
        x={props.x + 5}
        y={props.y + 25}
        fill="black"
      />
      <Rectangle
        width={2}
        height={12}
        x={props.x + 5}
        y={props.y + 10}
        fill="black"
      />
    </>
  );
};

class BottomLegend extends Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }

  state = {
    componentSize: "middle",
    legendNow: this.props.legendNow,
    legendMax: this.props.legendMax,
    portialLegendNow: this.props.portialLegendNow,
    portialLegendMax: this.props.portialLegendMax,
    loading: this.props.loading,
    translation: {
      Low: "Low",
      Medium: "Medium",
      High: "High",
      Extreme: "Extreme",
      NowLabel: "Now",
      MaxLabel: "Max",
      NowIsMaxLabel: "Now Is Max",
      Explanation_Tittle: "Explanation: ",  // Step 1: Add translation field in status
      Explanation: "The HSS risk level displays the highest risk for the day and the current risk level.",
    },
    fillColors: {
      low: "#52B795",
      medium: "#FFA600",
      high: "#ED5711",
      extreme: "#BA2011",
    },
    landscape: false,
    showModal: false, // Control the status of pop-up window display
  };

  componentDidMount() {  //Call life cycle methods to initialize some components
    this.loadTranslation();
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  async loadTranslation() {
    const { languageHelper } = this.props;

    let res = await languageHelper.translation("BottomLegend");

    this.setState({  //Step 2: Update translation status in loadTranslation method
      translation: {
        ...this.state.translation,
        ...res,
      },
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        loading: this.props.loading,
        legendNow: this.props.legendNow,
        legendMax: this.props.legendMax,
      });
    }
  }

  handleResize() {
    this.setState({ landscape: window.innerWidth > 770 });
  }

  mainView = () => {
    if (this.state.landscape) {
      return this.landScapeView();
    } else {
      return this.portialView();
    }
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };
  landScapeView = () => { //Scatter plot for landscape view
    const { translation } = this.state;    // Step 3: Use translation state in render method
    return (
      <>
    {/* This is the code part of the question mark icon and modal box */}
        <div style={{ position: 'relative', width: '100%', height: '10px' }}>
          <Popover
            content={
              <div>
                {translation.Explanation}
              </div>
            }
            title= {translation.Explanation_Tittle}
            trigger="click"
            placement="topRight"
            getPopupContainer={trigger => trigger.parentNode}  // Specify container as parent element
          >
            <div style={{ position: 'absolute', top: 0, right: 0 }}>
              <QuestionCircleOutlined />
            </div>
          </Popover>
        </div>

        <ResponsiveContainer width="100%" height={100}>
          <ScatterChart margin={{ top: 20, right: 0, left: -60, bottom: -10 }}>
            <XAxis
              type="number"
              dataKey="riskValue"
              domain={[0, 1]}
              axisLine={false}
              tick={false}
            />
            <YAxis
              type="number"
              dataKey="y"
              domain={[0, 1]}
              axisLine={false}
              tick={false}
            />
            <ReferenceArea
              x1={0}
              x2={0.25}
              fill={this.state.fillColors.low}
              fillOpacity={0.9}
            />
            <ReferenceArea
              x1={0.25}
              x2={0.5}
              fill={this.state.fillColors.medium}
              fillOpacity={0.8}
            />
            <ReferenceArea
              x1={0.5}
              x2={0.75}
              fill={this.state.fillColors.high}
              fillOpacity={0.8}
            />
            <ReferenceArea
              x1={0.75}
              x2={1}
              fill={this.state.fillColors.extreme}
              fillOpacity={0.8}
            />

            <Scatter
              name="Now"
              data={this.state.legendNow}
              fill="black"
              shape={CustomReferenceShape}
            >
              <LabelList
                dataKey={"label"}
                position={"right"}
                content={(props) =>
                  renderCustomizedNowLabel(
                    props,
                    this.state.translation.NowLabel
                  )
                }
              />
            </Scatter>
            <Scatter
              name="Today's Max"
              data={this.state.legendMax}
              fill="black"
              shape={CustomReferenceShapeMax}
            >
              <LabelList
                dataKey={"label"}
                position={"right"}
                content={(props) => {
                  let length = this.state.legendNow.length;
                  return renderCustomizedMaxLabel(
                    props,
                    length == 0
                      ? this.state.translation.NowIsMaxLabel
                      : this.state.translation.MaxLabel
                  );
                }}
                //content={(props) => renderCustomizedMaxLabel(props, this.state.legendNow && this.state.legendMax.length!=0?this.state.translation.MaxLabel:this.state.translation.NowIsMaxLabel)}
              />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={20}>
          <ScatterChart margin={{ top: 10, right: 0, left: -60, bottom: 0 }}>
            <XAxis
              type="number"
              dataKey="x"
              domain={[0, 1]}
              axisLine={false}
              tick={false}
            />
            <YAxis type="number" dataKey="y" axisLine={false} tick={false} />

            <Scatter
              data={dataLow}
              name={this.state.translation.Low}
              fill={this.state.fillColors.low}
            >
              <LabelList
                position={"right"}
                content={(props) =>
                  renderLegendLowLabel(props, this.state.translation.Low)
                }
              />
            </Scatter>
            <Scatter
              data={dataMedium}
              name={this.state.translation.Medium}
              fill={this.state.fillColors.medium}
            >
              <LabelList
                position={"right"}
                content={(props) =>
                  renderLegendMediumLabel(props, this.state.translation.Medium)
                }
              />
            </Scatter>
            <Scatter
              data={dataHigh}
              name={this.state.translation.High}
              fill={this.state.fillColors.high}
            >
              <LabelList
                position={"right"}
                content={(props) =>
                  renderLegendHighLabel(props, this.state.translation.High)
                }
              />
            </Scatter>
            <Scatter
              data={dataExtreme}
              name={this.state.translation.Extreme}
              fill={this.state.fillColors.extreme}
            >
              <LabelList
                position={"right"}
                content={(props) =>
                  renderLegendExtremeLabel(
                    props,
                    this.state.translation.Extreme
                  )
                }
              />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </>
    );
  };

  portialView = () => {  //Define a scatter plot for vertical screen display
    const { translation } = this.state;  // Make sure the translation variable is defined within the function scope
    return (
      <>
{/* This is the code part of the question mark icon and modal box */}
        <div style={{ position: 'relative', width: '100%', height: '10px' }}>
          <Popover
            content={
              <div>
                {translation.Explanation}
              </div>
            }
            title= {translation.Explanation_Tittle}
            trigger="click"
            placement="topRight"
            getPopupContainer={trigger => trigger.parentNode}  // Specify container as parent element
          >
            <div style={{ position: 'absolute', top: 0, right: 0 }}>
              <QuestionCircleOutlined />
            </div>
          </Popover>
        </div>

        <ResponsiveContainer width="100%" height={100}>
          <ScatterChart margin={{ top: 10, right: 0, left: -60, bottom: -10 }}>
            <XAxis
              type="number"
              dataKey="riskValue"
              domain={[0, 1]}
              axisLine={false}
              tick={false}
            />
            <YAxis
              type="number"
              dataKey="y"
              domain={[0, 1]}
              axisLine={false}
              tick={false}
            />
            <ZAxis type="number" range={[200, 201]} />
            <ReferenceArea
              x1={0}
              x2={0.25}
              fill={this.state.fillColors.low}
              fillOpacity={0.9}
            />
            <ReferenceArea
              x1={0.25}
              x2={0.5}
              fill={this.state.fillColors.medium}
              fillOpacity={0.8}
            />
            <ReferenceArea
              x1={0.5}
              x2={0.75}
              fill={this.state.fillColors.high}
              fillOpacity={0.8}
            />
            <ReferenceArea
              x1={0.75}
              x2={1}
              fill={this.state.fillColors.extreme}
              fillOpacity={0.8}
            />

            <Scatter
              name="Now"
              data={this.state.portialLegendNow}
              fill="black"
              shape={CustomReferenceShapePort}
            >
              <LabelList
                dataKey={"label"}
                position={"right"}
                content={(props) =>
                  renderCustomizedNowLabel(
                    props,
                    this.state.translation.NowLabel
                  )
                }
              />
            </Scatter>
            <Scatter
              name="Today's Max"
              data={this.state.portialLegendMax}
              fill="black"
              shape={CustomReferenceShapeMaxPort}
            >
              <LabelList
                dataKey={"label"}
                position={"right"}
                content={(props) => {
                  let length = this.state.portialLegendNow.length;
                  return renderCustomizedMaxLabel(
                    props,
                    length == 0
                      ? this.state.translation.NowIsMaxLabel
                      : this.state.translation.MaxLabel
                  );
                }}
              />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={20}>
          <ScatterChart margin={{ top: 10, right: 0, left: -60, bottom: 0 }}>
            <XAxis
              type="number"
              dataKey="x"
              domain={[0, 1]}
              axisLine={false}
              tick={false}
            />
            <YAxis type="number" dataKey="y" axisLine={false} tick={false} />

            <Scatter
              data={dataLowPort}
              name={this.state.translation.Low}
              fill={this.state.fillColors.low}
            >
              <LabelList
                position={"insideRight"}
                content={(props) =>
                  renderLegendLowLabel(props, this.state.translation.Low)
                }
              />
            </Scatter>
            <Scatter
              data={dataMediumPort}
              name={this.state.translation.Medium}
              fill={this.state.fillColors.medium}
            >
              <LabelList
                position={"insideRight"}
                content={(props) =>
                  renderLegendMediumLabel(props, this.state.translation.Medium)
                }
              />
            </Scatter>
            <Scatter
              data={dataHighPort}
              name={this.state.translation.High}
              fill={this.state.fillColors.high}
            >
              <LabelList
                position={"insideRight"}
                content={(props) =>
                  renderLegendHighLabel(props, this.state.translation.High)
                }
              />
            </Scatter>
            <Scatter
              data={dataExtremePort}
              name={this.state.translation.Extreme}
              fill={this.state.fillColors.extreme}
            >
              <LabelList
                position={"insideRight"}
                content={(props) =>
                  renderLegendExtremeLabel(
                    props,
                    this.state.translation.Extreme
                  )
                }
              />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </>
    );
  };

  render() {
    return <div>{this.state.loading ? <LoadingCard /> : this.mainView()}</div>;
  }
}

export default withRouter(LanguageHelper(BottomLegend));