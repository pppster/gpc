

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
                            <b>Grace Period Factor</b>
                            <p>Beschreibung</p>
                            <p>Norm</p>
                            <p>Values:
                                <ul>
                                    <li><b>Value 1:</b></li>
                                    <li><b>Value 2:</b></li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_TCF(){
    let tooltip_string =   <div>
                            <b>Time-Criticality-Factor</b>
                            <p>Beschreibung</p>
                            <p>Norm</p>
                            <p>Values:
                                <ul>
                                    <li><b>Value 1:</b></li>
                                    <li><b>Value 2:</b></li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}
function get_tooltip_text_PCF(){
    let tooltip_string =   <div>
                            <b>Process-Criticality-Factor</b>
                            <p>Beschreibung</p>
                            <p>Norm</p>
                            <p>Values:
                                <ul>
                                    <li><b>Value:</b></li>
                                    <li><b>Value 2:</b></li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_TGP(){
    let tooltip_string =   <div>
                            <b>Grace Period</b>
                            <p>Beschreibung</p>
                            <p>Norm</p>
                            <p>Values:
                                <ul>
                                    <li><b>Value 1: </b></li>
                                    <li><b>Value 2: </b></li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_S(){
    let tooltip_string =   <div>
                            <b>Scope S</b>
                            <p>The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope. If a vulnerability in a vulnerable component can affect a component which is in a different security scope than the vulnerable component, a Scope change occurs. Intuitively, whenever the impact of a vulnerability breaches a security/trust boundary and impacts components outside the security scope in which vulnerable component resides, a Scope change occurs.</p>
                            <p>This metric is adapted from the Common Vulnerability Scoring System v.3.1 (CVSS v3.1)</p>
                            <p>Values:
                                <ul>
                                    <li><b>Changed: </b>An exploited vulnerability can affect resources beyond the security scope managed by the security authority of the vulnerable component. In this case, the vulnerable component and the impacted component are different and managed by different security authorities.</li>
                                    <li><b>Unchanged: </b> An exploited vulnerability can only affect resources managed by the same security authority. In this case, the vulnerable component and the impacted component are either the same, or both are managed by the same security authority.</li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_EM(){
    let tooltip_string =   <div>
                            <b>Exploit Code Maturity</b>
                            <p>It measures the likelihood of the vulnerability being attacked, and is typically based on the current state of exploit techniques, exploit code availability, or active, “in-the-wild” exploitation. Public availability of easy-to-use exploit code increases the number of potential attackers by including those who are unskilled, thereby increasing the severity of the vulnerability. Initially, real-world exploitation may only be theoretical. Publication of proof-of-concept code, functional exploit code, or sufficient technical details necessary to exploit the vulnerability may follow. Furthermore, the exploit code available may progress from a proof-of-concept demonstration to exploit code that is successful in exploiting the vulnerability consistently. In severe cases, it may be delivered as the payload of a network-based worm or virus or other automated attack tools.</p>
                            <p>This metric is adapted from the Common Vulnerability Scoring System v.3.1 (CVSS v3.1)</p>
                            <p>Values:
                                <ul>
                                    <li><b>Changed: </b>An exploited vulnerability can affect resources beyond the security scope managed by the security authority of the vulnerable component. In this case, the vulnerable component and the impacted component are different and managed by different security authorities</li>
                                    <li><b>Unchanged: </b>An exploited vulnerability can only affect resources managed by the same security authority. In this case, the vulnerable component and the impacted component are either the same, or both are managed by the same security authority</li>
                                
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_RL(){
    let tooltip_string =   <div>
                            <b>Remediation Level</b>
                            <p>Beschreibung</p>
                            <p>The Remediation Level of a vulnerability is adapted from the Common Vulnerability Scoring System v.3.1 (CVSS v3.1)</p>
                            <p>Values:
                                <ul>
                                    <li><b>Not defined: </b>Assigning this value indicates that there is not enough information to select one of the other values or the vulnerability is one that is completely unknown to the public ("0-day"). I.e. it has the same impact on the rating as assigning Unavailable</li>
                                    <li><b>Unavailable: </b>Either there is no solution, or it is not applicable. Assigning this value does not lead to any changes in the assessment of attack feasibility/exploitability and thus the 'Risk Value'</li>
                                    <li><b>Workaround: </b>There is an unofficial, vendor-neutral solution. In some cases, users of the affected technology create their own patch or provide steps to work around or otherwise mitigate the vulnerability</li>
                                    <li><b>Temporary Fix: </b>There is an official, but temporary solution. This includes cases where the vendor issues a temporary hotfix, tool, or workaround</li>
                                    <li><b>Official Fix: </b>A complete vendor solution is available. Either the vendor has released an official patch or an upgrade is available</li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_RC(){
    let tooltip_string =   <div>
                            <b>Report Confidence RC</b>
                            <p>Beschreibung</p>
                            <p>This metric is adapted from the Common Vulnerability Scoring System v.3.1 (CVSS v3.1)</p>
                            <p>Values:
                                <ul>
                                    <li><b>Not defined: </b>There is not enough information to select one of the other values</li>
                                    <li><b>Confirmed: </b>Detailed reports exist, or functional replication is possible. Source code is available to independently verify the research claims</li>
                                    <li><b>Reasonable: </b>Important details are published, but there is a lack of either full confidence in the cause or access to the source code to fully confirm all interactions that may lead to the outcome. However, there is reasonable confidence that the bug is reproducible and at least one impact can be verified</li>
                                    <li><b>Unknown: </b>There are impact reports that indicate that a vulnerability exists. The reports indicate that the cause of the vulnerability is unknown</li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_ED(){
    let tooltip_string =   <div>
                            <b>Exploit Code Dissemination ED</b>
                            <p>Beschreibung</p>
                            <p>Norm</p>
                            <p>Values:
                                <ul>
                                    <li><b>External - not public: </b>Information was found by external actors and Exploit Code Maturity is known only to them. Neither vulnerability information, nor an exploit involving the vulnerability has been disclosed yet.</li>
                                    <li><b>External - PoC: </b>Vulnerability information is already disclosed and a corresponding exploit is already known to the broad public as a Proof-of-Concept </li>
                                    <li><b>External - Black market: </b>Vulnerability information is already disclosed but a corresponding exploit is not yet known to the broad public and is traded on the black market. The exploit is part of an exploit kit and/or readily applicable </li>
                                    <li><b>Unclear: </b>Assigning this value indicates there is insufficient information to choose one of the other values. It has no impact on the overall score</li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_ISC(){
    let tooltip_string =   <div>
                            <b>Incident Scale ISC</b>
                            <p>Beschreibung</p>
                            <p>Norm: ISO/SAE 21434</p>
                            <p>Values:
                                <ul>
                                    <li><b>Low: </b>The total of all vehicles affected by the vulnerability represents up to 1% of the manufacturer's total registered fleet</li>
                                    <li><b>Medium: </b>The total of all vehicles affected by the vulnerability represents between 1% and 5% of the manufacturer's total registered fleet</li>
                                    <li><b>High: </b>The total of all vehicles affected by the vulnerability represents more than 5% of the manufacturer's total registered fleet</li>
                                    <li><b>Unclear: </b>Assigning this value indicates there is insufficient information to choose one of the other values. It has no impact on the overall score</li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_SCS(){
    let tooltip_string =   <div>
                            <b>Supply Chain Scale SCS</b>
                            <p>Beschreibung</p>
                            <p>Norm</p>
                            <p>Values:
                                <ul>
                                    <li><b>Low: </b>The number of vendors involved in the disclosure process as well as patch development is 1</li>
                                    <li><b>Medium: </b>The number of vendors involved in the disclosure process as well as patch development is 2</li>
                                    <li><b>High: </b>The number of vendors involved in the disclosure process as well as patch development is 3</li>
                                    <li><b>Very high: </b>The number of vendors involved in the disclosure process as well as patch development is 4 or higher</li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}
function get_tooltip_text_R(){
    let tooltip_string =   <div>
                            <b>Remediation Dissemination</b>
                            <p>Beschreibung</p>
                            <p>Norm</p>
                            <p>Values:
                                <ul>
                                    <li><b>None: </b>For the existing vulnerability, no measures at all are developed</li>
                                    <li><b>No vehicle access required: </b>For the existing vulnerability, no official patch is developed</li>
                                    <li><b>Immediately: </b>For the existing vulnerability, a patch is developed and it is possible and appropriate to disseminate remotly</li>
                                    <li><b>Gradually - not determined: </b>For the existing vulnerability, remediations are developed and their dissemination must be done with physical/local vehicle access </li>
                                    <li><b>Gradually - determined: </b>For the existing vulnerability, remediations are developed and there is no explicit need to disseminate immediately/within a prescribed period</li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}


function get_tooltip_text_RV(){
    let tooltip_string =   <div>
                            <b>Vulnerability Risk Value</b>
                            <p>Beschreibung</p>
                            <p>Norm: ISO/SAE 21434 [-]</p>
                            <p>Values:
                                <ul>
                                    <li><b>Medium: </b>Risk Value for Impact category 'Safety' is 1 and Risk Value for Impact category 'Operational' is smaller than 3</li>
                                    <li><b>High: </b>Risk Value for Impact category 'Safety' is higher than 1 and Risk Value for Impact category 'Operational' is higher than 2</li>
                                    <li><b>Verh high: </b>Risk Value for Impact category 'Safety' higher than 2 and Risk Value for Impact category 'Operational' is higher than 3</li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}
function get_tooltip_text_APP(){
    let tooltip_string =   <div>
                            <b>Certification and Approval APP</b>
                            <p>This metric evaluates the appropriate grace period with respect to delays which may arise with necessary approval obligations.
                            Regulations for type approval vary worldwide (e.g. UN 156 regulation). Depending on country-specific regulations, vehicle manufacturers may be required to provide processes as part of their internal software update management that can be used to verify whether and how a software update will modify (alter, remove, add, enable, disable) any parameters or functions of type approved systems to be updated/patched or parameters used to type approve those systems. 
                            Furthermore, this also applies to modifications of parameters or function that are defined within legislation or that will affect any other system required for the safe and continued operation of the vehicle. The responsibility for the correct assessment of the relevance of an update/patch for approval lies (also) with the vehicle manufacturer. Whether an extension or renewal of the approval is necessary must and can therefore be assessed by the manufacturer. The extent of the delay in patch dissemination due to approval processes should be specified on the basis of empirical values and/or in consultation with the Approval Authority or Technical Service.</p>
                            <p>Values:
                                <ul>
                                    <li><b>None: </b>No relevance for approval.</li>
                                    <li><b>Extension: </b>Extension of type approval is necessary. Assigning this value requires the specification of a concrete time value in working days for expected delay.</li>
                                    <li><b>Renewal: </b>Renewal of type approval is necessary. Assigning this value requires the specification of a concrete time value in working days for expected delay.</li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}
function get_tooltip_text_CA(){
    let tooltip_string =   <div>
                            <b>Contractual Agreements (CIAs) CA</b>
                            <p>
                            This metric can be used to include aspects into the evaluation of the reasonable grace period that may have been defined as part of agreements between the customer and supplier and can help to refine the assessment for the given specific vulnerability. These may be agreements between partners within a company or beyond. In particular, this metric reflects the RQ-07-04 and RQ-07-05 requirements of ISO/SAE 21434 and provides the ability to make the evaluation of the reasonable patching time more adaptable to given real circumstances. Since such agreements generally lack an objective judgment, this metric may be unsuitable for the 'Coordinated Vulnerability Disclosure' use case. 
                            However, it may be suitable for use in the internal patch or vulnerability prioritization process.
                                </p>
                                <p>Values:
                                <ul>
                                    <li><b>None: </b>Assigning this value indicates that no contractual agreements with impact on patchig time exist, or that existing agreements do not increase process criticality significantly enough for the standard grace period T_0 used to be found not reasonable. Both the process criticality PCF and the Grace Period T_GP are not affected.</li>
                                    <li><b>Costumized: </b>Dependent on internal and inter-corporate contractual conditions (e.g., defined CALs or Incident Response Plan for effected component).</li>
                                    </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}
function get_tooltip_text_T0(){
    let tooltip_string =   <div>
                            <b>Default Grace Period</b>
                            <p>Beschreibung</p>
                            <p>Norm</p>
                            <p>Values:
                                <ul>
                                    <li><b>Value 1:</b></li>
                                    <li><b>Value 2:</b></li>
                                </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}

export {get_tooltip_text}