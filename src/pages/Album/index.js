import React, { useState } from "react";
import {
  Container,
  ContainerHead,
  ContainerNavBar,
  GroupItemNavbar,
  ButtonFollow,
  ContainerInfoBand,
  BandName,
  BandFooter,
  Photo,
  Content,
  ButtonRandomOrder,
  ButtonRandomText,
  InfoCategory,
  ContainerMusic,
  GroupMusic,
  Music,
  MusicNumber,
  MusicName,
  MusicListening,
  MusicTime,
  GroupAllMusic,
  ContainerScrollView
} from "./styles";

import Icon from "react-native-vector-icons/FontAwesome5";

import musics from "./musics.json";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Musics = () => {
  let [iconConfigure] = useState({
    size: 20,
    color: "#fff",
  });
  return (
    musics &&
    musics.map((music, index) => (
      <Music key={index++}>
        <GroupAllMusic>
          <MusicNumber>{index++}</MusicNumber>
          <GroupMusic>
            <MusicName>{music.name}</MusicName>
            <MusicListening>{music.listening}</MusicListening>
          </GroupMusic>
          
        </GroupAllMusic>
        <MusicTime>{music.duration}</MusicTime>
          <Icon
            name="ellipsis-v"
            {...iconConfigure}
            style={{
              padding: 10,
            }}
          />
      </Music>
    ))
  );
};

const Album = () => {
  const navigation = useNavigation();
  let [iconConfigure] = useState({
    size: 20,
    color: "#fff",
  });
  return (
    <Container>
      <ContainerHead>
        <Photo />
        <ContainerNavBar>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" {...iconConfigure} />
          </TouchableOpacity>
          <GroupItemNavbar>
            <TouchableOpacity>
              <ButtonFollow>Seguindo</ButtonFollow>
            </TouchableOpacity>
            <Icon name="ellipsis-v" {...iconConfigure} />
          </GroupItemNavbar>
        </ContainerNavBar>
        <ContainerInfoBand>
          <BandName>Slipknot</BandName>
          <BandFooter>9000000 ouvintes mensais</BandFooter>
        </ContainerInfoBand>
      </ContainerHead>
      <Content>
        <ButtonRandomOrder>
          <ButtonRandomText>Ordem Aleatória</ButtonRandomText>
        </ButtonRandomOrder>
        <InfoCategory>Popular</InfoCategory>
        <ContainerMusic>
          <ContainerScrollView>
            <Musics />
          </ContainerScrollView>
        </ContainerMusic>
      </Content>
    </Container>
  );
};

export default Album;
