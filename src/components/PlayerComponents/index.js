import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";
import {
  Banner,
  Container,
  GroupIcons,
  GroupTitle,
  SongSubTitle,
  SongTitle,
} from "./styles";

const PlayerComponent = () => {
  const [iconConfigure] = useState({
    color: "#fff",
    size: 50,
  });
  return (
    <Container>
      <GroupTitle>
        <SongSubTitle>Playng Artist</SongSubTitle>
        <SongTitle>Slipknot</SongTitle>
      </GroupTitle>
      <Banner />
      <GroupTitle>
        <SongTitle>Unsainted</SongTitle>
        <SongSubTitle>Slipknot</SongSubTitle>
      </GroupTitle>
      <GroupIcons>
        <TouchableOpacity>
          <Icon name="random" size={30} color={"gray"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="backward" {...iconConfigure} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="play-circle" size={100} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="forward" {...iconConfigure} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="redo" size={30} color={"gray"} />
        </TouchableOpacity>
      </GroupIcons>
    </Container>
  );
};

export default PlayerComponent;
