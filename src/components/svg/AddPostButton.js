import React from "react";
import Svg, { Circle, Defs, G, Path, Rect } from "react-native-svg";

const AddPostButton = () => {
  return (
    <Svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="28" cy="28" r="28" fill="#349A89" />
      <G clip-path="url(#clip0_3103_2291)">
        <Path
          d="M38.2857 29.7143H29.7143V38.2857C29.7143 38.7404 29.5337 39.1764 29.2122 39.4979C28.8907 39.8194 28.4547 40 28 40C27.5453 40 27.1093 39.8194 26.7878 39.4979C26.4663 39.1764 26.2857 38.7404 26.2857 38.2857V29.7143H17.7143C17.2596 29.7143 16.8236 29.5337 16.5021 29.2122C16.1806 28.8907 16 28.4547 16 28C16 27.5453 16.1806 27.1093 16.5021 26.7878C16.8236 26.4663 17.2596 26.2857 17.7143 26.2857H26.2857V17.7143C26.2857 17.2596 26.4663 16.8236 26.7878 16.5021C27.1093 16.1806 27.5453 16 28 16C28.4547 16 28.8907 16.1806 29.2122 16.5021C29.5337 16.8236 29.7143 17.2596 29.7143 17.7143V26.2857H38.2857C38.7404 26.2857 39.1764 26.4663 39.4979 26.7878C39.8194 27.1093 40 27.5453 40 28C40 28.4547 39.8194 28.8907 39.4979 29.2122C39.1764 29.5337 38.7404 29.7143 38.2857 29.7143Z"
          fill="white"
        />
      </G>
      <Defs>
        <Path id="clip0_3103_2291">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(16 16)"
          />
        </Path>
      </Defs>
    </Svg>
  );
};
export default AddPostButton;