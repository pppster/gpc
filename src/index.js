/**
 *
 * @summary index file to host the website
 * @author roja1017 <roja1017@h-ka.de>
 *
 * Created:       : 2022-10-23
 * Last modified  : 2023-01-15
 */

import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";


// this file renders the instance of the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
