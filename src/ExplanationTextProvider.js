/**
 *
 * @summary Provider Class for Explanation Texts
 * @author keju1011 <keju1011@h-ka.de>
 *
 * Created:       : 2022-10-23
 * Last modified  : 2023-01-15
 */

function get_explanation_text(name) {
    // function returns the right explanation text depending on presence of calculation results

    let explanation_text = "";
    if (name.includes("Instruction")) {
        explanation_text = get_text_instruction();
    } else if (name.includes("text_results_not_pressed")) {
        explanation_text = get_text_results_not_pressed();
    } else if (name.includes("text_results_pressed")) {
        explanation_text = get_text_results_pressed();
    } else if (name.includes("visualization_results_not_pressed")) {
        explanation_text = get_vizualization_results_not_pressed();
    } else if (name.includes("visualization_results_pressed")) {
        explanation_text = get_vizualization_results_pressed();
    }
    return explanation_text;
}

// functions that return the explanation texts in html format
function get_text_instruction() {
    let tooltip_string = <div>
        <span>Please complete the following steps:</span><br />
        <ol>
            <li>For every Parameter, chose a suitable answer at the <b>Dropdown</b> Menus.
                Help is provided by the Tooltips on the Question Marks.
            </li>
            <li>If every item is filled out, click on the <b>Calculate</b> Button.</li>
            <li>Take a look at the <b>Results</b> on the righthand side.</li>
        </ol>
    </div>
        ;
    return tooltip_string;
}
function get_vizualization_results_not_pressed() {
    let tooltip_string = <div>
        <p>
            The calculated Grace Period Factor GP is visualized to roughly estimate the reasonable time to remediate the given vulnerability.
            Shown below are all calculation results for GP sorted in ascending order.<br></br>
            Once you pressed press the <b>Calculate</b> Button, the calculated result will be shown in the plot.

        </p>
    </div>
        ;
    return tooltip_string;
}
function get_vizualization_results_pressed() {
    let tooltip_string = <div>
        <p>
            The calculated Grace Period Factor GP is visualized to roughly estimate the reasonable time to remediate the given vulnerability.
            Shown below are all calculation results for GP sorted in ascending order.<br></br>
            The calculated Grace Period Factor is shown in the plot.
        </p>
    </div>
        ;
    return tooltip_string;
}

function get_text_results_not_pressed() {
    let tooltip_string = <div>
        <p>There are no calculation results yet. Please press the <b>Calculate</b> Button. </p>
    </div>
        ;
    return tooltip_string;
}
function get_text_results_pressed() {
    let tooltip_string = <div>
        The calculation results are shown here:
    </div>
        ;
    return tooltip_string;
}

export { get_explanation_text }