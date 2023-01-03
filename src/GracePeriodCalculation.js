import React from "react";
import Dropdown from "./Dropdown";
import TextInput from "./TextInput";
import {calculate_PCF, calculate_TCF, calculate_grace_period, calculate_gp_time} from './functions'
import {get_explanation_text} from "./ExplanationTexts"

import "./Button.css"
import "./GracePeriodCalculation.css"

class GracePeriodCalculation extends React.Component{
    constructor(props){
        super(props);
        this.handleRVChange = this.handleRVChange.bind(this)
        this.handleScopeChange = this.handleScopeChange.bind(this)
        this.handleEMChange = this.handleEMChange.bind(this)
        this.handleRLChange = this.handleRLChange.bind(this)
        this.handleRCChange = this.handleRCChange.bind(this)
        this.handleEDChange = this.handleEDChange.bind(this)
        this.handleISCChange = this.handleISCChange.bind(this)
        this.handleSCSChange = this.handleSCSChange.bind(this)
        this.handleRChange = this.handleRChange.bind(this)
        this.handleAPPChange = this.handleAPPChange.bind(this)
        this.handleCAChange = this.handleCAChange.bind(this)
        this.handleT0Change = this.handleT0Change.bind(this)
        this.handleRPeriodValue = this.handleRPeriodValue.bind(this)
        this.handleAPPRenewalValue = this.handleAPPRenewalValue.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.state ={
            RVValue: Object.values(props.RV)[0],
            Scope: Object.values(props.Scope)[0],
            EMValue: Object.values(props.EM)[0],
            RLValue: Object.values(props.RL)[0],
            RCValue: Object.values(props.RC)[0],
            EDValue: Object.values(props.ED)[0],
            ISCValue: Object.values(props.ISC)[0],
            SCSValue: Object.values(props.SCS)[0],
            RValue: Object.values(props.R)[0],
            APPValue: Object.values(props.APP)[0],
            CAValue: Object.values(props.CA)[0],
            TCFValue: 0,
            PCFValue: 0,
            GPValue: 0,
            T_GPValue: 0,
            T_0Value: this.props.T0,
            R_period_value: 10,
            App_renewal_value: 10,
            change: false,
        }
    }
    componentDidUpdate(prevProps) {
    }


    handleRVChange(value) {
        this.setState({RVValue: value});
        this.setState({change: true});
    }
    handleScopeChange(value) {
        this.setState({Scope: value});
        this.setState({change: true});
    }
    handleEMChange(value) {
        this.setState({EMValue: value});
        this.setState({change: true});
    }
    handleRLChange(value) {
        this.setState({RLValue: value});
        this.setState({change: true});
    }
    handleRCChange(value) {
        this.setState({RCValue: value});
        this.setState({change: true});
    }
    handleEDChange(value) {
        this.setState({EDValue: value});
        this.setState({change: true});
    }
    handleISCChange(value) {
        this.setState({ISCValue: value});
        this.setState({change: true});
    }
    handleSCSChange(value) {
        this.setState({SCSValue: value});
        this.setState({change: true});
    }
    handleRChange(value) {
        this.setState({RValue: value});
        this.setState({change: true});
    }
    handleAPPChange(value) {
        this.setState({APPValue: value});
        this.setState({change: true});
    }
    handleCAChange(value) {
        this.setState({CAValue: value});
        this.setState({change: true});
    }
    handleT0Change(value) {
        this.setState({T_0Value: value});
        this.setState({change: true});
    }
    handleRPeriodValue(value) {
        this.setState({R_period_value: value});
        this.setState({change: true});
    }
    handleAPPRenewalValue(value) {
        this.setState({App_renewal_value: value});
        this.setState({change: true});
    }

    handleButtonClick(){
        let loc_tcf = calculate_TCF(this.state.RVValue, this.state.EMValue, this.state.RLValue, this.state.RCValue, this.state.EDValue, this.state.ISCValue);
        let loc_pcf = calculate_PCF(this.state.RValue, this.state.SCSValue, this.state.CAValue);
        let loc_gp = calculate_grace_period(this.state.Scope, loc_tcf, loc_pcf);

        
        let loc_tgp = calculate_gp_time(this.state.RValue, this.state.T_0Value, loc_gp, this.state.APPValue,this.state.App_renewal_value, this.state.R_period_value);
        let loc_scope = this.state.Scope;
        this.setState({TCFValue: loc_tcf});
        this.setState({PCFValue: loc_pcf});
        this.setState({GPValue: loc_gp});
        this.setState({T_GPValue: loc_tgp});
        this.setState({change: false})
        this.props.onTCFChange(loc_tcf);
        this.props.onPCFChange(loc_pcf);
        this.props.onGPChange(loc_gp);
        this.props.onTimeGPChange(loc_tgp);
        this.props.onScopeChange(loc_scope);

    }

      render(){

        return (
            <>
            <fieldset className="dataInput">
            
            
            <div className="Explanation">{get_explanation_text("Instruction")}</div>
                <br/>
                <legend className="GPC-legend">Data Input</legend>
                <TextInput
                    legend={this.props.legendT0}
                    defaultValue={this.props.T0}
                    onInputChange={this.handleT0Change}
                    min={1}
                    max={10000}/>
                <Dropdown
                    entries={this.props.RV}
                    legend={this.props.legendRV}
                    onInputChange={this.handleRVChange}
                    visible={false}
                    />
                <Dropdown
                    entries={this.props.Scope}
                    legend={this.props.legendScope}
                    onInputChange={this.handleScopeChange}
                    visible={false}
                    />
                <Dropdown
                    entries={this.props.EM}
                    legend={this.props.legendEM}
                    onInputChange={this.handleEMChange}
                    visible={false}
                    />
                <Dropdown
                    entries={this.props.RL}
                    legend={this.props.legendRL}
                    onInputChange={this.handleRLChange}
                    visible={false}
                    />
                <Dropdown
                    entries={this.props.RC}
                    legend={this.props.legendRC}
                    onInputChange={this.handleRCChange}
                    visible={false}
                    />
                <Dropdown
                    entries={this.props.ED}
                    legend={this.props.legendED}
                    onInputChange={this.handleEDChange}
                    visible={false}
                    />
                <Dropdown
                    entries={this.props.ISC}
                    legend={this.props.legendISC}
                    onInputChange={this.handleISCChange}
                    visible={false}
                    />
                <Dropdown
                    entries={this.props.SCS}
                    legend={this.props.legendSCS}
                    onInputChange={this.handleSCSChange}
                    visible={false}
                    />
                <Dropdown
                    entries={this.props.R}
                    legend={this.props.legendR}
                    onInputChange={this.handleRChange}
                    onTextInputChange={this.handleRPeriodValue}
                    defaultTextfieldValue={this.state.R_period_value}
                    visible={false}
                    min={1}
                    max={10000}
                    />
                <Dropdown
                    entries={this.props.APP}
                    legend={this.props.legendAPP}
                    onInputChange={this.handleAPPChange}
                    onTextInputChange={this.handleAPPRenewalValue}
                    defaultTextfieldValue={this.state.App_renewal_value}
                    visible={false}
                    min={1}
                    max={10000}
                    />
                
                <Dropdown
                    entries={this.props.CA}
                    legend={this.props.legendCA}
                    onInputChange={this.handleCAChange}
                    visible={false}
                    />

            <p>
                <button type="button" onClick={this.handleButtonClick}>Calculate</button>
                {this.state.change && <text className="ChangeText">You have made some changes. Please press the calculate button again.</text>}
            </p>
            </fieldset>
            </>

        )
      }
}

export default GracePeriodCalculation