import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const HeroBanner = () => {
  return (
    <View className="px-6 mb-6">
      <LinearGradient
        // Approximating the rich brown to orange gradient from the image
        colors={["#5D4037", "#D87A2B"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="rounded-[24px] p-5 flex-row relative overflow-hidden shadow-sm"
      >
        {/* Decorative Background Circles */}
        <View className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full" />
        <View className="absolute right-12 -top-8 w-32 h-32 bg-white/5 rounded-full" />

        {/* Left Content Area */}
        <View className="flex-1 z-10" style={{ marginBottom: 30 }}>
          {/* Top Badge */}
          {/* <View className="bg-black/30 self-start px-3 py-1.5 rounded-full flex-row items-center mb-3">
            <Text className="text-[12px] mr-1.5">🔥</Text>
            <Text className="text-white text-[10px] font-bold tracking-wider">
              TODAY ONLY
            </Text>
          </View> */}

          {/* Headlines */}
          <Text className="text-white text-[22px] font-bold leading-tight mb-2">
            Warm Pies,{"\n"}Warmer Hearts
          </Text>
          {/* <Text className="text-white/90 text-[13px] leading-snug mb-4">
            Free delivery over ₱500 today{"\n"}Baked fresh at 5AM
          </Text> */}

          {/* Call to Action Button */}
          <TouchableOpacity className="bg-white self-start px-4 py-2.5 rounded-full flex-row items-center">
            <Text className="text-[#3E2723] font-bold text-[14px]">
              Order now →
            </Text>
          </TouchableOpacity>
        </View>

        {/* Right Side Image/Logo */}
        <View className="justify-center items-center z-10 pl-2">
          {/* Your updated logo container mapped to the banner's size */}
          <View className="w-[84px] h-[84px] bg-white rounded-full items-center justify-center shadow-sm border-4 border-white/20 overflow-hidden">
            <Image
              source={require("../../assets/images/PieShack_logo.jpg")}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
