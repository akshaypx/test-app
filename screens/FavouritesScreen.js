import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon } from "react-native-heroicons/outline";
import { addItemToCart } from "../store/cartSlice/CartSlice";
import { fetchProduct } from "../store/productSlice/ProductSlice";
import * as OutlineHeartIcons from "react-native-heroicons/outline";
import * as SolidHeartIcons from "react-native-heroicons/solid";
import { toggleFavorite } from "../store/favouriteSlice/FavouriteSlice";
import styles from "../constants/globalStyles";
import { truncateWithEllipses } from "../utils/Truncate";

const FavouritesScreen = () => {
  const navigation = useNavigation();
  const favouriteProducts = useSelector(
    (state) => state.favourites.favouriteProducts
  );
  const favouriteIds = useSelector((state) => state.favourites.favouriteIds);

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    // fetchProduct();
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.h1_regular_30px} className="py-2 px-6">
          Favourites
        </Text>
        <ScrollView
          vertical
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: 15,
            display: "flex",
            justifyContent: "start",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 35,
            paddingBottom: 400,
          }}
        >
          {favouriteProducts.length > 0 ? (
            favouriteProducts.map((product) => (
              <View
                className="w-[160px] h-[194px] bg-black1 rounded-2xl justify-start items-center overflow-hidden"
                key={product.id}
              >
                <View className="absolute z-10 left-3 top-3 h-[20px] w-[20px] flex justify-center items-center">
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(toggleFavorite(product));
                    }}
                  >
                    {favouriteIds.includes(product.id) ? (
                      <SolidHeartIcons.HeartIcon size={24} color="#FF8181" />
                    ) : (
                      <OutlineHeartIcons.HeartIcon size={24} color="#000" />
                    )}
                  </TouchableOpacity>
                </View>
                <View className="pb-2">
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(fetchProduct(product.id)).then(() =>
                        navigation.navigate("Details")
                      );
                    }}
                  >
                    <Image
                      source={{
                        uri: product.thumbnail,
                      }}
                      style={{
                        width: 160,
                        height: 120,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View className="w-[80%] pb-1 flex flex-row justify-between">
                  <Text style={styles.h4_bold_18px} className="">
                    ${product.price}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(addItemToCart(product));
                    }}
                    key={product.id}
                  >
                    <View className="bg-primary w-6 h-6 rounded-full justify-center items-center">
                      <PlusIcon color="#F8F9FB" size={15} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="w-[80%]">
                  <Text style={styles.body_medium_16px} className="opacity-50">
                    {truncateWithEllipses(product.title, 12)}
                  </Text>
                </View>
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
