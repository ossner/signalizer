import React from "react";
import BinaryInput from "./BinaryInput";
import { Encoding, Empty, TickOne, TickZero, ConstOne, ConstZero, BiphaseZero, TickBiphaseZero, TickBiphaseOne, BiphaseOne } from "./Encoding";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      nrzL: Array(16).fill(<Empty />),
      nrzM: Array(16).fill(<Empty />),
      nrzS: Array(16).fill(<Empty />),
      manchester: Array(16).fill(<Empty />),
      biphaseM: Array(16).fill(<Empty />),
      biphaseS: Array(16).fill(<Empty />),
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
            border: "1px solid #f8f8f2",
            gridColumn: 2,
            gridRow: 2,
            display: "grid",
            gridTemplateColumns: "repeat(16, 1fr)"
          }}>
            <Encoding data={this.state.nrzL} />
          </div>
          <div style={{
            textAlign: "right", color: "#f8f8f2", lineHeight: "65px", fontSize: 30,
            gridColumn: 1,
            gridRow: 3
          }}>
            NRZ-M:
          </div>
          <div style={{
            border: "1px solid #f8f8f2",
            gridColumn: 2,
            gridRow: 3,
            display: "grid",
            gridTemplateColumns: "repeat(16, 1fr)"
          }}>
            <Encoding data={this.state.nrzM} />
          </div>
          <div style={{
            textAlign: "right", color: "#f8f8f2", lineHeight: "65px", fontSize: 30,
            gridColumn: 1,
            gridRow: 4
          }}>
            NRZ-S:
          </div>
          <div style={{
            border: "1px solid #f8f8f2",
            gridColumn: 2,
            gridRow: 4,
            display: "grid",
            gridTemplateColumns: "repeat(16, 1fr)"
          }}>
            <Encoding data={this.state.nrzS} />
          </div>
          <div style={{
            textAlign: "right", color: "#f8f8f2", lineHeight: "65px", fontSize: 30,
            gridColumn: 1,
            gridRow: 5
          }}>
            Manchester:
          </div>
          <div style={{
            border: "1px solid #f8f8f2",
            gridColumn: 2,
            gridRow: 5,
            display: "grid",
            gridTemplateColumns: "repeat(16, 1fr)"
          }}>
            <Encoding data={this.state.manchester} />
          </div>
          <div style={{
            textAlign: "right", color: "#f8f8f2", lineHeight: "65px", fontSize: 30,
            gridColumn: 1,
            gridRow: 6
          }}>
            Biphase-M:
          </div>
          <div style={{
            border: "1px solid #f8f8f2",
            gridColumn: 2,
            gridRow: 6,
            display: "grid",
            gridTemplateColumns: "repeat(16, 1fr)"
          }}>
            <Encoding data={this.state.biphaseM} />
          </div>
          <div style={{
            textAlign: "right", color: "#f8f8f2", lineHeight: "65px", fontSize: 30,
            gridColumn: 1,
            gridRow: 7
          }}>
            Biphase-S:
          </div>
          <div style={{
            border: "1px solid #f8f8f2",
            gridColumn: 2,
            gridRow: 7,
            display: "grid",
            gridTemplateColumns: "repeat(16, 1fr)"
          }}>
            <Encoding data={this.state.biphaseS} />
          </div>
        </div>
      </div>);
  }

  onChange(value) {
    this.setState({ value: value });
    this.encodeNRZL(value)
    this.encodeNRZM(value)
    this.encodeNRZS(value)
    this.encodeManchester(value)
    this.encodeBiphaseM(value)
    this.encodeBiphaseS(value)
  }

  encodeNRZL(value) {
    let encoding_cp = Array(16).fill(<Empty />);
    let level
    for (var i = 0; i < value.length; i++) {
      if (i === 0) {
        if (value.charAt(i) === '1') {
          encoding_cp[i] = <ConstOne />;
          level = true
        } else {
          encoding_cp[i] = <ConstZero />;
          level = false
        }
        continue
      }
      if (value.charAt(i) === '1' && level) { encoding_cp[i] = <ConstOne /> }
      else if (value.charAt(i) === '0' && !level) { encoding_cp[i] = <ConstZero /> }
      else {
        encoding_cp[i] = level ? <TickZero /> : <TickOne />;
        level = !level
      }
    }
    this.setState({ nrzL: encoding_cp });
  }

  encodeNRZM(value) {
    let encoding_cp = Array(16).fill(<Empty />);
    let level
    for (var i = 0; i < value.length; i++) {
      if (i === 0) {
        if (value.charAt(i) === '1') {
          encoding_cp[i] = <ConstOne />
          level = true
        } else {
          encoding_cp[i] = <ConstZero />
          level = false
        }
        continue
      }
      if (value.charAt(i) === '1') {
        encoding_cp[i] = level ? <TickZero /> : <TickOne />
        level = !level
      } else {
        encoding_cp[i] = level ? <ConstOne /> : <ConstZero />
      }
    }
    this.setState({ nrzM: encoding_cp });
  }

  encodeNRZS(value) {
    let encoding_cp = Array(16).fill(<Empty />);
    let level
    for (var i = 0; i < value.length; i++) {
      if (i === 0) {
        if (value.charAt(i) === '1') {
          encoding_cp[i] = <ConstOne />
          level = true
        } else {
          encoding_cp[i] = <ConstZero />
          level = false
        }
        continue
      }
      if (value.charAt(i) === '0') {
        encoding_cp[i] = level ? <TickZero /> : <TickOne />
        level = !level
      } else {
        encoding_cp[i] = level ? <ConstOne /> : <ConstZero />
      }
    }
    this.setState({ nrzS: encoding_cp });
  }

  encodeManchester(value) {
    let encoding_cp = Array(16).fill(<Empty />);
    let level
    for (var i = 0; i < value.length; i++) {
      if (i === 0) {
        if (value.charAt(i) === '1') {
          encoding_cp[i] = <BiphaseOne />
          level = true
        } else {
          encoding_cp[i] = <BiphaseZero />
          level = false
        }
        continue
      }
      if (value.charAt(i) === '0') {
        encoding_cp[i] = level ? <BiphaseZero /> : <TickBiphaseZero />
        level = false
      } else {
        encoding_cp[i] = level ? <TickBiphaseOne /> : <BiphaseOne />
        level = true
      }
    }
    this.setState({ manchester: encoding_cp });
  }

  encodeBiphaseM(value) {
    let encoding_cp = Array(16).fill(<Empty />);
    let level
    for (var i = 0; i < value.length; i++) {
      if (i === 0) {
        if (value.charAt(i) === '1') {
          encoding_cp[i] = <BiphaseZero />
          level = false
        } else {
          encoding_cp[i] = <ConstOne />
          level = true
        }
        continue
      }
      if (value.charAt(i) === '1') {
        encoding_cp[i] = level ? <TickBiphaseOne /> : <TickBiphaseZero />
      } else {
        encoding_cp[i] = level ? <TickZero /> : <TickOne />
        level = !level
      }
    }
    this.setState({ biphaseM: encoding_cp });
  }

  encodeBiphaseS(value) {
    let encoding_cp = Array(16).fill(<Empty />);
    let level
    for (var i = 0; i < value.length; i++) {
      if (i === 0) {
        if (value.charAt(i) === '0') {
          encoding_cp[i] = <BiphaseZero />
          level = false
        } else {
          encoding_cp[i] = <ConstOne />
          level = true
        }
        continue
      }
      if (value.charAt(i) === '0') {
        encoding_cp[i] = level ? <TickBiphaseOne /> : <TickBiphaseZero />
      } else {
        encoding_cp[i] = level ? <TickZero /> : <TickOne />
        level = !level
      }
    }
    this.setState({ biphaseS: encoding_cp });
  }
}