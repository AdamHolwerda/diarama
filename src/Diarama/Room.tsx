import { observer } from "mobx-react";
import React, { Component, ReactElement } from "react";
import styled from "styled-components";

import Wall from "./Wall";

interface RoomProps {
  width?: string;
  height?: string;
  position?: string;
  transformStyle?: string;
  opacity?: string;
  src?: string;
  children?: ReactElement | ReactElement[];
}

const StyledRoom = styled.div<RoomProps>`
  opacity: ${({ opacity }) => opacity && opacity};
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  transform-style: ${({ transformStyle }) => transformStyle && transformStyle};
  position: ${({ position }) => position && position};
`;

const Room = observer(
  class Room extends Component<RoomProps> {
    render() {
      const {
        width = "100%",
        height = "100%",
        position = "relative",
        transformStyle = "preserve-3d",
        opacity = 1,
        src
      } = this.props;

      const defaultedProps = {
        width: width,
        height: height,
        position: position,
        transformStyle: transformStyle,
        opacity: opacity,
        src: src
      };

      return (
        <StyledRoom {...defaultedProps}>
          <Wall src={defaultedProps.src} direction="ceiling" height="33vh" />
          <Wall src={defaultedProps.src} direction="back" />
          <Wall src={defaultedProps.src} direction="left" />
          <Wall src={defaultedProps.src} direction="floor" />
          <Wall src={defaultedProps.src} direction="right" />
          {this.props.children}
        </StyledRoom>
      );
    }
  }
);

export default Room;
