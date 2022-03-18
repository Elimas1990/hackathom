import React from "react";
import { Link } from "react-router-dom";

import './carouselsItem.css';

export const CarouselItem = ({
    imagen,
    nombreEvento,
    descripcionEvento,
    idOrden,
    fechaFin,
    fechaInicio,
    IdCategoria,
    id
}) => {

    const optionsCalendarioLargo = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric", 
        hour: "numeric",
        minute: "numeric" ,
        hour12:"false"

    }
    return (
        <div className={`carousel-item ${idOrden === 0 ? 'active' : ''}`}> 
       
            <img src={imagen} className="d-block w-100 img-carousel" alt={nombreEvento} />
            <div className="carousel-caption  d-md-block">
                <div className="mask bk-color-carrusel w-100 w-md-50 text-light">
                    <h5>{nombreEvento}</h5>
                    <p>{descripcionEvento}</p>
                    <p>{fechaInicio.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)} </p> 
                    <p>{fechaFin.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)}</p> 

                </div>
                <div className="pb-md-5 pd-0">
                    <Link className="btn btn-flow mt-md-5 mt-1" to={`/streams/${id}`}>Ver evento</Link>
                </div>
            </div>
        </div>
    );
}