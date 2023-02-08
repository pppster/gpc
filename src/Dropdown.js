import React from "react";
import helpicon from "./help.png"
import "./Dropdown.css"
import "./ToolTip.css"
import {get_tooltip_text} from "./ToolTipText";


class Dropdown extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleTextInputChange = this.handleTextInputChange.bind(this)
        this.state ={
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
        let has_right_value = event.target.value.includes("=")
        
        this.setState({visible: has_right_value})
        this.setState({selected: event.target.value})
        this.setState({value_dropdown: this.props.entries[event.target.value]})
        this.props.onInputChange(this.props.entries[event.target.value]);  
        
    }

    handleTextInputChange = (event) => {
        if (event.target.value === ""){
            this.setState({value_textfield: ""})
        } else{
            let value = Math.max(this.state.min, Math.min(this.state.max, Number(event.target.value)));
            this.setState({value_textfield: value})
            this.props.onTextInputChange(value)
        }
    }


    



    render(){
        let texti = get_tooltip_text(this.props.legend);
        
        return (
            <>
            <div className="grid-container">
            

                <legend className="legend-dropdown">{this.props.legend}<div className="tooltip"><img src={helpicon} alt="help" className="helpicon"/><span className="tooltiptext">{texti}</span></div></legend>
                
                <select className="dropdown" onChange={this.handleChange} value={this.state.selected}>
                    {/* {this.state.entries.map((key) => <option>{key}</option>)} */}
                    {Object.keys(this.state.entries).map((key) => <option key={key}>{key}</option>)}
                </select>
                {this.state.visible && <input type="number" min={0} value={this.state.value_textfield} className="textinputdropdown" onChange={this.handleTextInputChange}/>}
                
                {this.state.visible && <p className="days">days</p>}
                </div>
            </>
        )
    }
}




export default Dropdown