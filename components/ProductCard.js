import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { PlusIcon } from "react-native-heroicons/outline";
import * as OutlineHeartIcons from "react-native-heroicons/outline";
import * as SolidHeartIcons from "react-native-heroicons/solid";

import styles from "../constants/globalStyles";
import { fetchProduct } from "../store/productSlice/ProductSlice";
import { addItemToCart } from "../store/cartSlice/CartSlice";
import { toggleFavorite } from "../store/favouriteSlice/FavouriteSlice";
import { truncateWithEllipses } from "../utils/Truncate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favouriteIds = useSelector((state) => state.favourites.favouriteIds);
  return (
    <>
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
    </>
  );
};

export default ProductCard;
