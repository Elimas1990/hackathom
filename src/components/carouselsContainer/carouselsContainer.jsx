import React ,{useState}from "react";
import './carouselsContainer.css';
import { CarouselItem } from "../carouselsItem/carouselsItem";

export const CarouselContainer = () => {
    const events = (
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
    )
    const [orden, setOrden] = useState(true);
    return (   
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                      {
                          events.map((event) => <CarouselItem orden={orden} key={event.id}{...event} />
                     
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

