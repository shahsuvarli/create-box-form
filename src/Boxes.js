import { Component } from "react";

class Boxes extends Component {
  render() {
    return (
      <div>
        {this.props.boxList?.map((box, index) => {
          return <div style={box} key={index}></div>;
        })}
      </div>
    );
  }
}

export default Boxes;
