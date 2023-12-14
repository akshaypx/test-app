import { Dimensions } from "react-native";

export const useWindowWidth = () => {
  return Dimensions.get("window").width;
};
