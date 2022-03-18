import React, { useState, useEffect } from "react";
import './carouselsContainer.css';
import { CarouselItem } from "../carouselsItem/carouselsItem";
import { Timestamp, collection, getDocs, query, orderBy, limit, where } from "firebase/firestore"
import { db } from "../firebase/firebase"


export const CarouselContainer = () => {
    /*   const events = (
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
    const [error, setError] = useState();
    const [isLoading, setIsloading] = useState();
  

    useEffect(() => {

        const getEvents = async () => {
            try {
                setIsloading(true)
                const q = query(collection(db, "eventos"), where("fechaFin", ">=", datenow), orderBy("fechaFin"), limit(3));
                const querySnapshot = await getDocs(q);
                const data = []
                let i = 0
                querySnapshot.forEach((doc) => {
                    data.push(doc.data());
                    data[i].id = doc.id;
                    i++
                });


                /*            const { docs } = await getDocs((collection(db, "eventos")));
                           const data = docs.map((doc) => {
                               return {
                                   id: doc.id,
                                   ...doc.data(),
                               }
                           }) */
                let orden = 0
                data.forEach((item, orden) => {
                    item.idOrden = orden;
                })
                setEvents(data)
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
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                {isLoading ? (
                    <h1>Cargando!</h1>
                ) : error ? (
                    <h1>{error}</h1>
                ) : events ? (
                    events.map((event) => <CarouselItem key={event.id}{...event} />)
                ) : (
                    <h1>No se encontraron productos!!!!!!</h1>
                )
                }

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

