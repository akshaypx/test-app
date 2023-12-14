import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

import styles from "../constants/globalStyles";

const OfferSection = () => {
  return (
    <View className="h-[160px]">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 25,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View className="w-[269px] h-[123px] bg-secondary flex flex-row justify-center items-center rounded-2xl mr-7">
          <View className="overflow-hidden rounded-xl mr-8">
            <Image
              source={require("../assets/ice-cream.jpg")}
              style={{
                width: 90,
                height: 90,
              }}
            />
          </View>
          <View>
            <Text style={styles.h3_regular_20px} className="text-black1">
              Get
            </Text>
            <Text style={styles.h2_bold_26px} className="text-black1">
              50% OFF
            </Text>
            <View className="flex flex-row gap-x-1">
              <Text style={styles.label_regular} className="text-black1">
                On first
              </Text>
              <Text style={styles.label_medium} className="text-black1">
                03
              </Text>
              <Text style={styles.label_regular} className="text-black1">
                order
              </Text>
            </View>
          </View>
        </View>
        <View className="w-[269px] h-[123px] bg-secondary2 opacity-30 flex flex-row justify-around items-center rounded-2xl">
          <View className="overflow-hidden rounded-xl">
            <Image
              source={require("../assets/ice-cream.jpg")}
              style={{
                width: 90,
                height: 90,
              }}
            />
          </View>
          <View>
            <Text className="text-black1 text-2xl">Get</Text>
            <Text className="text-black1 text-2xl font-bold">50% OFF</Text>
            <Text className="text-black1 text-sm">On first 03 order</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OfferSection;
