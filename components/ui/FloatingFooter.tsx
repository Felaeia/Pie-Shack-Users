import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Make sure this is imported!
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const FloatingFooter = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const router = useRouter();

  const tabs = [
    { name: "Home", icon: "home", route: "/" },
    { name: "Menu", icon: "menu", route: "/menuList" },
    { name: "Cart", icon: "shopping-bag", route: "/cart" }, // Assuming you have a cart page
    { name: "History", icon: "clock", route: "/orders" }, // Assuming you have a history page
  ] as const;

  const handlePress = (tabName: string, route: string) => {
    setActiveTab(tabName); // Updates the UI styling
    router.push(route as any); // THIS is what actually changes the page
  };

  return (
    <View className="absolute bottom-6 left-6 right-6 bg-[#3E2723] rounded-full flex-row justify-between items-center px-2 py-2 shadow-lg z-50">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;

        return (
          <TouchableOpacity
            key={tab.name}
            // Updated this line to trigger navigation
            onPress={() => handlePress(tab.name, tab.route)}
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
