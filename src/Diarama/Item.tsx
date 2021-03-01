import { observer } from "mobx-react";
import React, { Component } from "react";
import styled from "styled-components";

interface ItemProps {
  position?: string;
  margin?: string;
  height?: string;
  left?: string;
  right?: string;
  bottom?: string;
  top?: string;
  mixBlendMode?: string;
  filter?: string;
  transform?: string;
  transformOrigin?: string;
  src?: string;
}

const StyledItem = styled.img<ItemProps>`
  transform-origin: ${({ transformOrigin }) =>
    transformOrigin && transformOrigin};
  filter: ${({ filter }) => filter && filter};
  transform: ${({ transform }) => transform && transform};
  mix-blend-mode: ${({ mixBlendMode }) => mixBlendMode && mixBlendMode};
  top: ${({ top }) => top && top};
  bottom: ${({ bottom }) => bottom && bottom};
  right: ${({ right }) => right && right};
  left: ${({ left }) => left && left};
  height: ${({ height }) => height && height};
  position: ${({ position }) => position && position};
  margin: ${({ margin }) => margin && margin};
`;
const Item = observer(
  class Item extends Component<ItemProps> {
    render() {
      const {
        position = "absolute",
        margin = "auto",
        height = "90%",
        left = 0,
        right = 0,
        bottom = 0,
        top = 0,
        mixBlendMode = "none",
        filter = "drop-shadow(20px 10px 25px #444)",
        transform = "translateY(5%) translateX(9%)",
        transformOrigin = "bottom center",
        src
      } = this.props;

      const defaultedProps = {
        position: position,
        margin: margin,
        height: height,
        left: left,
        right: right,
        bottom: bottom,
        top: top,
        mixBlendMode: mixBlendMode,
        filter: filter,
        transform: transform,
        transformOrigin: transformOrigin,
        src: src
      };

      return <StyledItem {...defaultedProps} />;
    }
  }
);

export default Item;
