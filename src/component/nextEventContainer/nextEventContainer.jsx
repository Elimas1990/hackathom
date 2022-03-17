import React from "react";
import './nextEventContainer.css';
import { Row, Array, Col } from "bootstrap";
import { NextEvent } from "../nextEvent/nextEvent";

export const NextEventContainer = ({ events


}) => {


    return (
        <Row xs={1} md={1} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    {
                        events.map((event) => <NextEvent key={event.id}{...event} />)
                    }
                </Col>
            ))}
        </Row>
        )
}
