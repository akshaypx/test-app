import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OfferSection from "../components/OfferSection";
import RecommendedSection from "../components/RecommendedSection";
import { fetchProducts } from "../store/productSlice/ProductSlice";
import styles from "../constants/globalStyles";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  const totalItems = useSelector((state) => state.cart.totalItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="h-full bg-[#fff]">
      <ScrollView vertical>
        {/* Header */}
        <View className="w-full h-[240px] bg-primary flex items-center">
          <View className="w-full h-[15.75rem] py-7 px-5 flex flex-row justify-between items-center">
            <View>
              <Text
                style={styles.h3_semibold_20px}
                className="text-black1 text-[22px]"
              >
                Hey, Rahul
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              >
                <View className="relative">
                  <ShoppingBagIcon color="#F8F9FB" />
                  <View className="absolute top-[-5] right-[-5] bg-secondary h-5 w-5 justify-center items-center rounded-full">
                    <Text style={styles.button_12} className="text-[#fff]">
                      {totalItems}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className=" w-full px-5 pt-2">
            <View className="bg-primary2 h-[56px] flex flex-row justify-start items-center p-4 rounded-full">
              <MagnifyingGlassIcon color="#F8F9FB" size={20} />
              <Text
                style={styles.body2_medium_14px}
                className="text-gray03 text-sm pl-2"
              >
                Search Products or store
              </Text>
            </View>
          </View>

          <View className="w-full px-5 pt-8 flex flex-row justify-between">
            <View>
              <Text
                style={styles.body2_semibold_14px}
                className="text-black1 uppercase pb-2 opacity-50"
              >
                delivery to
              </Text>
              <View className="flex flex-row items-center">
                <Text
                  style={styles.body2_regular_14px}
                  className="pr-2 text-black1"
                >
                  Green Way 3000, Sylhet
                </Text>
                <ChevronDownIcon color="#F8F9FB" size={10} />
              </View>
            </View>
            <View>
              <Text
                style={styles.body2_regular_14px}
                className="text-black1 uppercase pb-2 opacity-50"
              >
                within
              </Text>
              <View className="flex flex-row items-center">
                <Text
                  style={styles.body2_regular_14px}
                  className="pr-2 text-black1"
                >
                  1 Hour
                </Text>
                <ChevronDownIcon color="#F8F9FB" size={10} />
              </View>
            </View>
          </View>
        </View>

        {/* Offer Section  */}
        <OfferSection />

        {/* Recommended Section  */}
        <RecommendedSection navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
