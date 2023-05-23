import React from "react";
import { curveBasis, line } from "d3-shape";
import Svg, { Path } from "react-native-svg";
import { TAB_BAR_HEIGHT_SIZE, width } from "../../styles/dimensions";

const lineGenerator = line();

const rect = lineGenerator([
  [0, 0],
  [width / 2, 0],
  [width, 0],
  [width, TAB_BAR_HEIGHT_SIZE],
  [0, TAB_BAR_HEIGHT_SIZE],
  [0, 0],
]);

const center = lineGenerator.curve(curveBasis)([
  [(width / 5) * 2, 0],
  [(width / 5) * 2 + 20, TAB_BAR_HEIGHT_SIZE * 0.5],
  [(width / 5) * 3 - 20, TAB_BAR_HEIGHT_SIZE * 0.5],
  [(width / 5) * 3, 0],
]);

const d = `${center} ${rect}`;

export default function TabShape() {
  return (
    <Svg width={width} height={TAB_BAR_HEIGHT_SIZE}>
      <Path fill="white" {...{ d }} />
    </Svg>
  );
}
