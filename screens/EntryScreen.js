import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable
} from "react-native";
import { Button } from "react-native-paper";
import PagerView from "react-native-pager-view";
import entry_screen_1 from "../assets/entry_screen_1.png";
import entry_screen_2 from "../assets/entry_screen_2.png";
import entry_screen_3 from "../assets/entry_screen_3.png";


const deviceWidth = Dimensions.get("window").width;
const deviceHeigth = Dimensions.get("window").height;

const styles = StyleSheet.create({
  body: {
    position: "relative",
    width: deviceWidth,
    height: deviceHeigth - 50,
    background: "#FFFFFF",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    top: 50
  },
  page: {
    width: deviceWidth,
    height: 400,
    borderColor: "black"
  },
  image_style: {
    maxWidth: deviceWidth,
    flex: 1, justifyContent: "center",
    flexDirection: "row",
    maxHeight: 300
  },
  front_label_text: {
    width: deviceWidth - 40,
    textAlign: "center",
    fontSize: 20
  },
  pagination_container: {
    width: deviceWidth,
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  pagination_page_tab: {
    borderRadius: 50,
    backgroundColor: "#d9d9d9",
    width: 20,
    height: 20,
    marginRight: 5
  },
  skip_area: {
    width: deviceWidth,
    height: 40,
    textAlign: "right"
  },
  action_section: {
    width: deviceWidth,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  login_btn: {
    width: deviceWidth,
    backgroundColor: "white",
    color: "black"
  },
  signup_btn: {
    width: deviceWidth
  },
  pagination_page_tab_current: {
    borderRadius: 50,
    backgroundColor: "black",
    width: 20,
    height: 20,
    marginRight: 5
  }
});

const FirstTab = () => {
  const { page, image_style, front_label_text } = styles;
  return (
    <View style={page}>
      <Image style={image_style} source={entry_screen_1}  />
        <Text style={front_label_text}>
          Get your nearest Ambulance on just one click
        </Text>
    </View>
  );
}

const SecondTab = () => {
  const { page, image_style, front_label_text } = styles;
  return (
    <View style={page}>
      <Image 
        source={entry_screen_2}
        style={image_style}
      />
      <Text style={front_label_text}>Check live updates of your medical Insurance</Text>
    </View>
  );
}
const ThirdTab = () => {
  const { page, image_style, front_label_text } = styles;
  return (
    <View style={page}>
      <Image
        source={entry_screen_3}
        style={image_style}
      />
      <Text style={front_label_text}>First Aid tutorials to help you
 in any medical emergency</Text>
    </View>
  );
}



const RANGE = [0, 1, 2];


const Pagination = ({ current, scrollOffsetAnimatedValue, positionAnimatedValue }) => {
  const { pagination_container, pagination_page_tab, pagination_page_tab_current } = styles;

  return (
    <View style={pagination_container}>
      {
        RANGE.map((i) => (
          <View key={i} style={i === current ? pagination_page_tab_current : pagination_page_tab} />
        ))
      }
    </View>
  );
};


export default function EntryScreen({ navigation }) {
  console.log(navigation ? "NO PROBLEM" : "PROBLEM");
  const { body, action_section, login_btn, signup_btn, skip_area } = styles;
  const [ index, setIndex ] = React.useState(0);

  return (
    <View style={body}>
      <View style={skip_area}>
        <Pressable onPress={(e) => {
          navigation.navigate("Home");
        }}>
          <Text style={{right: 10, textAlign: "right"}}>Skip</Text>
        </Pressable>
      </View>
      <PagerView
        initialPage={0}
        style={{
          width: "100%",
          height: deviceHeigth - 200
        }}
        onPageScroll={
          (e) => {
            setIndex(e.nativeEvent.position);
          }
        }
      >
        <FirstTab />
        <SecondTab/>
        <ThirdTab/>
      </PagerView>
      <Pagination
        current={index}
      />
      <View style={action_section}>
        <Button 
          mode="outlined"
          textColor="black"
          contentStyle={{
            width: deviceWidth/2 - 20,
            borderRadius: "none"
          }}
        >
          LOG IN
        </Button>
        <Button 
          mode="elevated"
          buttonColor="black"
          textColor="white"
          contentStyle={{
            width: deviceWidth/2 - 20,
            borderRadius: 2
          }}
        >
          SIGN UP
        </Button>
      </View>
    </View>
  );
}

