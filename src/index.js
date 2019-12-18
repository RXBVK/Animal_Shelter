import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap-style.css";
import Introduction from "./introduction";
import Process from "./process";
import Adopt from "./adopt";
import Footer from "./footer";
import Contact from "./contact";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Introduction />, document.getElementById("introduction-wrap"));
ReactDOM.render(<Process />, document.getElementById("process-wrap"));
ReactDOM.render(<Adopt />, document.getElementById("adopt-wrap"));
ReactDOM.render(<Contact />, document.getElementById("contact-wrap"));
ReactDOM.render(<Footer />, document.getElementById("footer-wrap"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
