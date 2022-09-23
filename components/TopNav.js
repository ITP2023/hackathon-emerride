import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions
} from "react-native";
import Icon from "@expo/vector-icons/Entypo";

const deviceWidth = Dimensions.get("window").width;
const deviceHeigth = Dimensions.get("window").height;


const styles = StyleSheet.create({
  top_nav: {
    width: deviceWidth,
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default function TopNav() {
  return (
    <View style={styles.top_nav}>
      <View>
        <Icon name="location" size={20} />
        <Text>Location</Text>
        <Icon name="chevron-down" size={20} />
      </View>
      <View>
        <Icon name="user" size={20}/>
      </View>
    </View>
  );
}