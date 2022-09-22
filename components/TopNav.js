import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icons from "@expo/vector-icons/Entypo";


const styles = StyleSheet.create({
  top_nav: {
    
  }
})

export default function TopNav() {
  return (
    <View style={styles.top_nav}>
      <Icons name="location" size={20} />
      <Text>Location</Text>
      <Icons name="arrow-down" size={20} />
      <Icons name="user" size={20}/>
    </View>
  );
}