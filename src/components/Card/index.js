import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, ContainerSubTitle, Photo, SubtitleDescription, SubtitleTitle } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Card = ({ item }) =>{
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Album')}>
        <Container>
            <Photo/>
            <ContainerSubTitle>
                <SubtitleTitle>{item.subtitle.title}</SubtitleTitle>
                <SubtitleDescription>{item.subtitle.description}</SubtitleDescription>
            </ContainerSubTitle>
        </Container>
        </TouchableOpacity>
    )
};

export default Card;
