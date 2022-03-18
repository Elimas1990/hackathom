import React from "react";
import './nextEvent.css';
import { Timestamp } from "firebase/firestore"
import { Link } from "react-router-dom";


export const NextEvent = ({
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

        hour: "numeric",
        minute: "numeric",
        hour12: "false"
    }
    const datenow = Timestamp.now();

    return (




        <div className="card mb-3 card-event ">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imagen} className="img-fluid rounded-start" alt={nombreEvento} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title m-0  mb-1">{nombreEvento}</h5>
                        <p className="card-text m-0 mt-1 mb-1">{descripcionEvento}</p>
                        <Link className="btn btn-flow btn-sm" to={`/streams/${id}`}>Ver evento</Link>
                      <span className={`position-absolute top-0 start-100 translate-middle p-2  border border-light rounded-circle ${fechaFin >= datenow && fechaInicio <= datenow ? 'btn-success' : 'bg-danger'}`}>
                            <span className="visually-hidden">vivo</span>
                        </span>

                    </div>

                </div>
                <div className="card-footer text-muted">
                    <p className="text-center mb-0">{fechaInicio.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)} - {fechaFin.toDate().toLocaleDateString("es-AR", optionsCalendarioLargo)}</p>
                </div>
            </div>
        </div>
    );
}