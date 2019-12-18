import React from "react";
class StepTwo extends React.Component {
    render() {
        return (
            <div className="step-two step">
                <h1>Wpisz swoje dane</h1>
                <div className="step-content step2-content">
                    <div>
                        <input
                            type="text"
                            name="fName"
                            id="name"
                            maxLength="16"
                            placeholder="Imię"
                            value={this.props.fName}
                            onChange={this.props.handleInputChange}
                        ></input>
                        <input
                            type="text"
                            name="lastName"
                            maxLength="20"
                            id="last-name"
                            placeholder="Nazwisko"
                            value={this.props.lastName}
                            onChange={this.props.handleInputChange}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phoneNumber"
                            maxLength="9"
                            id="phone-number"
                            placeholder="Telefon"
                            maxLength="9"
                            value={this.props.phoneNumber}
                            onChange={this.props.handleInputChange}
                        ></input>
                        <input
                            type="text"
                            name="city"
                            maxLength="20"
                            id="city"
                            placeholder="Miasto"
                            value={this.props.city}
                            onChange={this.props.handleInputChange}
                        ></input>
                    </div>
                    <input
                        type="text"
                        name="address"
                        maxLength="30"
                        placeholder="Adres"
                        value={this.props.address}
                        onChange={this.props.handleInputChange}
                    ></input>
                    <input
                        type="date"
                        name="arrival"
                        value={this.props.arrival}
                        onChange={this.props.handleInputChange}
                    ></input>
                </div>
            </div>
        )
    }
}

export default StepTwo