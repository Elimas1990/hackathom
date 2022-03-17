import React from "react";
import './nextEventContainer.css';
import { NextEvent } from "../nextEvent/nextEvent";

export const NextEventContainer = () => {
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

    return (
        <div>
            
            <div className="container w-100">
                <h1>Eventos</h1>
                {
                    events.map((event) => <NextEvent key={event.id}{...event} />)
                }

            </div>

        </div>)
}
