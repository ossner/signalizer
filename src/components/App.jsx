import React from "react";
import BinaryInput from "./BinaryInput";
import { Encoding, Empty, TickOne, TickZero, ConstOne, ConstZero, BiphaseZero, TickBiphaseZero, TickBiphaseOne, BiphaseOne } from "./Encoding";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      nrzl: Array(16).fill(<Empty />),
      nrzm: Array(16).fill(<Empty />),
      nrzs: Array(16).fill(<Empty />),
    }
  }

  render() {
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <div className="wrapper">
          <div style={{
            gridColumn: 2,
            gridRow: 1
          }}>
            <BinaryInput value={this.state.value} onChange={this.onChange.bind(this)} />
          </div>
          <div style={{
            textAlign: "right", color: "#f8f8f2", lineHeight: "65px", fontSize: 30,
            gridColumn: 1,
            gridRow: 2
          }}>
            Data/NRZ-L:
          </div>
          <div style={{
            border: "1px solid white",
            gridColumn: 2,
            gridRow: 2
          }}>
            <Empty />
          </div>
        </div>
      </div>);
  }

  onChange(value) {
    this.setState({ value: value });
  }
}