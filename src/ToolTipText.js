

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
                            <p>The Grace Period Factor is calculated by the Metric. 
                                It is a measured value for a reasonable remediation time of a given vulnerability.
                            </p>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_TCF(){
    let tooltip_string =   <div>
                            <b>Time Criticality Factor</b>
                            <p>

                            The Time Criticality Factor depends on
                            <ul>
                            <li>Vulnerability Risk Value RV</li>
                            <li>Exploit Code Maturity EM</li>
                            <li>Remediation Level RL</li>
                            <li>Report Confidence RC</li>
                            <li>Exploit Code Dissemination ED</li>
                            <li>Incident Scale ISC</li>
                            </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}
function get_tooltip_text_PCF(){
    let tooltip_string =   <div>
                            <b>Process Criticality Factor</b>
                            <p>
                            The Process Criticality Factor depends on
                            <ul>
                            <li>Supply Chain Scale SCS</li>
                            <li>Remediation Dissemination R</li>  
                            <li>Contractual Agreements CA</li>
                            </ul>
                            </p>
                            </div>
                            ;
    return tooltip_string;
}

function get_tooltip_text_TGP(){
    let tooltip_string =   <div>
                            <b>Grace Period</b>
                            <p>This Calculation result is the suggested remediation time of a given vulnerability.</p>
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
                            <p>
                            The Remediation Level assesses the reduction of the threat posed by the vulnerability to be assessed over time. The typical vulnerability in the automotive area is usually already patched when it becomes publicly known. Nevertheless, the remediation level influences the time criticality for measures like workarounds, hotfixes or final patches for the vulnerability to be assessed and for vulnerabilities related with it, since it reflects a decreasing urgency as remediation becomes final. 
                            When a possible attack scenario is reported by a white hat, this report can contain several related vulnerabilities (attack vector). Since each vulnerability is assessed individually, these vulnerabilities can be assessed and thus prioritized differently. Mitigation or remediation can then simultaneously lead to mitigation or remediation of another related vulnerability. This metric captures such effects that lead to changes in exploitability over time.  It must therefore be applied to the entirety of all threat scenarios (or attack paths) that include the vulnerability being assessed. If multiple threat scenarios (with associated attack paths) can be derived from the vulnerability to be assessed, then the effect of a measure on only the threat scenario that has the highest 'Risk Value' is relevant. Therefore, if an existing measure has no effect the threat scenario that has the highest 'Risk Value', then this measure is considered as 'Unavailable'.



                            </p>
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
                            <p>
                            This metric measures the degree of confidence in the existence of the vulnerability and the credibility of the known technical details. Sometimes only the existence of vulnerabilities is published, but without specific details. For example, an impact may be identified as undesirable, but the root cause may not be known. The vulnerability may later be confirmed by research that suggests where the vulnerability may lie, although the research may not be certain. Finally, a vulnerability may be confirmed by confirmation from the author or vendor of the affected technology. Thus, the urgency of a vulnerability may vary over time as new discoveries lead to the assumption of a vulnerability's existence with altered certainty. This metric also indicates the level of technical knowledge and equipment available to potential attackers. Thus, overlaps may exist with the following criteria for determining the 'Risk Value' according to ISO/SAE 21434:
                            <ul>
                            <li>Expertise </li>
                            <li> Equipment </li>
                            </ul>
                            The more a vulnerability is validated by reputable sources, the higher the score.


                            </p>
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
                            <p>
                            This metric measures the availability of exploit code that exploits the vulnerability to be assessed. The maturity of the exploit does not need to be evaluated. Scoring is based on statistical significance from studies of historical data on vulnerabilities in the traditional IT environment [Allodi et al., 2014], and is driven by the following evidence-based assumptions:
                            <ul>
                            <li> Considering the existence of exploit code for a given vulnerability in publicly accessible databases as a risk factor for actual exploitation in the wild can increase prediction rate up to 45 % better than only considering the CVSS Score.</li>
                            <li> Considering the existence of exploit code for a given vulnerability on black market as a risk factor for actual exploitation in the wild can increase prediction rate up to 80 % better than only considering the CVSS Score.</li>
                            </ul>
                            The lower the prediction rate given by a risk factor, the lower the statistical exploitation probability on average. Thus, the time criticality factor (TCF) decreases. If there are no findings or if the prediction rate is as high as possible (external - black market), this metric has no (weakening) effect on TCF.
                            </p>
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
                            <p>
                            The evaluation of the scalability of damage is not fundamentally considered in the 'Risk Value' according to ISO/SAE 21434. This metric therefore does not represent an overlap. If the scalability of damage has already been considered in the development phase for a specific company, this assessment should nevertheless be reviewed and, if necessary, adjusted, since the assessment can change over time (e.g., if the expected delivery rate of the impacted/vulnerable component deviates significantly from the actual delivery rate).
                            The 'Incident Scale' does not necessarily reflect only the company-specific ('Environmental') view. The environment in which components could be exposed to a threat due to the given vulnerability must initially be defined. The environment under consideration is not necessarily only the environment of one or more companies, but potentially the entire world due to the highly instationary character and the connectivity of vehicles. 
                            If a specification of the exact number of impacted/vulnerable components operated in the environment to be defined cannot be made with certainty, the maximum number to be assumed should be used. This can be the case, for example, if precise assembly documentation (e.g. via VIN) is available, but an exact assessment is not possible due to incomplete tracking of the software status of the impacted/vulnerable component. In this case, all components would have to be treated as if they had the impacted/vulnerable software version.
                            It should be noted that this metric does not evaluate possible significant scaling effects resulting from the vulnerability potentially enabling, for example, physical or functional bypass of an attacker to adjacent components/items/domains/functions along an attack path. Such effects are accounted for using the 'scope' metric. For example, this may refer to a vulnerability within a TCU that is located right at the interface to the backend server and could potentially allow the attacker to scale the attack to the backend.


                            </p>
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
                            <p>
                            Multi-stakeholder processes for disclosing and remediating a vulnerability exhibit rising complexity as the number of vendors involved increases. Software from one supplier can be unique in each system implementation of the different customers, even if it maps the same function. A vulnerability can potentially affect multiple vendors in different ways. The assessment of risk and thus vulnerability prioritization may vary from vendor to vendor. Increased intra- as well as inter-corporal communication needs, as well as increased potential for conflict, can delay the process. (It must be remembered that, in case of doubt, the process can only be as efficient as its weakest link). While the following factors have a significant impact on process duration, they are not considered for this metric because they are the responsibility of the manufacturer: 
                            <ul>
                            <li>Inadequate quality or quantity of human resources.</li>
                            <li>Insufficient processes </li>
                            </ul>
                            This metric does not consider whether pre-existing measures exist between participating vendors as part of contractual agreements or requirements documentation in the event that vulnerabilities occur in the field (e.g., within an Incident Response Plan or based on CAL-dependent requirements). These factors can greatly facilitate and specify the estimation of process criticality (PCF), but are not always present. Therefore, they are recorded separately.
                            The impact of the metric on process criticality (PCF) increases linearly with the number of stakeholders. The real given complexity is thus approximately modeled by assuming a only bilateral communication for both, intra- and inter-corporal interactions. Each intra- and inter-interaction is assumed to have the same mean duration.


                            </p>
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
                            <p>
                            This metric evaluates the appropriate grace period with respect to the impact of the responsible vendor's organizational-strategical patch or update management. Technical considerations that affect patch development or verification are specifically excluded from this metric. Such aspects, if they are part of agreements between manufacturers, can be included in the evaluation of the process criticality PCF with the Contractual Agreements (CA) metric. The assessment may change over time under certain circumstances. For example, if a temporary mitigation or hotfix is planned first and a more profound patch is planned for a later date. For clarity, the different definitions for a patch and an update are pointed out. An update is defined as a measure that is characterized by the intention to implement extended or optimized functionality. It is usually deployed on a cyclical basis. A patch, on the other hand, is defined as a measure characterized by being triggered by a specific incident. Deployment can be event-triggered or cyclic (synchronized with the update cycle), depending on given circumstances.
                            Manufacturers usually pursue an efficient update management. Especially when no OTA functionality is available, the bundled release of patches (e.g., Microsoft's "Patchday") makes sense for many reasons. Key factors influencing patch and/or update management can be economic considerations, system availability and safety and liability risks (monetary or reputational). Keeping the system up-to-date with recently released patches results in higher operational costs, while patching the system infrequently for its vulnerabilities leads to higher damage costs associated with higher levels of exploitation. A basic distinction can be made between a time-driven approach and an event-driven approach.
                            In addition to the time at which a manufacturer provides patches, patch implementation management of the vehicle owner also plays a key role. The behavior of the vehicle owner lies outside the manufacturer's responsibility and is therefore not part of its incident response management. The patch implementation management on the part of the vehicle owner therefore has no influence on the evaluation of the appropriate grace period.
                            The evaluation is carried out either by a dimensionless score that is included in the PCF if no concrete time specification can be made, or by a concrete time specification in days. This then does not influence the PCF or GP', but is added to the calculated reasonable Grace Period. 


                            </p>
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
                            <p>
                            This value is determined from the risk assessment defined in the company (e.g.: 'Risk Matrix'). It considers the 'impact' and 'feasibility' assessments in a certain weighting. If, in the context of a TARA, 'Risk Values' have already been defined in the product development phase for the 'Threat Scenario' that is now to be evaluated in real terms on the basis of the vulnerability, these values can be adopted here (the same applies to 'impact' or 'feasibility' evaluation). The relevant impact categories for this metric are Safety and Operational. 
                            If multiple threat scenarios (with associated attack paths) can be derived from the vulnerability to be assessed, then the threat scenario that has the highest risk value for the safety impact category is relevant. If this value is assigned to multiple threat scenarios, then the threat scenario that also has the highest risk value for the Operational impact category is relevant.
                            The 'Risk Value' reflects the company-specific ('environmental') consideration of the impact. The 'Risk Value' should therefore not be equated with the CVSS Severity Base Score that is usually found in CVE and/or NVD entries.
                            </p>
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
                            <p>The Default Grace Period is the Time Span in Days that will be multiplicated with the Grace Period Factor. </p>
                            </div>
                            ;
    return tooltip_string;
}

export {get_tooltip_text}