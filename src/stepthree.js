import React from "react";
import Weather from "./weather";
class StepThree extends React.Component {
    render() {
        return (
            <div className="step-three step">
                <h1>Podsumowanie</h1>
                <div className="step-content step3-content">
                    <p>Imię: {this.props.fName}</p>
                    <p>Nazwisko: {this.props.lastName}</p>
                    <p>Telefon: {this.props.phoneNumber}</p>
                    <p>Miasto: {this.props.city}</p>
                    <p>Adres: {this.props.address}</p>
                    <p>Wybrane zwierzę: {this.props.chosenAnimal}</p>
                    <p>Data przyjazdu: {this.props.arrival}</p>
                    <Weather />
                </div>
            </div>
        )
    }
}

export default StepThree