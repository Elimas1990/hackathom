import React, { useState, useEffect } from "react";
import './nextEventContainer.css';
import { NextEvent } from "../nextEvent/nextEvent";
import { Timestamp, collection, getDocs, query, orderBy, limit, where } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { LastEvent } from "../lastEvent/lastEvent";


export const NextEventContainer = () => {
    /*     const events = (
            [{
                id: 0,
                image: 'https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg',
                title: 'titulo de prueba',
                description: 'descripcion del prueba',
    
            },
            {
                id: 1,
                image: 'https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg',
                title: 'titulo de prueba 2',
                description: 'descripcion del prueba',
    
            },
            {
                id: 2,
                image: 'https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg',
                title: 'titulo de prueba 3',
                description: 'descripcion del prueba',
    
            }
            ]
        ) */

    const datenow = Timestamp.now();
    const [events, setEvents] = useState(undefined);
    const [eventsLast, setEventsLast] = useState(undefined);
    const [error, setError] = useState();
    const [isLoading, setIsloading] = useState();


    useEffect(() => {

        const getEvents = async () => {
            try {
                setIsloading(true)
                /*      const { docs } = await getDocs((collection(db, "eventos")));
                     const data = docs.map((doc) => {
                         return {
                             id: doc.id,
                             ...doc.data(),
                         }
                     }) */
                const q = query(collection(db, "eventos"), where("fechaFin", ">=", datenow), orderBy("fechaFin"));
                const qLast = query(collection(db, "eventos"), where("fechaFin", "<", datenow), orderBy("fechaFin"));
                const querySnapshot = await getDocs(q);
                const querySnapshotLast = await getDocs(qLast);
                const data = []
                let i = 0
                querySnapshot.forEach((doc) => {
                    data.push(doc.data());
                    data[i].id = doc.id;
                    i++
                });
                const dataLast = []
                let iLast = 0
                querySnapshotLast.forEach((doc) => {
                    dataLast.push(doc.data());
                    dataLast[iLast].id = doc.id;
                    i++
                });
                let orden = 0
                data.forEach((item, orden) => {
                    item.idOrden = orden;
                })
                setEvents(data)
                setEventsLast(dataLast)
                console.log(data)
            } catch (error) {
                setError(error)
            } finally {
                setIsloading(false)
            }
        };
        getEvents()
    }, [])

    return (
        <div>
            <div className="container w-100 d-flex flex-column flex-md-row ">
                <div className="me-3">
                    <h1>Proximos Eventos</h1>
                    {isLoading ? (
                        <h1>Cargando!</h1>
                    ) : error ? (
                        <h1>{error}</h1>
                    ) : events ? (
                        events.map((event) => <NextEvent key={event.id}{...event} />)
                    ) : (
                        <h1>No se encontraron productos!!!!!!</h1>
                    )
                    }
                </div>

                <div className="ms-3">
                    <h1>Eventos Grabados</h1>
                    {isLoading ? (
                        <h1>Cargando!</h1>
                    ) : error ? (
                        <h1>{error}</h1>
                    ) : eventsLast ? (
                        eventsLast.map((eventLast) => <LastEvent key={eventLast.id}{...eventLast} />)
                    ) : (
                        <h1>No se encontraron productos!!!!!!</h1>
                    )
                    }
                </div>



            </div>
        </div>)
}
