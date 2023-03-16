/**
 *
 * @summary contains the component for the value input
 * @author roja1017 <roja1017@h-ka.de>
 *
 * Created:       : 2022-10-23
 * Last modified  : 2023-02-03
 */

import React from "react";
import helpicon from "./images/help.png"
import "./ValueInput.css"
import "./ToolTip.css"
import { get_tooltip_text } from "./ToolTipTextProvider";


class ValueInput extends React.Component {
    /*
    * The class defines the TextInput as an text input field.
    * Also it provides the input to the parent component via data binding
    */

    constructor(props) {
        super(props)

        /* declare the binding methods to recieve the input of the ValueInput component 
        * and the optional text input field
        */
        this.handleChange = this.handleChange.bind(this)
        this.handleTextInputChange = this.handleTextInputChange.bind(this)

        // set the initial states to the handed parameters
        this.state = {
            entries: props.entries,
            selected: Object.keys(props.entries)[0],
            visible: props.visible,
            value_dropdown: Object.values(props.entries)[0],
            value_textfield: props.defaultTextfieldValue,
            max: props.max,
            min: props.min
        }

    }

    handleChange = (event) => {
        /* define the handle functions for the data binding of the dropdown menus
        * also handles the appearance of the optional text input field
        */

        let has_right_value = event.target.value.includes("=")

        this.setState({ visible: has_right_value })
        this.setState({ selected: event.target.value })
        this.setState({ value_dropdown: this.props.entries[event.target.value] })
        this.props.onInputChange(this.props.entries[event.target.value]);

    }

    handleTextInputChange = (event) => {
        /* define the handle functions for the data binding
        * catches wrong inputs in the text field and handles them
        */

        if (event.target.value === "") {
            this.setState({ value_textfield: "" })
        } else {
            let value = Math.max(this.state.min, Math.min(this.state.max, Number(event.target.value)));
            this.setState({ value_textfield: value })
            this.props.onTextInputChange(value)
        }
    }

    render() {
        // renders the dropdown menu, the tooltip text and the optional text input field

        let toolTipText = get_tooltip_text(this.props.legend);

        return (
            <>
                <div className="grid-container">


                    <legend className="legend-dropdown">{this.props.legend}<div className="tooltip"><img src={helpicon} alt="help" className="helpicon" /><span className="tooltiptext">{toolTipText}</span></div></legend>

                    <select className="dropdown" onChange={this.handleChange} value={this.state.selected}>
                        {Object.keys(this.state.entries).map((key) => <option key={key}>{key}</option>)}
                    </select>
                    {this.state.visible && <input type="number" min={0} value={this.state.value_textfield} className="textinputdropdown" onChange={this.handleTextInputChange} />}

                    {this.state.visible && <div className="days">days</div>}
                </div>
            </>
        )
    }
}




export default ValueInput