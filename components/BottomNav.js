import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icons from "@expo/vector-icons/Entypo";


const styles =  StyleSheet.create({
  bottom_nav: {
  position: "absolute",
  width: "360px",
  height: "20%"
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