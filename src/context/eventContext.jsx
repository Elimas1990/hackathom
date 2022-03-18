import { createContext, useState } from "react";

const initialEventContext = []

export const EventContext = createContext(initialEventContext)

export const EventProvider = ({ children }) => {

    let conteo = 0;

   
    return (
        <EventContext.Provider
            value={{
                conteo
            }}>
            {children}
        </EventContext.Provider>
    )
}