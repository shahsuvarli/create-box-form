import { Component, createRef } from "react";

class Form extends Component {
  constructor() {
    super();
    this.widthRef = createRef();
    this.heightRef = createRef();
    this.colorRef = createRef();
  }
  render() {
    return (
      <div>
        <label htmlFor="width">Width (px): </label>
        <input type="text" ref={this.widthRef} id="width" />

        <label htmlFor="height">Height (px): </label>
        <input type="text" ref={this.heightRef} id="height" />

        <label htmlFor="color">Color: </label>
        <input type="color" ref={this.colorRef} id="color" />

        <button
          onClick={() =>
            this.props.createBox(
              this.widthRef.current.value,
              this.heightRef.current.value,
              this.colorRef.current.value
            )
          }
        >
          Submit
        </button>
      </div>
    );
  }
}
export default Form;
