import React from "react";
import "./bootstrap-style.css";

function AdoptAdv() {
    return (
        <div className="adopt-adv">
            <div className="adopt-adv-text">
                <h1>Losowy tekst</h1>
                <p>Żeby dostosować elementy</p>
                <p>Żeby dostosować elementy</p>
                <p>Żeby dostosować elementy</p>
                <p>Żeby dostosować elementy</p>
            </div>
            <div className="adopt-adv-video">
                <iframe
                    title="Wideo o starych zwierzętach Youtube"
                    src="https://www.youtube.com/embed/7uBK03zX8HA?modestbranding=1&autoplay=0&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=iframe_video&origin=https%3A%2F%2Fwww.schroniskowroclaw.pl&allowfullscreen=true&wmode=transparent&iv_load_policy=3&playsinline=0&html5=1&widgetid=1">
                </iframe>
            </div>
        </div>
    )
}

export default AdoptAdv;