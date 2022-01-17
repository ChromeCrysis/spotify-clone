import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`

export const GroupTitle = styled.View`
    align-items: center;
    margin-top: 50px;
`

export const SongTitle = styled.Text`
    color: #ccc;
    font-size: 18px;
    font-weight: bold;
`

export const SongSubTitle = styled.Text`
    color: #ccc;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;

`

export const Banner = styled.Image`
    background-color: gray;
    padding: 50px 30px;
    margin: 20px;
    height: 40%;
    border-radius: 10px;
`

export const GroupIcons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
