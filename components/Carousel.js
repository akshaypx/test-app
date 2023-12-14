import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import * as OutlineHeartIcons from "react-native-heroicons/outline";
import * as SolidHeartIcons from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  toggleFavorite,
} from "../store/favouriteSlice/FavouriteSlice";

const Carousel2 = ({ data }) => {
  const width = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef();
  const favouriteIds = useSelector((state) => state.favourites.favouriteIds);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === data.images.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex, data.images.length]);

  const getItemLayout = (data, index) => ({
    length: width,
    offset: width * index,
    index: index,
  });

  const renderItem = ({ item, index }) => {
    return (
      <View className="mt-2 mb-0 pb-0" key={index}>
        <Image
          source={{
            uri: item,
          }}
          style={{
            width: width,
            height: 200,
          }}
        />
      </View>
    );
  };

  const renderDotIndicators = () => {
    return data.images.map((item, index) => {
      if (activeIndex === index) {
        return (
          <View
            key={index}
            className="bg-[#F9B023] h-1 w-5 rounded-lg mx-1"
          ></View>
        );
      }
      return (
        <View
          key={index}
          className="bg-[#E4E4E4] h-1 w-5 rounded-lg mx-1"
        ></View>
      );
    });
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / width;

    setActiveIndex(Math.round(index));
  };

  return (
    <View className="mb-0">
      <FlatList
        className="relative"
        data={data.images}
        renderItem={renderItem}
        ref={flatlistRef}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        getItemLayout={getItemLayout}
        showsHorizontalScrollIndicator={false}
      />
      <View className="flex flex-row justify-start items-center ml-4 absolute bottom-16">
        {renderDotIndicators()}
      </View>
      <View className="absolute right-10 top-5 h-[58px] w-[58px] bg-black1 rounded-[20px] flex justify-center items-center">
        <TouchableOpacity
          onPress={() => {
            dispatch(toggleFavorite(data));
          }}
        >
          {favouriteIds.includes(data.id) ? (
            <SolidHeartIcons.HeartIcon size={24} color="#000" />
          ) : (
            <OutlineHeartIcons.HeartIcon size={24} color="#000" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Carousel2;
