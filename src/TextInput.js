import React from "react";
import helpicon from "./help.png"
import "./ToolTip.css"
import "./TextInput.css"
import {get_tooltip_text} from "./ToolTipText";


class TextInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state ={
            visible: props.visible,
            value: props.defaultValue,
            max: props.max,
            min: props.min
        }

    }
    handleChange = (event) => {
        if (event.target.value === ""){
            this.setState({value: ""});
        } else{
            let value = Math.max(this.state.min, Math.min(this.state.max, Number(event.target.value)));
            this.setState({value: value});
            this.props.onInputChange(value);
        }
        
    }

    render(){
        let texti = get_tooltip_text(this.props.legend);
        
        return (
            <>
            <div className="grid-container">
                <legend className="legend-dropdown"><nobr dangerouslySetInnerHTML={{ __html: this.props.legend }} ></nobr><div className="tooltip"><img src={helpicon} alt="help" className="helpicon"/><span className="tooltiptext">{texti}</span></div></legend>
                <input type="number" className="textinput" onChange={this.handleChange} value={this.state.value}/>
                <p className="days">days</p>
            </div>
                
            </>
        )

    }
}

export default TextInput