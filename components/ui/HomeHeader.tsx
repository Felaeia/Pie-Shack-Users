import { Feather } from "@expo/vector-icons"; // Standard icon library in Expo
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const HomeHeader = () => {
  return (
    <View className="flex-row justify-between items-center px-6 py-4 bg-[#FFFBF2]">
      {/* Left Section: Logo & Delivery Info */}
      <View className="flex-row items-center">
        {/* Logo Wrapper */}
        <View className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-sm border border-[#E0D0C0] mr-3 overflow-hidden">
          <Image
            source={require("../../assets/images/PieShack_logo.jpg")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>

        {/* Delivery Location Area */}
        <View>
          <View className="flex-row items-center mb-0.5">
            <Feather name="map-pin" size={10} color="#8D6E63" />
            <Text className="text-[10px] font-bold text-[#8D6E63] ml-1 tracking-widest">
              DELIVER TO
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center">
            <Text className="text-[15px] font-bold text-[#3E2723] mr-1">
              {/* Name Of User */}
              Cando, Manuel
            </Text>
            <Feather name="chevron-down" size={14} color="#3E2723" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Right Section: Actions */}
      <View className="flex-row items-center">
        {/* Notification Bell */}
        <TouchableOpacity className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-sm border border-[#E0D0C0] mr-2">
          <Feather name="bell" size={18} color="#3E2723" />
        </TouchableOpacity>

        {/* User Avatar */}
        <TouchableOpacity className="w-10 h-10 bg-[#3E2723] rounded-full items-center justify-center shadow-sm">
          <Text className="text-white font-bold text-[16px]">M</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
