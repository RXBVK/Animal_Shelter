import React from "react";
class Burger extends React.Component {
    render() {
        return (
            <div id="burger"
                onClick={this.props.handleClick}
            >
                <div id="top"></div>
                <div id="middle"></div>
                <div id="bottom"></div>
            </div>
        )
    }
}

export default Burger