import { CarouselContainer } from "../components/carouselsContainer/carouselsContainer"
import { NextEventContainer } from "../components/nextEventContainer/nextEventContainer"
import {Modal } from "bootstrap"

const Home = () =>{
   
   
    return (
        <>
            <div className="container">
                <CarouselContainer />
                <NextEventContainer/>
            </div>

        </>
        
        
    )
}
export default Home