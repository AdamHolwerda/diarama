import { observer } from "mobx-react";
import React, { Component } from "react";
import styled from "styled-components";
import { aS } from "../initializer";

interface FloorProps {
  width?: string;
  height?: string;
  zIndex?: number;
  backgroundSize?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  opacity?: number;
  direction?: string;
  transform?: string;
  top?: string;
  left?: string;
  right?: string;
  transformOrigin?: string;
  filter?: string;
  position?: string;
}

const StyledFloor = styled.div<FloorProps>`
  opacity: ${({ opacity }) => opacity && opacity};
  background-size: ${({ backgroundSize }) => backgroundSize && backgroundSize};
  background-image: ${({ backgroundImage }) =>
    backgroundImage && backgroundImage};
  background-repeat: ${({ backgroundRepeat }) =>
    backgroundRepeat && backgroundRepeat};
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  z-index: ${({ zIndex }) => zIndex && zIndex};
  transform: ${({ transform }) => transform && transform};
  transform-origin: ${({ transformOrigin }) =>
    transformOrigin && transformOrigin};
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
  right: ${({ right }) => right && right};
  filter: ${({ filter }) => filter && filter};
  position: ${({ position }) => position && position};
  backface-visibility: hidden;
  background-position: 0 95%;
`;

const Floor = observer(
  class Floor extends Component<FloorProps> {
    constructor(props: FloorProps) {
      super(props);
    }
    render() {
      const {
        opacity = 0.95,
        backgroundSize = "cover",
        backgroundImage = `url(${aS.wallImage})`,
        backgroundRepeat = "no-repeat",
        width = "100%",
        height = "100vh",
        zIndex = 5,
        direction,
        transform = "rotateX(89deg)",
        transformOrigin = "bottom center",
        top = "0",
        left = "0",
        right = "0",
        filter = "brightness(0.9)",
        position = "absolute"
      } = this.props;

      const defaultedProps = {
        opacity: opacity,
        backgroundSize: backgroundSize,
        backgroundImage: backgroundImage,
        backgroundRepeat: backgroundRepeat,
        position: position,
        width: width,
        height: height,
        zIndex: zIndex,
        transform: transform,
        transformOrigin: transformOrigin,
        top: top,
        left: left,
        right: right,
        filter: filter
      };

      let classNames = "wall";
      if (direction) classNames += " " + direction;
      return <StyledFloor {...defaultedProps} className={classNames} />;
    }
  }
);

export default Floor;
