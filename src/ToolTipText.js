

function get_tooltip_text(name){
    let tooltip_string = "";
    if (name.includes("TGP")){
        tooltip_string = get_tooltip_text_TGP();
    }else if (name.includes("PCF")){
        tooltip_string = get_tooltip_text_PCF();
    }else if (name.includes("TCF")){
        tooltip_string = get_tooltip_text_TCF();
    }else if (name.includes("GP")){
        tooltip_string = get_tooltip_text_GP();
    }else if (name.includes("RV")){
        tooltip_string = get_tooltip_text_RV();
    }else if (name.includes("Scope")){
        tooltip_string = get_tooltip_text_S();
    }else if (name.includes("EM")){
        tooltip_string = get_tooltip_text_EM();
    }else if (name.includes("RL")){
        tooltip_string = get_tooltip_text_RL();
    }else if (name.includes("RC")){
        tooltip_string = get_tooltip_text_RC();
    }else if (name.includes("ED")){
        tooltip_string = get_tooltip_text_ED();
    }else if (name.includes("ISC")){
        tooltip_string = get_tooltip_text_ISC();
    }else if (name.includes("SCS")){
        tooltip_string = get_tooltip_text_SCS();
    }else if (name.includes("Remedation")){
        tooltip_string = get_tooltip_text_R();
    }else if (name.includes("APP")){
        tooltip_string = get_tooltip_text_APP();
    }else if (name.includes("CA")){
        tooltip_string = get_tooltip_text_CA();
    }else if (name.includes("T0")){
        tooltip_string = get_tooltip_text_T0()
    }
    return tooltip_string;
}

function get_tooltip_text_GP(){
    let tooltip_string =   <div>
                            <span>GP</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_TCF(){
    let tooltip_string =   <div>
                            <span>TCF</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}
function get_tooltip_text_PCF(){
    let tooltip_string =   <div>
                            <span>PCF</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_TGP(){
    let tooltip_string =   <div>
                            <span>TGP</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_S(){
    let tooltip_string =   <div>
                            <span>S</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_EM(){
    let tooltip_string =   <div>
                            <span>EM</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_RL(){
    let tooltip_string =   <div>
                            <span>RL</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_RC(){
    let tooltip_string =   <div>
                            <span>RC</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_ED(){
    let tooltip_string =   <div>
                            <span>ED</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_ISC(){
    let tooltip_string =   <div>
                            <span>ISC</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_SCS(){
    let tooltip_string =   <div>
                            <span>SCS</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}
function get_tooltip_text_R(){
    let tooltip_string =   <div>
                            <span>R</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}


function get_tooltip_text_RV(){
    let tooltip_string =   <div>
                            <span>RV</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}
function get_tooltip_text_APP(){
    let tooltip_string =   <div>
                            <span>APP</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}
function get_tooltip_text_CA(){
    let tooltip_string =   <div>
                            <span>CA</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}
function get_tooltip_text_T0(){
    let tooltip_string =   <div>
                            <span>T0</span>
                            <br />
                            <b>This text is bold</b>
                            </div>
                            ;
    return tooltip_string;
}

export {get_tooltip_text}