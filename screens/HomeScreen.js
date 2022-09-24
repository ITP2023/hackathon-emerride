import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
// import ad_banner from "../assets/ad_banner.png";
// import app_banner from "../assets/app_banner.png";
// import bottom_nav from "../assets/bottom_nav.png";
// import top_nav from "../assets/top_nav.png";
// import map_view from "../assets/map_view.png";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
  body: {
    position: "relative",
    width: deviceWidth,
    height: deviceHeight - 50,
    background: "#FFFFFF",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    top: 50
  },
  main: {
    width: deviceWidth,
    height: deviceHeight - 50,
  }
});


export default function HomeScreen({ navigation }) {
  const { body, main } = styles;
  return (
    <View style={body}>
      <TopNav/>
      <View>
        
      </View>
      <BottomNav/>
    </View>
  );
}