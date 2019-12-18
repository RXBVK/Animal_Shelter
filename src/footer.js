import React from "react";

function Footer() {
    return (
        <div className="footer">
            <img src="Images/logo.png" alt="logo" id="footer-logo"></img>
            <div className="footer-links">
                <span>Informacje</span>
                <span>Współpraca</span>
                <span>Kontakt</span>
                <span>Sponsorzy</span>
            </div>
            <div className="sponsors-images">
                <img src="Images/sponsorzy.png" alt="sponsor"></img>
                <img src="Images/sponsorzy1.png" alt="sponsor"></img>
                <img src="Images/sponsorzy2.png" alt="sponsor"></img>
                <img src="Images/sponsorzy3.png" alt="sponsor"></img>
            </div>
        </div>
    )
}

export default Footer