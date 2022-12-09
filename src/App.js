import React from "react";
import Header from "./Header";
import GracePeriodCalculation from "./GracePeriodCalculation";
import GracePeriodVisualization from "./GracePeriodVisualization";
import"./App.css"



const RV = {
  "Medium" : 0.7272,
  "High" : 0.8636,
  "Very High" : 1
}
const SCOPE ={
  "Unchanged" : 0,
  "Changed" : 1
}
const EM = {
  "Not defined" : 1,
  "High" : 1,
  "Functional" : 0.97,
  "Proof of Concept" : 0.94,
  "Unproven" : 0.91
}
const RL = {
  "Not defined" : 1,
  "Unavailable" : 1,
  "Workaround" : 0.97,
  "Temporary Fix" : 0.96,
  "Official Fix" : 0.95
}
const RC = {
  "Not defined" : 1,
  "Confirmed" : 1,
  "Reasonable": 0.96,
  "Unknown": 0.92
}
const ED = {
  "Unclear": 1,
  "External - Black market" : 1,
  "External - Proof of concept": 0.96,
  "External - not public": 0.91
}
const ISC = {
  "Unclear": 1,
  "High": 1,
  "Medium": 0.97,
  "Low": 0.95
}
const SCS = {
  "Low": 0,
  "Medium": 0.037057,
  "High": 0.074113,
  "Very high": 0.11117
}
const R = {
  "None R=": 0,
  "No access required": 0,
  "Immediately R=": 0,
  "Not determined": 0.11117,
  "Determined Y=": 1
}
const APP = {
  "None": 0,
  "Extension": 1,
  "Renewal": 1,
}
const CA = {
  "None": 0,
  "CAL1": 0,
  "CAL2": 0,
  "CAL3": 0.693,
  "CAL4": 0.11117
}


class App extends React.Component{
  constructor(props){
    super(props)

    this.currentData = React.createRef()


    this.handlePCFChange = this.handlePCFChange.bind(this)
    this.handleTCFChange = this.handleTCFChange.bind(this)
    this.handleGPChange = this.handleGPChange.bind(this)
    this.handleTimeGPChange = this.handleTimeGPChange.bind(this)
    this.handleScopeChange = this.handleScopeChange.bind(this)
    this.state = {
      PCF: 0,
      TCF: 0,
      GP: 0,
      TimeGP: 0,
      Scope: 0
    }

  }

  handlePCFChange(value){
    this.setState({PCF: value})
  }
  handleTCFChange(value){
    this.setState({TCF: value})
  }
  handleGPChange(value){
    this.setState({GP: value})
  }
  handleTimeGPChange(value){
    this.setState({TimeGP: value})
  }
  handleScopeChange(value){
    this.setState({Scope: value})
  }
  componentDidMount() {
    document.title = "Grace Period Calculator";
  }


  render(){
    return (
      <>
      <Header/>
      {/* <div>PCF: {this.state.PCF.toFixed(2)} --- TCF: {this.state.TCF.toFixed(2)} --- GP: {this.state.GP.toFixed(2)} --- TimeGP: {this.state.TimeGP.toFixed(2)}</div> */}
      <div className="grid-app" >
        <GracePeriodCalculation className="grace-period-calculation"
            T0={100} legendT0="Default Grace Period T0"
            RV={RV} legendRV="Vulnerability Risk Value RV"
            Scope={SCOPE} legendScope="Scope S"
            EM={EM} legendEM="Exploit Code Maturity EM"
            RL={RL} legendRL="Remediation Level RL"
            RC={RC} legendRC="Report Confidence RC"
            ED={ED} legendED="Exploit Code Dissemination ED"
            ISC={ISC} legendISC="Incident Scale ISC"
            SCS={SCS} legendSCS= "Supply Chain Scale SCS"
            R={R} legendR="Remedation Dissemination R"
            APP={APP} legendAPP="Certification & Approval APP"
            CA={CA} legendCA="Contractual Agreements (CIAs) CA"
            onTCFChange={this.handleTCFChange}
            onPCFChange={this.handlePCFChange}
            onGPChange={this.handleGPChange}
            onTimeGPChange={this.handleTimeGPChange}
            onScopeChange={this.handleScopeChange}
            />
        <GracePeriodVisualization 
            className="grace-period-visualization"
            ref={this.currentData}
            PCF = {this.state.PCF}
            TCF = {this.state.TCF}
            GP = {this.state.GP}
            TimeGP = {this.state.TimeGP}
            Scope = {this.state.Scope}
            />
      </div>
      </>
    )

  }
}

export default App;
