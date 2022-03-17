import React from "react";
import './nextEvent.css';
import { Card } from "bootstrap";

export const NextEvent = ({
    image,
    title,
    description,
    dateStart,
    dateEnd



}) => {
    const optionsCalendarioLargo = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }


    return (


        <Card className="bg-dark text-white card-event">
            <Card.Img src={image} alt={title} />
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>  <p>{dateStart.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)}</p>
                    <p>{dateEnd.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)}</p></Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}