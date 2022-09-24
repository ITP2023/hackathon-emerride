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
import ad_banner from "../assets/ad_banner.png";
import map_view from "../assets/city_map_on_home_page.png";

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
  },
  emerride_name: {
    fontWeight: "bold",
    color: "red",
    fontSize: 41
  },
  app_name_banner: {
    width: deviceWidth,
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  the_plus: {
    fontWeight: "bold",
    fontSize: 41,
    lineHeight: 50,
    color: "red"
  },
  decor_text: {
    display: "flex",
    flexDirection: "column",
    width: deviceWidth,
    height: 90,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10
  },
  decor_part1: {
    display: "flex",
    flexDirection: "row",
    width: deviceWidth,
    height: "50%"
  },
  decor_part2: {},
  emergency_prompt: {
    fontSize: 20
  },
  the_question_mark: {
  },
  prompt_decription: {
    opacity: 0.5
  },
  ad_banner_container: {
    width: deviceWidth - 30,
    left: 15,
    height: 160,
    borderRadius: 20
  },
  ad_banner_img: {
    width: "100%", height: "100%",
    borderRadius: 20
  },
  mini_map_view: {
    width: deviceWidth - 30,
    top: 10,
    left: 15,
    height: 260,
    borderRadius: 20
  },
  mini_map_img: {
    width: "100%",
    height: "100%",
    borderRadius: 20
  },
  location_bar: {}
});


export default function HomeScreen({ navigation }) {
  const { body, main, emerride_name, app_name_banner, decor_text, the_plus, emergency_prompt, prompt_decription, mini_map_view, ad_banner_container, ad_banner_img, mini_map_img } = styles;
  return (
    <View style={body}>
      <TopNav/>
      <View style={main}>
        <View style={app_name_banner}>
          <Text style={emerride_name}>Emerride</Text>
          <Text style={the_plus}>+</Text>
        </View>
        <View style={decor_text}>
          <Text style={emergency_prompt}>EMERGENCY ?</Text>
          <Text style={prompt_decription}>Get your nearest ambulance on one click</Text>
        </View>
        <View style={ad_banner_container}>
          <Image style={ad_banner_img} source={ad_banner} />
        </View>
        <View style={mini_map_view}>
          <Image style={mini_map_img} source={map_view} />
        </View>
      </View>
      <BottomNav/>
    </View>
  );
}