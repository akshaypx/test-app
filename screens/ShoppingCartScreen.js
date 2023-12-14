import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronLeftIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/outline";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import styles from "../constants/globalStyles";

const ShoppingCartScreen = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="h-full items-center justify-between">
        <View className="w-full h-[252px] flex items-center">
          <View className="w-full py-7 px-5 flex flex-row justify-start items-center">
            <Pressable onPress={() => navigation.goBack()}>
              <View className="bg-black1 w-[40px] h-[40px] justify-center items-center rounded-full">
                <ChevronLeftIcon size={20} color="#000" />
              </View>
            </Pressable>
            <Text style={styles.body_regular_16px} className="pl-5">
              Shopping Cart ({cartItems.length})
            </Text>
          </View>

          {/* Cart Items  */}
          {cartItems.length > 0 &&
            cartItems.map((cartItem) => {
              return <CartItem key={cartItem.id} item={cartItem} />;
            })}
          {cartItems.length > 0 && (
            <View className="w-full flex flex-row px-5 py-2 justify-end">
              <Text style={styles.button_12} className="text-primary">
                Edit
              </Text>
            </View>
          )}
        </View>

        {cartItems.length > 0 ? (
          <View className="bg-black1 w-[95%] h-[266px] rounded-t-[30px] p-8">
            <View className="flex-1">
              <View className="flex flex-row justify-between pb-4">
                <Text
                  style={styles.body2_regular_14px}
                  className="text-grayScaleBlack02 "
                >
                  Subtotal
                </Text>
                <Text style={styles.body2_medium_14px}>${totalPrice}</Text>
              </View>
              <View className="flex flex-row justify-between pb-4">
                <Text
                  style={styles.body2_regular_14px}
                  className="text-grayScaleBlack02 "
                >
                  Delivery
                </Text>
                <Text style={styles.body2_medium_14px}>$2</Text>
              </View>
              <View className="flex flex-row justify-between pb-4">
                <Text
                  style={styles.body2_regular_14px}
                  className="text-grayScaleBlack02 "
                >
                  Total
                </Text>
                <Text style={styles.body2_medium_14px}>${totalPrice + 2}</Text>
              </View>
            </View>
            <View className="w-full bg-primary h-[56px]  justify-center items-center rounded-[20px]">
              <Text style={styles.body2_semibold_14px} className="text-[#fff]">
                Proceed To checkout
              </Text>
            </View>
          </View>
        ) : (
          <View className="h-full flex justify-start items-center gap-4">
            <ShoppingCartIcon size={30} color="#000" />
            <Text style={styles.h4_bold_18px} className="opacity-50">
              Opps! No Items in cart...
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCartScreen;
