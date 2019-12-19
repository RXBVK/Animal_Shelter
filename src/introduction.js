import React from "react";
import Burger from "./burger";
const navLinks = ["Wstęp", "Adopcja", "Adoptuj online", "Kontakt"];
class Introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
            isOpened: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.scrollToSection = this.scrollToSection.bind(this);
    }
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== this.state.isTop) {
                this.setState({ isScrolled })
            }
        });
    }
    handleClick() {
        this.setState({
            isOpened: !this.state.isOpened,
        })
    }
    scrollToSection(event) {
        console.log(event.target.id);
        window.scrollTo({
            top: window.innerHeight * event.target.id - window.innerHeight,
            behavior: 'smooth',
        })
    }
    render() {
        return (
            <div className="introduction">
                <div className="background"></div>
                <div className={"navbar" + (this.state.isScrolled === true ? " scrolled" : "") + (this.state.isOpened === true ? " opened" : "")}>
                    <img src="Images/logo.png" id="logo" alt="logo" />
                    <ul className={this.state.isOpened ? "nav-displayed" : ""}>
                        {navLinks.map((link, index) =>
                            <li
                                id={index + 1}
                                key={index}
                                onClick={this.scrollToSection}
                            >
                                {link}
                            </li>
                        )}
                    </ul>
                    <Burger
                        isOpened={this.state.opened}
                        handleClick={this.handleClick}
                    />
                </div>
                <article>
                    <h2>Schronisko dla Bezdomnych Zwierząt we Wrocławiu</h2>
                    <p>Schronisko dla Bezdomnych Zwierząt we Wrocławiu powstało w 1962 roku. Założyli je, wkładając w to wielką pracę i entuzjazm działacze Towarzystwa Opieki nad Zwierzętami we Wrocławiu.</p>
                    <button>Więcej informacji</button>
                </article>
            </div >
        )
    }
}

export default Introduction