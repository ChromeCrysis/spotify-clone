import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ActionName, Container, GroupAction, SubContainer } from "./styles";
import Main from "../../pages/Main/main";
import Icon from "react-native-vector-icons/FontAwesome5";

const TabBar = () => {
  const navigation = useNavigation();
  const [iconConfigure] = useState({
    color: "#fff",
    size: 25,
  });
  return (
    <Container>
      <SubContainer>
        <GroupAction>
          <TouchableOpacity>
            <Icon name="search" {...iconConfigure} />
            <ActionName>Buscar</ActionName>
          </TouchableOpacity>
        </GroupAction>
        <GroupAction>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Icon name="home" {...iconConfigure} />
            <ActionName>Inicio</ActionName>
          </TouchableOpacity>
        </GroupAction>
        <GroupAction>
          <TouchableOpacity>
            <Icon name="book" {...iconConfigure} />
            <ActionName>Biblioteca</ActionName>
          </TouchableOpacity>
        </GroupAction>
      </SubContainer>
    </Container>
  );
};

export default TabBar;
