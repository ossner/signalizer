import React from "react";
import BinaryInput from "./BinaryInput";
import NRZ from "./Encodings/NRZ";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }

  render() {
    return (<div><BinaryInput value={this.state.value} onChange={this.onChange.bind(this)} />
      <NRZ /></div>);
  }

  onChange(value) {
    const re = /^[01]{0,16}$/g
    if (re.test(value)) {
      this.setState({ value: value });
    }
  }
}
