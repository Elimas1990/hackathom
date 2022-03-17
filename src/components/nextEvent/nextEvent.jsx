import React from "react";
import './nextEvent.css';


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


 

        <div className="card mb-3 card-event">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt={title}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                      {/*   <p className="card-text"><small className="text-muted">{dateStart.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)} -- {dateEnd.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)}</small></p>
               */}      </div>
                </div>
            </div>
        </div>
    );
}