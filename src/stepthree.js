import React from "react";
import Weather from "./weather";
import { labels } from "./labels";
class StepThree extends React.Component {
    render() {
        return (
            <div className="step-three step">
                <h1>{labels.stepThree.summary}</h1>
                <div className="step-content step3-content">
                    <p>{labels.stepThree.name} {this.props.fName}</p>
                    <p>{labels.stepThree.lastName} {this.props.lastName}</p>
                    <p>{labels.stepThree.phoneNumber} {this.props.phoneNumber}</p>
                    <p>{labels.stepThree.city} {this.props.city}</p>
                    <p>{labels.stepThree.address} {this.props.address}</p>
                    <p>{labels.stepThree.chosenAnimal} {this.props.chosenAnimal}</p>
                    <p>{labels.stepThree.arrival} {this.props.arrival}</p>
                    <Weather />
                </div>
            </div>
        )
    }
}

export default StepThree