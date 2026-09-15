import { Feather } from "@expo/vector-icons";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

// Mock data for order history
const mockOrders = [
  {
    id: "ORD-8923",
    date: "Oct 24, 2024",
    status: "Completed",
    total: 770,
    items: "2x Classic Buko Pie, 1x Choco Pecan Bliss",
  },
  {
    id: "ORD-8811",
    date: "Oct 20, 2024",
    status: "On the way",
    total: 350,
    items: "1x Classic Buko Pie",
  },
  {
    id: "ORD-8754",
    date: "Oct 15, 2024",
    status: "Completed",
    total: 420,
    items: "1x Choco Pecan Bliss",
  },
  {
    id: "ORD-8600",
    date: "Oct 02, 2024",
    status: "Cancelled",
    total: 350,
    items: "1x Classic Buko Pie",
  },
];

export default function Orders() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "On the way":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#EFEFEF]">
      <FlatList
        data={mockOrders}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        // Add extra padding at the bottom so the FloatingFooter doesn't cover the last item
        contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 24 }}
        ListHeaderComponent={
          <View className="pt-6 pb-4">
            <Text className="text-[24px] font-bold text-[#3E2723]">
              My Orders
            </Text>
            <Text className="text-[14px] text-[#8D6E63] mt-1">
              Track your past and current pie deliveries
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
            {/* Top Row: Order ID and Status */}
            <View className="flex-row justify-between items-center mb-3">
              <View className="flex-row items-center">
                <Feather name="file-text" size={16} color="#8D6E63" />
                <Text className="text-[14px] font-bold text-[#3E2723] ml-2">
                  {item.id}
                </Text>
              </View>
              <View
                className={`px-3 py-1 rounded-full ${getStatusColor(
                  item.status,
                )}`}
              >
                <Text className="text-[12px] font-bold">{item.status}</Text>
              </View>
            </View>

            {/* Divider */}
            <View className="h-[1px] bg-gray-100 w-full mb-3" />

            {/* Middle Row: Items and Date */}
            <View className="mb-4">
              <Text
                className="text-[14px] text-[#3E2723] leading-5 mb-1"
                numberOfLines={2}
              >
                {item.items}
              </Text>
              <View className="flex-row items-center mt-1">
                <Feather name="calendar" size={14} color="#8D6E63" />
                <Text className="text-[13px] text-[#8D6E63] ml-2">
                  {item.date}
                </Text>
              </View>
            </View>

            {/* Bottom Row: Total and Reorder Button */}
            <View className="flex-row justify-between items-center">
              <Text className="text-[16px] font-bold text-[#3E2723]">
                ₱{item.total}
              </Text>
              <TouchableOpacity
                className="bg-[#F5E6D3] px-4 py-2 rounded-full flex-row items-center"
                onPress={() => console.log("Reordering:", item.id)}
              >
                <Feather name="refresh-cw" size={14} color="#E85D26" />
                <Text className="text-[13px] font-bold text-[#E85D26] ml-2">
                  Reorder
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
