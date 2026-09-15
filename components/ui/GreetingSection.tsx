import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export const GreetingSection = () => {
  const [greeting, setGreeting] = useState("Good day");
  const [emoji, setEmoji] = useState("👋");

  // Static placeholder for the user's name
  const userName = "Manuel";

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good morning");
      setEmoji("🌅");
    } else if (currentHour < 18) {
      setGreeting("Good afternoon");
      setEmoji("🌞");
    } else {
      setGreeting("Good evening");
      setEmoji("🌙");
    }
  }, []);

  return (
    <View className="px-6 pt-2 pb-4">
      <Text className="text-[28px] font-bold text-[#3E2723] leading-tight">
        {greeting},
      </Text>
      <Text className="text-[22px] font-normal text-[#3E2723] mt-1">
        {userName}! {emoji}
      </Text>
    </View>
  );
};
