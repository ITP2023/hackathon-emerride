import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";

const styles = StyleSheet.create({
  main: {  
    position: "relative",
    width: "100%",
    height: "100%",
    background: "#FFFFFF"
  },
  content: {

  }
});

export default function HomeScreen(props) {
  console.log(props);
  return (
    <View style={styles.main}>
      <TopNav/>
      <View style={styles.content}>

      </View>
      <BottomNav/>
    </View>
  );
}
