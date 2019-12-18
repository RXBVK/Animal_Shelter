import React from "react";
class StepOne extends React.Component {
    render() {
        return (
            <div className="step-one step">
                <h1>Wybierz zwierzę</h1>
                <div className="step-content">
                    <div className="inputs">
                        <div className="input-dog">
                            <input
                                name="dogChecked"
                                type="checkbox"
                                id="dogInput"
                                checked={this.props.dogChecked}
                                onClick={this.props.handleInputChange}
                            />
                            <label htmlFor="dogInput">Pies</label>
                            <p>Pies</p>
                        </div>
                        <div className="input-cat">
                            <input
                                name="catChecked"
                                type="checkbox"
                                id="catInput"
                                checked={this.props.catChecked}
                                onClick={this.props.handleInputChange}
                            />
                            <label htmlFor="catInput">Kot</label>
                            <p>Kot</p>
                        </div>
                    </div>
                    <h3>Wiek zwierzęcia</h3>
                    <div className="choose-age">
                        <input type="number"
                            placeholder="OD"
                            name="fromAge"
                            value={this.props.fromAge}
                            onChange={this.props.handleInputChange}
                        >
                        </input>
                        -
                        <input type="number"
                            placeholder="DO"
                            name="toAge"
                            value={this.props.toAge}
                            onChange={this.props.handleInputChange}
                        >
                        </input>
                    </div>
                    <div className="images-wrap">
                        {this.props.searches.map(animal => (
                            <div className="animal" key={animal.name}>
                                <img
                                    src={animal.imagePath}
                                    alt="Animals"
                                ></img>
                                <div className="animal-info"
                                    id={animal.name}
                                    onClick={this.props.handleAnimalName}>
                                    <p>Imię: {animal.name}</p>
                                    <p>Wiek: {animal.age}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        )
    }
}

export default StepOne