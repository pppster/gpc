/**
 *
 * @summary Component to display the calculation results
 * @author roja1017 <roja1017@h-ka.de>
 *
 * Created:       : 2022-10-23
 * Last modified  : 2023-01-15
 */

import React from "react";
import helpicon from "./images/help.png"


class DisplayValues extends React.Component {
    /*
    * The class displays the results of the calculation.
    * It also provides explanation of the parameters.
    */

    constructor(props) {
        super(props)
        this.state = {
            explain_text: props.explain_text,
            content: props.content
        }

    }

    componentDidUpdate(prevProps) {
        // the method checks if there are new values available and updates the component in case

        if (prevProps.content !== this.props.content || prevProps.explain_text !== this.props.explain_text) {
            this.setState({ content: this.props.content })
            this.setState({ explain_text: this.props.explain_text })
        }
    }


    render() {
        // renders the results of the calculation in a table and provides the associated explanations

        return (
            <>
                <p>{this.state.explain_text}</p>
                <table className="ResultTable">
                    <tbody>
                        {this.state.content.map(({ id, value, helptext, unit }) => (
                            <tr key={id}>
                                <td className="td-text"><nobr dangerouslySetInnerHTML={{ __html: id }}></nobr><div className="tooltip"><img src={helpicon} alt="help" className="helpicon" /><span className="tooltiptext">{helptext}</span></div></td>
                                <td className="td-value">{value} {unit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}




export default DisplayValues