import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #333;
`;

export const ContainerHead = styled.View`
  padding: 50px 30px;
  justify-content: space-between;
`;

export const ContainerNavBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GroupItemNavbar = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonFollow = styled.Text`
  margin-right: 20px;
  color: #fff;
  border-color: #fff;
  border-width: 1px;
  border-radius: 6px;
  padding: 6px 10px;
`;

export const ContainerInfoBand = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const BandName = styled.Text`
  color: #fff;
  font-size: 60px;
  font-weight: bold;
  padding: 10px;
`;

export const BandFooter = styled.Text`
  color: #e6e6e6;
  font-size: 12px;
  text-transform: uppercase;
`;

export const Photo = styled.Image`
  background-color: gray;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 150%;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 20px;
`;

export const ButtonRandomOrder = styled.TouchableOpacity`
    background-color: #1DD15D;
    padding: 20px 50px;
    border-radius: 30px;
`;

export const ButtonRandomText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

export const InfoCategory = styled.Text`
    color: #fff;
    font-size: 22px;
    padding: 20px 0px;
    font-weight: bold;
`;

export const ContainerMusic = styled.View`
  flex: 1;
  width: 100%;
`
export const GroupAllMusic = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const GroupMusic = styled.View`  
`;

export const Music = styled.TouchableOpacity`
  flex-direction: row;
  height: 60px;
  align-items: center;
  justify-content: space-between;
`;

export const MusicNumber = styled.Text`
  color: #e6e6e6;
  padding: 20px;
`;

export const MusicName = styled.Text`
  color: #fff;
  font-size: 16px;
  padding: 5px 0px;
`;

export const MusicListening = styled.Text`
  color: #e6e6e6;
`;

export const MusicTime = styled.Text`
  color: #e6e6e6;
  padding: 20px;
`;

export const ContainerScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})``;
