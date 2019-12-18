import React from "react";
const cards = [
    {
        id: "gallery",
        title: "Sprawdź galerię",
        content: "Przed przyjazdem zobacz w galerii jakie zwierzęta spotkasz w schronisku.",
        icon: "fas fa-images",
        buttonContent: "zobacz galerię"
    },
    {
        id: "contact",
        title: "Przyjedź do schroniska",
        content: "Po przejrzeniu galerii wiesz co ci się podoba, możesz przyjechać na miejsce i sprawdzić stan zwierząt oraz czy wybrane zwierzę ci pasuje.",
        icon: " fas fa-id-card",
        buttonContent: "kontakt"
    },
    {
        id: "documents",
        title: "Wypełnij dokumenty",
        content: "Do adopcji potrzebne jest wypełnienie dokumentów.",
        icon: "fas fa-file-word",
        buttonContent: "pobierz dokumenty"
    }
]
class Process extends React.Component {
    render() {
        return (
            <div className="process">
                <h1>Proces adopcji</h1>
                <div className="process-steps">
                    {cards.map(card => (
                        <div className={"steps-" + card.id} key={card.id}>
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                            <i className={card.icon}></i>
                            <button>{card.buttonContent}</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}


export default Process