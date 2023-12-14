import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./store/store";
import DetailsScreen from "./screens/DetailsScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import Tabs from "./screens/Tabs";
import { useFonts } from "expo-font";
import {
  Manrope_700Bold,
  Manrope_600SemiBold,
  Manrope_500Medium,
  Manrope_400Regular,
} from "@expo-google-fonts/manrope";

const Stack = createNativeStackNavigator();

// const getFonts = () =>
//   Font.loadAsync({
//     "manrope-bold": require("assets/fonts/Manrope-Bold.ttf"),
//     "manrope-semibold": require("assets/fonts/Manrope-Semibold.ttf"),
//     "manrope-medium": require("assets/fonts/Manrope-Medium.ttf"),
//     "manrope-regular": require("assets/fonts/Manrope-Regular.ttf"),
//   });

export default function App() {
  const [fontsLoaded] = useFonts({
    Manrope_700Bold,
    Manrope_600SemiBold,
    Manrope_500Medium,
    Manrope_400Regular,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Screens */}
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Cart" component={ShoppingCartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // if (fontsLoaded) {
  //   return (
  //     <Provider store={store}>
  //       <NavigationContainer>
  //         <Stack.Navigator>
  //           {/* Screens */}
  //           <Stack.Screen name="Tabs" component={Tabs} />
  //           <Stack.Screen name="Home" component={HomeScreen} />
  //           <Stack.Screen name="Details" component={DetailsScreen} />
  //           <Stack.Screen name="Cart" component={ShoppingCartScreen} />
  //         </Stack.Navigator>
  //       </NavigationContainer>
  //     </Provider>
  //   );
  // } else {
  //   return (
  //     <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  //   );
  // }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
