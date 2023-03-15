/**
 *
 * @summary All the calculation functions of the webapp
 * @author keju1011 <keju1011@h-ka.de>
 *
 * Created:       : 2022-10-23
 * Last modified  : 2023-03-15
 */


import {
    erf
} from 'mathjs'

function calculate_PCF(R, SCS, CA) {
    // Function to calculate the PCF-Value
    let r1 = 0;
    // Based on the R-value, 
    if (R === 0) {
        r1 = 0;
    } else if (R === 1) {
        r1 = 0;
    } else {
        r1 = 1;
    }
    let PCF = SCS + R * r1 + CA;
    // Round the value (.toFixed(..) doesn't work with every browser)
    PCF = Math.round(PCF * 100) / 100;
    return PCF;
}


function calculate_TCF(RV, EM, RL, RC, ED, ISC) {
    let TCF = RV * EM * RL * RC * ED * ISC;

    // Round the value (.toFixed(..) doesn't work with every browser)
    TCF = Math.round(TCF * 100) / 100;
    return TCF;
}



function calculate_grace_period(S, TCF, PCF) {
    let GP = (1 + PCF) * (2 - TCF);
    if (S === 0) {
        let correction_value = get_correction_value(GP);
        GP = GP - correction_value;
    }

    // Round the value (.toFixed(..) doesn't work with every browser)
    GP = Math.round(GP * 100) / 100;
    return GP;
}
function get_correction_value(x) {
    var p = [0, 0, 0];
    if (x >= 1.00 && x < 1.36) {
        p = [0.0206, -0.2188, 0.1411];
    } else if (x >= 1.36 && x < 1.51) {
        p = [-1.4280, 4.2816, -3.2991];
    } else if (x >= 1.51 && x < 1.58) {
        p = [-2.0316, 6.6258, -5.4638];
    } else if (x >= 1.58 && x < 1.66) {
        p = [1.0568, -3.4342, 2.7197];
    } else if (x >= 1.66 && x < 1.73) {
        p = [0.9513, -2.7350, 1.8484];
    } else if (x >= 1.73 && x < 1.82) {
        p = [0.7946, -2.9761, 2.7333];
    } else if (x >= 1.82 && x < 1.88) {
        p = [6.6265, -23.8602, 21.4270];
    } else if (x >= 1.88 && x < 2.10) {
        p = [-1.0804, 4.1361, -3.9590];
    } else {
        console.log("Something can't be right!");
    }
    let corr_value = p[0] * x * x + p[1] * x + p[2];
    return corr_value;

}
function calculate_gp_time(R, T_0, GP, APP, APP_renewal, R_period) {
    let r2 = 0;
    if (R === 1) {
        r2 = R_period;
    }
    let T_GP = (T_0 * GP) + r2;
    // add the App_renewal value if APP is selected
    if (APP === 1) {
        T_GP = T_GP + APP_renewal;
    }
    return T_GP.toFixed(0);
}

function make_array(start_value, stop_value, n_values) {
    // Help function to make fill an array with n_values from start_value to stop_value
    var arr = [];
    var step = (stop_value - start_value) / (n_values - 1);
    for (var i = 0; i < n_values; i++) {
        arr.push((start_value + (step * i)).toFixed(3));
    }
    return arr;
}

function get_gp_values_to_plot() {
    // function for the plot (GP from 1 to 2)
    let gp = make_array(1, 2, 100);
    return gp;
}

function calc_prob_value(gp_value, scope_changed) {
    // function to calculate probability value for the plot

    // mu and sigma got previously calculated by a regression
    let mu_head = 1.4791;
    let sigma_head = 0.1412;
    if (scope_changed === true) {
        mu_head = 1.392;
        sigma_head = 0.1579;
    }

    // calculate the probability value by a reverse commuliative distribution via an error function
    var prob_value = 0.5 * (1 + erf((gp_value - mu_head) / (sigma_head * Math.sqrt(2))));
    return prob_value.toFixed(3);
}


function calc_prob_value_list(gp_values, scope_changed) {
    // function to calculate the probability values based on the given gp values from 1 to 2

    // create an array with same length as the GP values to store the probability values

    let prob_values = [];
    for (var i = 0; i < gp_values.length; i++) {
        let gp_value = gp_values[i];
        prob_values.push(calc_prob_value(gp_value, scope_changed));
    }
    return prob_values;
}

export { calculate_PCF, calculate_TCF, calculate_grace_period, calculate_gp_time, get_gp_values_to_plot, calc_prob_value_list, calc_prob_value }