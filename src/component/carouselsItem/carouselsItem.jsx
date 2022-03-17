import React from "react";
import './carrselItem.css';
import { Carousel } from "bootstrap";

export const CarouselItem = ({
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
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carousel"
                    src={image}
                    alt={title}
                />
                <Carousel.Caption>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{dateStart.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)}</p>
                    <p>{dateEnd.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)}</p>
                </Carousel.Caption>
            </Carousel.Item>
    );
}