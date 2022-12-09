import icon from "./IEEM.jpg"
import "./Header.css"
import React from "react";

class Header extends React.Component{


    render(){
        return(
            <div className="grid-header">
                <a href="https://www.h-ka.de/ieem/profil" rel="noreferrer" target="_blank">
                <img src={icon} alt="IEEM-icon" className="IEEM-icon"/>
                </a>
                
                
                <h2>Grace Period Calculation</h2>
            </div>
        )

    }
}

export default Header