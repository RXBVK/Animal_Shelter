import React from "react";
import Burger from "./burger";
import { labels } from "./labels";
var classNames = require('classnames');
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
            if (window.innerWidth > 1000) {
                this.setState({ isScrolled });
            }
        });
    }
    handleClick() {
        this.setState({
            isOpened: !this.state.isOpened,
        })
    }
    scrollToSection(event) {
        window.scrollTo({
            top: window.innerHeight * event.target.id - window.innerHeight,
            behavior: 'smooth',
        })
    }
    render() {
        var navbarClass = classNames({
            navbar: true,
            'scrolled': this.state.isScrolled,
            'opened': this.state.isOpened
        });
        var mobileNav = classNames({
            'nav-displayed': this.state.isOpened
        })
        return (
            <div className="introduction">
                <div className={navbarClass}>
                    <img src="Images/logo.png" id="logo" alt="logo" />
                    <ul className={mobileNav}>
                        {labels.navLinks.map((link, index) =>
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
                    <h2>{labels.article.h2}</h2>
                    <p>{labels.article.p}</p>
                    <button>{labels.article.button}</button>
                </article>
            </div >
        )
    }
}

export default Introduction