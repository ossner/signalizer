import React from "react";
import './Row.css'

export class Encoding extends React.Component {
    render() {
        return (
                this.props.data
        )
    }
}

export function Empty() {
    return (
        <div className="grid">
            <div style={{
                borderBottom: '1px solid #202124',
            }} />
            <div style={{
                borderBottom: '1px solid #202124',
            }} />
            <div />
            <div />
        </div>
    )
}

export function TickOne() {
    return (
        <div className="grid">
            <div style={{
                borderLeft: '2px solid #ff79c6',
                borderTop: '2px solid #ff79c6',
                borderBottom: '1px solid #202124',
            }} />
            <div style={{
                borderTop: '2px solid #ff79c6',
                borderBottom: '1px solid #202124',
            }} />
            <div style={{
                borderLeft: '2px solid #ff79c6',
            }} />
            <div />
        </div>
    )
}

export function TickZero() {
    return (
        <div className="grid">
            <div style={{
                borderBottom: '1px solid #202124',
                borderLeft: '2px solid #ff79c6',
            }} />
            <div style={{
                borderBottom: '1px solid #202124',
            }} />
            <div style={{
                borderLeft: '2px solid #ff79c6',
                borderBottom: '2px solid #ff79c6',
            }} />
            <div style={{
                borderBottom: '2px solid #ff79c6',
            }} />
        </div>
    )
}

export function ConstOne() {
    return (
        <div className="grid">
            <div style={{
                borderTop: '2px solid #ff79c6',
                borderBottom: '1px solid #202124',
            }} />
            <div style={{
                borderTop: '2px solid #ff79c6',
                borderBottom: '1px solid #202124',
            }} />
            <div style={{
            }} />
            <div style={{
            }} />
        </div>
    )
}

export function ConstZero() {
    return (
        <div className="grid">
            <div style={{
                borderBottom: '1px solid #202124',
            }} />
            <div style={{
                borderBottom: '1px solid #202124',
            }} />
            <div style={{
                borderBottom: '2px solid #ff79c6',
            }} />
            <div style={{
                borderBottom: '2px solid #ff79c6',
            }} />
        </div>
    )
}

export function BiphaseOne() {
    return (
        <div className="grid">
            <div style={{
                borderBottom: '1px solid #202124',
            }} />
            <div style={{
                borderBottom: '1px solid #202124',
                borderLeft: '2px solid #ff79c6',
                borderTop: '2px solid #ff79c6',
            }} />
            <div style={{
                borderBottom: '2px solid #ff79c6',
            }} />
            <div style={{
                borderLeft: '2px solid #ff79c6',
            }} />
        </div>
    )
}

export function BiphaseZero() {
    return (
        <div className="grid">
            <div style={{
                borderTop: '2px solid #ff79c6',
                borderBottom: '1px solid #202124',
            }} />
            <div style={{
                borderBottom: '1px solid #202124',
                borderLeft: '2px solid #ff79c6',
            }} />
            <div style={{
            }} />
            <div style={{
                borderLeft: '2px solid #ff79c6',
                borderBottom: '2px solid #ff79c6'
            }} />
        </div>
    )
}

export function TickBiphaseOne() {
    return (
        <div className="grid">
            <div style={{
                borderLeft: '2px solid #ff79c6',
                borderBottom: '1px solid #202124',
            }} />
            <div style={{
                borderLeft: '2px solid #ff79c6',
                borderBottom: '1px solid #202124',
                borderTop: '2px solid #ff79c6',
            }} />
            <div style={{
                borderLeft: '2px solid #ff79c6',
                borderBottom: '2px solid #ff79c6',
            }} />
            <div style={{
                borderLeft: '2px solid #ff79c6',
            }} />
        </div>
    )
}

export function TickBiphaseZero() {
    return (
        <div className="grid">
            <div style={{
                borderLeft: '2px solid #ff79c6',
                borderTop: '2px solid #ff79c6',
                borderBottom: '1px solid #202124',
            }} />
            <div style={{
                borderBottom: '1px solid #202124',
                borderLeft: '2px solid #ff79c6',
            }} />
            <div style={{
                borderLeft: '2px solid #ff79c6',
            }} />
            <div style={{
                borderLeft: '2px solid #ff79c6',
                borderBottom: '2px solid #ff79c6',
            }} />
        </div>
    )
}


