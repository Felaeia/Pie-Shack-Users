import React from "react";
import { Pressable, Text, View } from "react-native";

export const OurStoryCard = () => {
  return (
    <View className="bg-white rounded-[20px] p-4 flex-row items-center shadow-sm border border-[#E0D0C0]/50 mt-4 mb-6">
      {/* Left Icon */}
      <View className="w-12 h-12 rounded-full bg-[#FBE9C9] items-center justify-center mr-3">
        <Text className="text-[20px]">🥧</Text>
      </View>

      {/* Middle Text Content */}
      <View className="flex-1 mr-2">
        <Text className="text-[16px] font-bold text-[#3E2723] mb-1">
          From Our Shack
        </Text>
        <Text className="text-[12px] text-[#8D6E63] leading-snug">
          Since 2018, we bake with Isabela coconuts, wood-fired warmth & a
          little love.
        </Text>
      </View>

      {/* Right Action Button */}
      <Pressable>
        <Text className="text-[14px] font-bold text-[#FF9F1C]">
          Our story →
        </Text>
      </Pressable>
    </View>
  );
};
