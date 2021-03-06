import React, {useState, useEffect} from "react";

import {
    Container,
    ContainerScrollView
} from './styles'

import SlideCard from "../../components/SlideCard";
import Mock from "../../services/mocking"

const Main = () =>{
    const [slides, setSlides] = useState([]);

    const onFetchSlides = async () =>{
        let response = await Mock.fetchSlide();
        console.log('response', response)
        setSlides(response)
    }   

    useEffect(() =>{
        onFetchSlides()
    }, []);

    return(
        <Container>
            <ContainerScrollView>
                {slides && slides.map((slide, index) => (<SlideCard key={index} slide={slide}/>))}
            </ContainerScrollView>
            
        </Container>
    )
}

export default Main;