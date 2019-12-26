import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap-style.css";
import Introduction from "./introduction";
import Process from "./process";
import Adopt from "./adopt";
import Contact from "./contact";
import Footer from "./footer";
function App() {
    return (
        <div>
            <Introduction />
            <Process />
            <Adopt />
            <Contact />
            <Footer />
        </div>
    );
}
export default App;
