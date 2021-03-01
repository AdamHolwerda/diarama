import { observer } from "mobx-react";
import React, { Component } from "react";

import RightWall from "./RightWall";
import LeftWall from "./LeftWall";
import Ceiling from "./Ceiling";
import Floor from "./Floor";
import BackWall from "./BackWall";

interface WallProps {
  width?: string;
  height?: string;
  zIndex?: number;
  backgroundSize?: string;
  backgroundImage?: string;
  opacity?: number;
  direction: string;
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

const Wall = observer(
  class Wall extends Component<WallProps> {
    constructor(props: WallProps) {
      super(props);
    }
    render() {
      switch (this.props.direction) {
        case "right":
          return <RightWall {...this.props} />;
        case "left":
          return <LeftWall {...this.props} />;
        case "ceiling":
          return <Ceiling {...this.props} />;
        case "floor":
          return <Floor {...this.props} />;
        case "back":
          return <BackWall {...this.props} />;
      }
    }
  }
);

export default Wall;
