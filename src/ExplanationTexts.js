
function get_explanation_text(name){
    let explanation_text = "";
    if (name.includes("Instruction")){
        explanation_text = get_text_instruction();
    } else if (name.includes("text_results_not_pressed")){
        explanation_text = get_text_results_not_pressed();
    }else if (name.includes("text_results_pressed")){
        explanation_text = get_text_results_pressed();
    }else if (name.includes("visualization_results_not_pressed")){
        explanation_text = get_vizualization_results_not_pressed();
    }else if (name.includes("visualization_results_pressed")){
        explanation_text = get_vizualization_results_pressed();
    }
    return explanation_text;
}

function get_text_instruction(){
    let tooltip_string =   <div>
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
function get_vizualization_results_not_pressed(){
    let tooltip_string =   <div>
    The calculation results will be visualized here once you pressed the <b>Calculate</b> Button. 
    </div>
    ;
    return tooltip_string; 
}
function get_vizualization_results_pressed(){
    let tooltip_string =   <div>
    The calculated Grace Period is visualized to roughly estimate the urgency to fix the vulnerability.
    </div>
    ;
    return tooltip_string; 
}

function get_text_results_not_pressed(){
    let tooltip_string =   <div>
    <p>There are no calculation results yet. Please press the <b>Calculate</b> Button. </p>
    </div>
    ;
    return tooltip_string; 
}
function get_text_results_pressed(){
    let tooltip_string =   <div>
   The calculation results are shown here:  
    </div>
    ;
    return tooltip_string; 
}

export {get_explanation_text}