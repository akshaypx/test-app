import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import styles from "../constants/globalStyles";
import ProductCard from "../components/ProductCard";

const FavouritesScreen = () => {
  const navigation = useNavigation();
  const favouriteProducts = useSelector(
    (state) => state.favourites.favouriteProducts
  );

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View className="flex justify-center items-center w-full">
        <View className="w-full">
          <Text style={styles.h1_regular_30px} className="py-2 px-6">
            Favourites
          </Text>
        </View>
        <ScrollView
          vertical
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingTop: 15,
            display: "flex",
            justifyContent: "start",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 24,
            paddingBottom: 400,
            width: "100%",
          }}
        >
          {favouriteProducts.length > 0 ? (
            favouriteProducts.map((product) => (
              <View
                className="w-[160px] h-[194px] bg-black1 rounded-2xl justify-start items-center overflow-hidden"
                key={product.id}
              >
                <ProductCard product={product} />
              </View>
            ))
          ) : (
            <Text>No Favourited Products</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FavouritesScreen;
