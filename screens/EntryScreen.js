import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
} from "react-native";

import PagerView from "react-native-pager-view";
import doctor_2_1 from "../assets/doctor_2_1.png";


const deviceWidth = Dimensions.get("window").width;
const deviceHeigth = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  imageStyle: {
    width: deviceWidth * 0.75,
    height: deviceHeigth,
    resizeMode: "contain",
    flex: 1,
  },
  textContainer: {
    alignItems: "flex-start",
    alignSelf: "flex-end",
    flex: 0.5,
  },
  heading: {
    color: "#444",
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 5,
  },

  pagination: {
    position: "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "row",
    height: 40,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  main: {
    width: deviceWidth,
    height: 150,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
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
  skip_section: {
    maxWidth: 37,
    maxHeight: 22,
    left: 150
  },
  banner_style: {
    width: deviceWidth,
    height: 234
  },
  front_label_text: {
    width: deviceWidth - 100,
    height: 50,
    textAlign: "center",
    fontSize: 15
  }
});

const FirstTab = () => {
  const {imageStyle, main, banner_style, front_label_text} = styles;
  return (
    <View style={main}>
<Image style={imageStyle} source={doctor_2_1}  />
<Text style={front_label_text}>Get your nearest Ambulance
on just one click</Text>

</View>
  )
}

const SecondTab = () => <View><Text>2</Text></View>
const ThirdTab = () => <View><Text>3</Text></View>


const TABS_NUM = 3;
const DOT_SIZE = 40;

const RANGE = [0, 1, 2];


const Pagination = ({
  scrollOffsetAnimatedValue,
  positionAnimatedValue,
}) => {
  const inputRange = [0, TABS_NUM];
  const translateX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, TABS_NUM * 10],
  });

  return (
    <View style={styles.pagination}>
      <Animated.View
        style={() => ({
          ...styles.paginationIndicator,
          position: "absolute",
          transform: [{ translateX: translateX }],
        })}
      />
      {RANGE.map((item) => {
        return (
          <View key={item.key} style={styles.paginationDotContainer}>
            <View
              style={styles.paginationDot}
            />
          </View>
        );
      })}
    </View>
  );
};

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export default function EntryScreen() {
  const { container } = styles;
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={container}>
      <AnimatedPagerView
        initialPage={0}
        style={{
          width: "100%",
          height: "50%"
        }}
        onPageScroll={Animated.event(
          [
            {
              nativeEvent: {
                offset: scrollOffsetAnimatedValue,
                position: positionAnimatedValue,
              },
            },
          ],
          {
            useNativeDriver: true,
          }
        )}
      >
        <FirstTab />
        <SecondTab/>
        <ThirdTab/>
      </AnimatedPagerView>
      <Pagination
        scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
        positionAnimatedValue={positionAnimatedValue}
      />
    </View>
  );
}

