import { observer } from "mobx-react";
import React, { Component } from "react";
import Item from "./Item";

import styled from "styled-components";

interface LayerProps {
  backfaceVisibility?: string;
  userSelect?: string;
  position?: string;
  width?: string;
  height?: string;
  transform?: string;
}

const StyledLayer = styled.div<LayerProps>`
  backface-visibility: ${({ backfaceVisibility }) =>
    backfaceVisibility && backfaceVisibility};
  user-select: ${({ userSelect }) => userSelect && userSelect};
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  transform: ${({ transform }) => transform && transform};
  position: ${({ position }) => position && position};
`;

const Layer = observer(
  class Layer extends Component<LayerProps> {
    render() {
      const {
        backfaceVisibility = "hidden",
        userSelect = "none",
        position = "absolute",
        width = "100%",
        height = "100%",
        transform = "translateZ(-50px)"
      } = this.props;

      const defaultedProps = {
        backfaceVisibility: backfaceVisibility,
        userSelect: userSelect,
        position: position,
        width: width,
        height: height,
        transform: transform
      };

      return (
        <StyledLayer {...defaultedProps}>
          <Item />
        </StyledLayer>
      );
    }
  }
);

export default Layer;
