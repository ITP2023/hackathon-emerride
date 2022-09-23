import React from "react";
import { 
  Text, View, StyleSheet, Dimensions } from "react-native";
import Icons from "@expo/vector-icons/Entypo";


const deviceWidth = Dimensions.get("window").width;
const deviceHeigth = Dimensions.get("window").height;


const styles =  StyleSheet.create({
  bottom_nav: {
    position: "absolute",
    top: deviceHeigth - 80,
    width: 360,
    height: 61,
    backgroundColor: "E6E8F3"
  },
  insurance_area: {

  },
  sos_button_area: {

  },
  self_care_area: {

  }
});

export default function BottomNav() {
  return (
    <View style={styles.bottom_nav}>
        <View style={styles.insurance_area}>
          <Icons name="briefcase" size={30} />
          <Text>Insurance</Text>
        </View>
        <View style={styles.sos_button_area}>
          <Text>SOS</Text>
        </View>
        <View style={styles.self_care_area}>
          <Icons name="heart-outlined" size={30} />
          <Text>Self Care</Text>
        </View>
      </View>
  );
}