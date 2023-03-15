/**
 *
 * @summary component for text inputs
 * @author roja1017 <roja1017@h-ka.de>
 *
 * Created:       : 2022-10-27
 * Last modified  : 2023-03-08
 */

import React from "react";
import helpicon from "./images/help.png"
import "./ToolTip.css"
import "./TextInput.css"
import { get_tooltip_text } from "./ToolTipTextProvider";


class TextInput extends React.Component {
    /*
    * The class defines the TextInput as an text input field.
    * Also it provides the input to the parent component via data binding
    */

    constructor(props) {
        super(props)

        // declare the binding methods to recieve the input of the TextInput component
        this.handleChange = this.handleChange.bind(this)

        // set the initial states to the handed parameters
        this.state = {
            visible: props.visible,
            value: props.defaultValue,
            max: props.max,
            min: props.min
        }

    }
    handleChange = (event) => {
        /* define the handle functions for the data binding
        * catches wrong inputs in the text field and handles them
        */

        if (event.target.value === "") {
            this.setState({ value: "" });
        } else {
            let value = Math.max(this.state.min, Math.min(this.state.max, Number(event.target.value)));
            this.setState({ value: value });
            this.props.onInputChange(value);
        }

    }

    render() {
        // renders the text input field and the tooltip text

        let toolTipText = get_tooltip_text(this.props.legend);

        return (
            <>
                <div className="grid-container">
                    <legend className="legend-dropdown"><nobr dangerouslySetInnerHTML={{ __html: this.props.legend }} ></nobr><div className="tooltip"><img src={helpicon} alt="help" className="helpicon" /><span className="tooltiptext">{toolTipText}</span></div></legend>
                    <input type="number" className="textinput" onChange={this.handleChange} value={this.state.value} />
                    <p className="days">days</p>
                </div>

            </>
        )

    }
}

export default TextInput