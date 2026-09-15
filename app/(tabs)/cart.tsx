import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

// Mock data - Replace this with your global cart state (Zustand/Context)
const initialCartItems = [
  {
    id: "1",
    name: "Classic Buko Pie",
    price: 350,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Choco Pecan Bliss",
    price: 420,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1601000938259-8df0e2b3a8c1?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Cart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Update item quantity
  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryFee = subtotal > 0 ? 50 : 0;
  const total = subtotal + deliveryFee;

  // Empty State
  if (cartItems.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-[#EFEFEF] justify-center items-center px-6">
        <Feather name="shopping-bag" size={64} color="#D7CCC8" />
        <Text className="text-[20px] font-bold text-[#3E2723] mt-4">
          Your cart is empty
        </Text>
        <Text className="text-[#8D6E63] text-center mt-2 mb-6">
          Looks like you haven't added any pies yet.
        </Text>
        <Pressable
          onPress={() => router.navigate("/menuList")}
          className="bg-[#E85D26] rounded-full px-8 py-3"
        >
          <Text className="text-white font-bold text-[16px]">Browse Menu</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#EFEFEF]">
      {/* Header */}
      <View className="px-6 pt-6 pb-2">
        <Text className="text-[24px] font-bold text-[#3E2723]">My Cart</Text>
      </View>

      {/* Cart Items List */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 220 }} // Extra padding for checkout bar
        renderItem={({ item }) => (
          <View className="bg-white rounded-2xl p-4 mb-4 flex-row items-center shadow-sm">
            {/* Item Image */}
            <Image
              source={{ uri: item.image }}
              className="w-20 h-20 rounded-xl bg-gray-200"
            />

            {/* Item Details */}
            <View className="flex-1 ml-4 justify-between">
              <View className="flex-row justify-between items-start">
                <Text className="text-[16px] font-bold text-[#3E2723] flex-1 mr-2">
                  {item.name}
                </Text>
                <Pressable onPress={() => removeItem(item.id)}>
                  <Feather name="trash-2" size={18} color="#E85D26" />
                </Pressable>
              </View>

              <Text className="text-[14px] font-bold text-[#8D6E63] mt-1">
                ₱{item.price}
              </Text>

              {/* Quantity Controls */}
              <View className="flex-row items-center mt-2">
                <Pressable
                  onPress={() => updateQuantity(item.id, -1)}
                  className="bg-[#F5F5F5] rounded-full p-1"
                >
                  <Feather name="minus" size={16} color="#3E2723" />
                </Pressable>
                <Text className="mx-3 font-bold text-[#3E2723]">
                  {item.quantity}
                </Text>
                <Pressable
                  onPress={() => updateQuantity(item.id, 1)}
                  className="bg-[#F5F5F5] rounded-full p-1"
                >
                  <Feather name="plus" size={16} color="#3E2723" />
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />

      {/* Checkout Summary - Fixed at bottom */}
      <View className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl px-6 pt-5 pb-28 shadow-lg">
        <View className="flex-row justify-between mb-2">
          <Text className="text-[#8D6E63]">Subtotal</Text>
          <Text className="text-[#3E2723] font-bold">₱{subtotal}</Text>
        </View>
        <View className="flex-row justify-between mb-4">
          <Text className="text-[#8D6E63]">Delivery Fee</Text>
          <Text className="text-[#3E2723] font-bold">₱{deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between mb-4 border-t border-gray-100 pt-3">
          <Text className="text-[18px] font-bold text-[#3E2723]">Total</Text>
          <Text className="text-[18px] font-bold text-[#E85D26]">₱{total}</Text>
        </View>
        <Pressable
          onPress={() => console.log("Proceed to Checkout")}
          className="bg-[#3E2723] rounded-full py-4 items-center"
        >
          <Text className="text-white font-bold text-[16px]">
            Proceed to Checkout
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
