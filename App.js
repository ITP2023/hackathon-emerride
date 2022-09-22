import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EntryScreen from "./screens/EntryScreen";

const MY_THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF"
  }
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer theme={MY_THEME}>
        <Stack.Navigator initialRouteName="Entry" screenOptions={{ headerShown: false}}>
          <Stack.Screen name="Entry" component={EntryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}
