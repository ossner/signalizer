import React from "react";

export default class BinaryInput extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.props.value} onSubmit={this.handleSubmit} onChange={(e) => this.props.onChange(e.target.value)}/>
            </form>
        );
    } 
}