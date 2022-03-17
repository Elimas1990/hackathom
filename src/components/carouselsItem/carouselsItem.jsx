import React from "react";
import './carouselsItem.css';

export const CarouselItem = ({
    image,
    title,
    description,
    dateStart,
    dateEnd



}) => {

    console.log(image)
    const optionsCalendarioLargo = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }




    return (
        <div className="carousel-item active">
            <img src={image} className="d-block w-100 " alt={title} />
            <div className="carousel-caption d-none d-md-block">
                <h5>{title}</h5>
                <p>{description}</p>
                {/* <p>{dateStart.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)} -- {dateEnd.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)}</p> */}
            </div>
        </div>
    );
}