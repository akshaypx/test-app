import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../constants/globalStyles";

const CategoriesScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View className="flex justify-center items-center h-full">
        <Text style={styles.h3_bold_20px}>Coming Soon...</Text>
        <Image
          source={require("../assets/Designer.png")}
          style={{
            width: 300,
            height: 300,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
