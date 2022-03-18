import React from "react";

import './carouselsItem.css';

export const CarouselItem = ({
    imagen,
    nombreEvento,
    descripcionEvento,
    idOrden,
    fechaFin,
    fechaInicio,
    IdCategoria,
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
    console.log(fechaFin)
    return (
        <div className={`carousel-item ${idOrden === 0 ? 'active' : ''}`}> 
       
            <img src={imagen} className="d-block w-100 img-carousel" alt={nombreEvento} />
            <div className="carousel-caption  d-md-block">
                <div className="mask bk-color-carrusel w-100 w-md-50">
                <h5>{nombreEvento}</h5>
                <p>{descripcionEvento}</p>
                 <p>{fechaInicio.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)} </p> 
                 <p>{fechaFin.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)}</p> 

                 </div>
                 <div className="pb-md-5 pd-0">
                 <button type="button" className="btn btn-primary mt-md-5 mt-1">Inscribirse</button>
                 </div>
            </div>
        </div>
    );
}