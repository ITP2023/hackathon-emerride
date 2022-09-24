import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions
} from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
  top_nav: {
    width: deviceWidth - 20,
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  location_area: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "40%",
    height: "auto"
  }
})

export default function TopNav() {
  const { top_nav, location_area } = styles;
  return (
    <View style={top_nav}>
      <View style={location_area}>
        <Entypo name="location-pin" size={30} />
        <Text>Location</Text>
        <Entypo name="chevron-down" size={20} />
      </View>
      <View>
        <FontAwesome5 name="user-alt" size={30} />
      </View>
    </View>
  );
}