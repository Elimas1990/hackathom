import React from "react";
import './nextEventContainer.css';
import { NextEvent } from "../nextEvent/nextEvent";

export const NextEventContainer = ({ events


}) => {


    return (
        <div>
            {
                events.map((event) => <NextEvent key={event.id}{...event} />)
            }
        </div>)
}
