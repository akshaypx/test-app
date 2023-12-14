import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MinusIcon, PlusIcon } from "react-native-heroicons/outline";
import { useDispatch } from "react-redux";

import {
  decreaseItemCount,
  increaseItemCount,
} from "../store/cartSlice/CartSlice";
import styles from "../constants/globalStyles";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <View className="w-[90%] border-solid border-b-[1px] border-[#EBEBFB] py-4 flex flex-row">
      <View className="w-10 h-10 bg-blue-200 m-2 rounded-lg overflow-hidden">
        <Image
          source={{
            uri: item.thumbnail,
          }}
          style={{
            width: 45,
            height: 45,
          }}
        />
      </View>
      <View className="m-2 flex-1">
        <Text style={styles.body2_semibold_14px}>{item.title}</Text>
        <Text style={styles.body2_medium_14px}>${item.price}</Text>
      </View>
      <View className="flex flex-row items-center">
        <TouchableOpacity
          onPress={() => {
            dispatch(decreaseItemCount({ id: item.id }));
          }}
        >
          <View className="bg-[#F8F9FB] w-[40px] h-[40px] justify-center items-center rounded-full">
            <MinusIcon color="#130F26" size={15} />
          </View>
        </TouchableOpacity>
        <View className=" w-[40px] h-[40px] justify-center items-center">
          <Text style={styles.body2_semibold_14px}>{item.count}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(increaseItemCount({ id: item.id }));
          }}
        >
          <View className="bg-[#F8F9FB] w-[40px] h-[40px] justify-center items-center rounded-full">
            <PlusIcon color="#130F26" size={15} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
