/**
 *
 * @summary header component
 * @author roja1017 <roja1017@h-ka.de>
 *
 * Created:       : 2022-10-23
 * Last modified  : 2023-01-15
 */
import icon from "./images/IEEM.jpg"
import "./Header.css"
import React from "react";

class Header extends React.Component {
    /*
    * The class displays the header of the app.
    * Simply randers the IEEM-logo with an associated hyperlink and a heading
    */

    render() {
        return (
            <div className="grid-header">
                <a href="https://www.h-ka.de/ieem/profil" rel="noreferrer" target="_blank">
                    <img src={icon} alt="IEEM-icon" className="IEEM-icon" />
                </a>


                <h2>Grace Period Calculation</h2>
            </div>
        )

    }
}

export default Header