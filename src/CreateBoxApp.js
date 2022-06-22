import { Component } from "react";
import Boxes from "./Boxes";
import Form from "./Form";

class CreateBoxForm extends Component {
  constructor() {
    super();
    this.createBox = this.createBox.bind(this);
    this.state = {
      boxList: [],
    };
  }
  createBox(boxWidth, boxHeight, boxColor) {
    let newBoxList = [
      ...this.state.boxList,
      {
        width: `${boxWidth}px`,
        height: `${boxHeight}px`,
        backgroundColor: boxColor,
      },
    ];
    this.setState({ boxList: newBoxList });
    console.log(this.state.boxList);
  }
  render() {
    return (
      <div>
        <Form createBox={this.createBox} />
        <Boxes boxList={this.state.boxList} />
      </div>
    );
  }
}
export default CreateBoxForm;
