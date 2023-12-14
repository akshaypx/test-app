import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import styles from "../constants/globalStyles";
import ProductCard from "./ProductCard";
import { useWindowWidth } from "../utils/useWindowWidth";

const RecommendedSection = () => {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const width = useWindowWidth();

  return (
    <View>
      <Text style={styles.h1_regular_30px} className="py-2 px-6">
        Recommended
      </Text>
      <ScrollView
        vertical
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: 15,
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: width < 400 ? 18 : 24,
          paddingBottom: 400,
        }}
      >
        {status == "loading" && (
          <Text style={styles.h3_bold_20px} className="opacity-50 uppercase">
            Loading
          </Text>
        )}
        {status == "succeeded" &&
          products.map((product) => (
            <View
              className="w-[160px] h-[194px] bg-black1 rounded-2xl justify-start items-center overflow-hidden"
              key={product.id}
            >
              <ProductCard product={product} />
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default RecommendedSection;
