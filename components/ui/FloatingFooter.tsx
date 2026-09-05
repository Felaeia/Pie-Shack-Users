import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const FloatingFooter = () => {
  // For the static mockup, we'll manage the active tab locally.
  // In a real app, this would tie into your router (e.g., Expo Router).
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = [
    { name: "Home", icon: "home" },
    { name: "Menu", icon: "menu" },
    { name: "Cart", icon: "shopping-bag" },
    { name: "History", icon: "clock" },
  ] as const;

  return (
    <View className="absolute bottom-6 left-6 right-6 bg-[#3E2723] rounded-full flex-row justify-between items-center px-2 py-2 shadow-lg z-50">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;

        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => setActiveTab(tab.name)}
            className={`flex-row items-center rounded-full py-2.5 px-4 ${
              isActive ? "bg-white" : "bg-transparent"
            }`}
          >
            <Feather
              name={tab.icon}
              size={20}
              color={isActive ? "#3E2723" : "#E0D0C0"}
            />
            {isActive && (
              <Text className="text-[#3E2723] font-bold text-[14px] ml-2">
                {tab.name}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
