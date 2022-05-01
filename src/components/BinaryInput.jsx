import React from "react";
import RICIBs from 'react-individual-character-input-boxes';
import "./BinaryInput.css"

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
            <div className="container">
                <div>
                    <RICIBs amount={16} handleOutputString={this.props.onChange} inputRegExp={/^[01]$/} autoFocus={true} inputProps={[
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                        { className: "box" },
                    ]} />
                </div>
            </div>
        );
    }
}