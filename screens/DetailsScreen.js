import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  PlusIcon,
  ChevronLeftIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { addItemToCart } from "../store/cartSlice/CartSlice";
import Carousel from "../components/Carousel";
import styles from "../constants/globalStyles";

const DetailsScreen = () => {
  const product = useSelector((state) => state.products.productData);
  const totalItems = useSelector((state) => state.cart.totalItems);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function calculateDiscountAmount(finalPrice, discountPercentage) {
    const discountAmount = (finalPrice * discountPercentage) / 100;
    return discountAmount.toFixed(2);
  }

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="w-full h-[252px] flex items-center justify-start">
        <View className="w-full pt-7 pb-2 px-5 flex flex-row justify-between items-center">
          <Pressable onPress={() => navigation.goBack()}>
            <View className="bg-black10 w-[40px] h-[40px] justify-center items-center rounded-full">
              <ChevronLeftIcon size={20} color="#000" />
            </View>
          </Pressable>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cart");
              }}
            >
              <View className="relative">
                <ShoppingBagIcon color="#000" />
                <View className="absolute top-[-5] right-[-5] bg-[#F9B023] h-5 w-5 justify-center items-center rounded-full">
                  <Text className="text-black1">{totalItems}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full px-5">
          <Text style={styles.h1_regular_50px}>{product.title}</Text>
        </View>
        <View className="w-full px-5 py-2">
          <Text style={styles.h1_bold_50px}>{product.brand}</Text>
        </View>

        <View className="flex flex-row w-full pt-2 px-5 pb-2 gap-x-2">
          {Array.from({ length: 5 }, (_, i) => {
            if (Math.round(product.rating) > i)
              return <StarIcon key={i} size={20} color="#F9B023" />;
          })}
          <Text style={styles.body2_regular_14px} className="opacity-40">
            {Math.round(product.rating * 100)} Reviews
          </Text>
        </View>

        {/* <Carousel images={product.images} /> */}
        <Carousel data={product} />

        <View className="w-full px-5 flex flex-row justify-start">
          <View className="flex flex-row justify-start pr-5">
            <Text
              style={styles.body_bold_16px}
              className="text-primary uppercase pb-2"
            >
              ${product.price}
            </Text>
            <Text
              style={styles.body_regular_16px}
              className="text-primary uppercase pb-2"
            >
              /KG
            </Text>
          </View>
          <View className="flex flex-row justify-start h-[24px] bg-primary rounded-full px-2 items-center">
            <Text
              style={styles.body2_regular_14px}
              className="text-grayScaleBlack06 uppercase px-1"
            >
              $
              {calculateDiscountAmount(
                product.price,
                product.discountPercentage
              )}
            </Text>
            <Text
              style={styles.body2_regular_14px}
              className="text-grayScaleBlack06 uppercase px-1"
            >
              off
            </Text>
          </View>
        </View>

        <View className="flex flex-row w-full justify-around p-4">
          <TouchableOpacity
            onPress={() => {
              dispatch(addItemToCart(product));
            }}
            className="border-solid border-2 border-primary h-[56px] w-[169px] justify-center items-center rounded-[20px]"
          >
            <Text style={styles.button_14} className="text-primary">
              Add To Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(addItemToCart(product));
              navigation.navigate("Cart");
            }}
            className="bg-primary h-[56px] w-[169px] justify-center items-center rounded-[20px]"
          >
            <Text style={styles.button_14} className="text-[#fff]">
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>

        <View className="w-full px-5 pt-2">
          <View>
            <Text style={styles.body_medium_16px}>Details</Text>
          </View>
          <View className="pt-2">
            <Text
              style={styles.body_regular_16px}
              className="leading-[24px] text-gray03"
            >
              {product.description}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
