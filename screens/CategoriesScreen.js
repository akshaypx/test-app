import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const CategoriesScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    // fetchProduct();
  }, []);
  return (
    <SafeAreaView>
      <Text>CategoriesScreen</Text>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
