import React from "react";
import './lastEvent.css';
import { Link } from "react-router-dom";


export const LastEvent = ({
    imagen,
    nombreEvento,
    descripcionEvento,
    idOrden,
    fechaFin,
    fechaInicio,
    IdCategoria,
}) => {
    const optionsCalendarioLargo = {

        hour: "numeric",
        minute: "numeric",
        hour12: "false"
    }


    return (




        <div className="card mb-3 card-event">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imagen} className="img-fluid rounded-start" alt={nombreEvento} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title m-0  mb-1">{nombreEvento}</h5>
                        <p className="card-text m-0 mt-1 mb-1">{descripcionEvento}</p>
                        <button type="button" class="btn btn-secondary btn-sm">Ver evento</button>
                    </div>

                </div>
                <div className="card-footer text-muted">
                    <p className="text-center mb-0">{fechaInicio.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)} - {fechaFin.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)}</p>
                </div>

            </div>
        </div>
    );
}