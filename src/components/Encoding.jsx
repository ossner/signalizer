import React from "react";
import './Row.css'

export default class Encoding extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '1em' }}>
                {this.props.data}
            </div >
        )
    }
}

export function Empty() {
    return (
      <div className="grid">
        <div style={{
          borderBottom: '1px solid #202124'
        }}></div>
        <div style={{
          borderBottom: '1px solid #202124'
        }}></div>
        <div></div>
        <div></div>
      </div>
    )
}

export function TickOne() {
    return <div></div>
}

export function TickZero() {
    return <div></div>
}

export function ConstOne() {
    return <div></div>
}

export function ConstZero() {
    return <div></div>
}

export function BiphaseOne() {
    return <div></div>
}

export function BiphaseZero() {
    return <div></div>
}

