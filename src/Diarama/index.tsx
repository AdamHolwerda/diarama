import { observer } from "mobx-react";
import React, { Component } from "react";
import styled from "styled-components";
import Room from "./Room";
import Item from "./Item";

interface DiaramaProps {
  width?: string;
  height?: string;
  perspective?: string;
  perspectiveOrigin?: string;
  src?: string;
}

const StyledDiarama = styled.div<DiaramaProps>`
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  perspective: ${({ perspective }) => perspective && perspective};
  perspective-origin: ${({ perspectiveOrigin }) =>
    perspectiveOrigin && perspectiveOrigin};
`;

const Diarama = observer(
  class Diarama extends Component<DiaramaProps> {
    render() {
      const {
        width = "100%",
        height = "100%",
        perspective = "200px",
        perspectiveOrigin = "50% 50%"
      } = this.props;

      const defaultedProps = {
        width: width,
        height: height,
        perspective: perspective,
        perspectiveOrigin: perspectiveOrigin
      };

      return (
        <StyledDiarama {...defaultedProps}>
          <Room>
            <Item
              height="50%"
              top="10%"
              right="20%"
              left="none"
              bottom="none"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1207/aeobaos-text.png"
            />
          </Room>
        </StyledDiarama>
      );
    }
  }
);

export default Diarama;
