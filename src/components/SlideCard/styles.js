import styled from "styled-components/native";
import { View } from 'react-native';


export const Container = styled.View`
   padding: 50px 20px;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 22px;
    font-weight: bold;
`

export const SlideScroll = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false,
    horizontal: true
})``;