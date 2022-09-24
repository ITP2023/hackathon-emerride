import React from "react";
import { 
  Text, 
  View, 
  StyleSheet, 
  Dimensions,
  Image
} from "react-native";
import insurance_on_bottom_nav from "../assets/insurance_on_bottom_nav.png";
import first_aid_on_bottom_nav from "../assets/first_aid_on_bottom_nav.png"

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles =  StyleSheet.create({
  bottom_nav: {
    position: "absolute",
    top: deviceHeight - 95,
    width: deviceWidth,
    height: 70,
    backgroundColor: "#E6E8F3",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  bottom_nav_tab_area: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  bottom_nav_tab_icon: {
    width: "55%",
    height: "60%"
  },
  sos_button_area: {
    width: 70,
    elevation: 8,
    bottom: 30,
    borderRadius: 60,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  sos_text: {
    alignSelf: "center",
    color: "white"
  }
});

export default function BottomNav() {
  const { bottom_nav, bottom_nav_tab_area, sos_button_area, bottom_nav_tab_icon, sos_text } = styles;
  return (
    <View style={bottom_nav}>
        <View style={bottom_nav_tab_area}>
          <Image source={insurance_on_bottom_nav} style={bottom_nav_tab_icon} />
          <Text>Insurance</Text>
        </View>
        <View style={sos_button_area}>
          <Text style={sos_text}>SOS</Text>
        </View>
        <View style={bottom_nav_tab_area}>
          <Image style={bottom_nav_tab_icon} source={first_aid_on_bottom_nav} />
          <Text>Self Care</Text>
        </View>
      </View>
  );
}