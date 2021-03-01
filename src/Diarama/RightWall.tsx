import { observer } from "mobx-react";
import React, { Component } from "react";
import styled from "styled-components";
import { aS } from "../initializer";

interface RightWallProps {
  width?: string;
  height?: string;
  zIndex?: number;
  backgroundSize?: string;
  backgroundImage?: string;
  opacity?: number;
  direction?: string;
  transform?: string;
  top?: string;
  left?: string;
  right?: string;
  transformOrigin?: string;
  filter?: string;
  backgroundRepeat?: string;
  position?: string;
  src?: string;
}

const StyledRightWall = styled.div<RightWallProps>`
  opacity: ${({ opacity }) => opacity && opacity};
  background-size: ${({ backgroundSize }) => backgroundSize && backgroundSize};
  background-image: ${({ backgroundImage }) =>
    backgroundImage && backgroundImage};
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
`;

const RightWall = observer(
  class RightWall extends Component<RightWallProps> {
    constructor(props: RightWallProps) {
      super(props);
    }
    render() {
      const {
        opacity = 1,
        backgroundSize = "cover",
        backgroundImage = `url(${aS.wallImage})`,
        backgroundRepeat = "no-repeat",
        width = "100vw",
        height = "100vh",
        zIndex = 5,
        direction,
        transform = "rotateY(-271deg)",
        transformOrigin = "center left",
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
      return <StyledRightWall {...defaultedProps} className={classNames} />;
    }
  }
);

export default RightWall;
