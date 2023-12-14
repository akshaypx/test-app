import React, { useEffect, useLayoutEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  EllipsisVerticalIcon,
  HeartIcon,
  HomeIcon,
  Squares2X2Icon,
} from "react-native-heroicons/outline";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import HomeScreen from "./HomeScreen";
import CategoriesScreen from "./CategoriesScreen";
import FavouritesScreen from "./FavouritesScreen";
import MoreScreen from "./MoreScreen";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const TabArr = [
    {
      component: HomeScreen,
      route: "Home",
      label: "Home",
      activeIcon: (color, size) => {
        return <HomeIcon color={color} size={size} />;
      },
    },
    {
      component: CategoriesScreen,
      route: "Categories",
      label: "Categories",
      activeIcon: (color, size) => {
        return <Squares2X2Icon color={color} size={size} />;
      },
    },
    {
      component: FavouritesScreen,
      route: "Favourite",
      label: "Favourite",
      activeIcon: (color, size) => {
        return <HeartIcon color={color} size={size} />;
      },
    },
    {
      component: MoreScreen,
      route: "More",
      label: "More",
      activeIcon: (color, size) => {
        return <EllipsisVerticalIcon color={color} size={size} />;
      },
    },
  ];

  const TabButton = (props) => {
    const { item, indexPosition, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={[
          styles.TabBarContainer,
          indexPosition === 0 && styles.LeftRadius,
          indexPosition === 3 && styles.RightRadius,
          focused && styles.AnimateButtonContainer,
        ]}
      >
        {focused ? (
          <Animatable.View duration={2000}>
            <View className="bg-[#1E222B] w-16 h-16 flex justify-center items-center rounded-full mb-16 absolute top-[-60px] left-[-32px]">
              <View>{item.activeIcon("#E0B420", 35)}</View>
            </View>
          </Animatable.View>
        ) : (
          item.activeIcon("#3d3c3d", 25)
        )}
        {/* {item.activeIcon("#3d3c3d", 25)} */}
        {!focused && <Text style={styles.TabBarLabel}>{item.label}</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "#3d3c3d",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 10,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarStyle: {
          borderRadius: 20,
          elevation: 0,
          height: 70,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderWidth: 0,
          borderColor: "transparent",
          backgroundColor: "transparent",
        },
      }}
    >
      {TabArr.map((items, index) => {
        return (
          <Tab.Screen
            name={items.route}
            component={items.component}
            key={index}
            options={{
              tabBarIcon: ({ color, size }) => items.activeIcon(color, size),
              tabBarButton: (props) => (
                <TabButton {...props} item={items} indexPosition={index} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  TabBarContainer: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TabBarLabel: {
    color: "#8891A5",
    fontSize: 12,
  },
  LeftRadius: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  RightRadius: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  AnimateButtonContainer: {
    backgroundColor: "white",
    paddingTop: 10,
    height: 70,
    width: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  AnimateButtonContainerIcon: {
    position: "relative",
    borderRadius: 50,
    bottom: 30,
  },
});
