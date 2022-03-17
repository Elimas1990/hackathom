import React,{useState} from "react";
import './carouselContainer.css';
import { Carousel } from "bootstrap";
import { CarouselItem } from "../carouselsItem/carouselsItem";

export const CarouselContainer = ({ events


}) => {
    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                events.map((event)=>  <CarouselItem key={event.id}{...event}/>)
            }
        </Carousel>
    );
}
