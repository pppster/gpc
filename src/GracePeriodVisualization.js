import React from "react";
import Plot from 'react-plotly.js';
import { get_gp_values_to_plot, calc_prob_value_list, calc_prob_value } from './functions'
import "./GracePeriodVisualization.css"
import helpicon from "./help.png"
import "./ToolTip.css"
import { get_tooltip_text } from "./ToolTipText";
import {get_explanation_text} from "./ExplanationTexts"

class GracePeriodVisualization extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            PCF: props.PCF,
            TCF: props.TCF,
            TimeGP: props.TimeGP,
            GP: props.GP,
            Scope: 0,
            gps: [],
            probs_scope_unchanged: [],
            probs_scope_changed: []
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.TCF !== this.props.TCF || prevProps.PCF !== this.props.PCF || prevProps.GP !== this.props.GP || prevProps.TimeGP !== this.props.TimeGP|| prevProps.Scope !== this.props.Scope) {
            this.setState({ TCF: this.props.TCF })
            this.setState({ PCF: this.props.PCF })
            this.setState({ GP: this.props.GP })
            this.setState({ TimeGP: this.props.TimeGP })
            this.setState({ Scope: this.props.Scope})
        }
    }
    


    render() {
        let is_first_time = typeof this.gps === 'undefined';
        let plot_data = [];
        let prob_gp = 0;
        let content = 0;
        let explain_text = "";
        let visual_text = "";
        
        console.log(plot_data);
        if (this.state.Scope === 1){
            prob_gp = calc_prob_value(this.state.GP, true);
        } else {
            prob_gp = calc_prob_value(this.state.GP, false);
        }
        
        if (is_first_time){

            this.gps = get_gp_values_to_plot();
            this.probs_scope_unchanged = calc_prob_value_list(this.gps, false);
            this.probs_scope_changed = calc_prob_value_list(this.gps, true);
            content = [
                { id: "Time GP  ", value: '-',helptext:get_tooltip_text("TGP"),unit:""},
                { id: "Grace Period Factor GP  ", value: '-',helptext:get_tooltip_text("GP"),unit:""},
                { id: "Process Criticality Factor PCF  ", value: '-',helptext:get_tooltip_text("PCF"),unit:""},
                { id: "Time Criticality Factor TCF  ", value: '-',helptext:get_tooltip_text("TCF"),unit:""},
            ];
            explain_text = get_explanation_text("text_results_not_pressed");
            visual_text = get_explanation_text("visualization_results_not_pressed");
            plot_data = [
                {
                    x: this.probs_scope_changed,
                    y: this.gps,
                    type: 'line',
                    name: 'Scope changed',
                    line: {
                        color: 'rgba(200, 115, 115, 0.522)',
                        width: 3
                      },
                    hovertemplate: this.gps,
                },
                {
                    x: this.probs_scope_unchanged,
                    y: this.gps,
                    type: 'line',
                    name: 'Scope unchanged',
                    line: {
                        color: 'rgb(141, 139, 139)',
                        width: 3
                      },
                    hovertemplate: this.gps,
        
                },
                
            ];

        }else {
            content = [
                { id: "Time GP  ", value: (this.props.TimeGP),helptext:get_tooltip_text("TGP"),unit:" days"},
                { id: "Grace Period Factor GP  ", value: (this.props.GP).toFixed(2),helptext:get_tooltip_text("GP"),unit:""},
                { id: "Process Criticality Factor PCF  ", value: (this.props.PCF).toFixed(2),helptext:get_tooltip_text("PCF"),unit:""},
                { id: "Time Criticality Factor TCF  ", value: (this.props.TCF).toFixed(2),helptext:get_tooltip_text("TCF"),unit:""},
            ];
            explain_text = get_explanation_text("text_results_pressed");
            visual_text = get_explanation_text("visualization_results_pressed");
            plot_data = [
                {
                    x: this.probs_scope_changed,
                    y: this.gps,
                    type: 'line',
                    name: 'Scope changed',
                    line: {
                        color: 'rgba(200, 115, 115, 0.522)',
                        width: 3
                      },
                    hovertemplate: this.gps,
                },
                {
                    x: this.probs_scope_unchanged,
                    y: this.gps,
                    type: 'line',
                    name: 'Scope unchanged',
                    line: {
                        color: 'rgb(141, 139, 139)',
                        width: 3
                      },
                    hovertemplate: this.gps,
        
                },
                {
                    x: [prob_gp],
                    y: [this.state.GP],
                    mode: 'markers',
                    type: 'scatter',
                    name: 'Current GP',
                    hovertemplate: this.state.GP,
                    marker : {
                        color: 'black',
                        symbol: 'diamond' },
                }
                
            ];

        }
        


        return (
            <fieldset className="visualization">
                <legend className="GPV-legend">Calculation Results</legend>
                <p>{explain_text}</p>
                <table className="ResultTable">
                <tbody>
                    {content.map(({id, value,helptext,unit}) => (
                    <tr key={id}>
                        <td>{id}<div className="tooltip"><img src={helpicon} alt="help" className="helpicon"/><span className="tooltiptext">{helptext}</span></div></td>
                        <td>{value}</td>
                        <td>{unit}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
                <p>{visual_text}</p>
                <Plot
                    className="plot"
                    data={plot_data}
                    config={{
                        displayModeBar:false  
                      }}
                    layout={{
                        hovermode:'closest',
                        autosize: true, 
                        margin:{
                            t: 5,
                        },
                        
                        legend: {
                            xanchor: "center",
                            yanchor: "top", 
                            y: -0.2, 
                            x: 0.5,
                            orientation:"h"
                        },
                        xaxis: {
                            fixedrange: true,
                            range: [-0.01, 1.01],
                            tickmode:Array,
                            tickvals:[]
                        },
                        
                        yaxis: {
                            title: "Grace Period Value GP",
                            fixedrange: true,
                            range: [0.99,2.01]
                        },
                        // margin: {
                        //     l: 50,
                        //     r: 50,
                        //     b: 50,
                        //     t: 20,
                        //     pad: 4
                        // },
                        
                    }}
                />
            </fieldset>
        )
    }
        
    }

export default GracePeriodVisualization