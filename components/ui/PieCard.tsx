import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import { PieEntity } from "../../hooks/usePieRepository";

interface PieCardProps {
  pie: PieEntity;
  onAddToCart: (pie: PieEntity) => void;
}

export const PieCard = ({ pie, onAddToCart }: PieCardProps) => {
  return (
    <View className="w-[48%] bg-[#FFFBF2] p-2.5 rounded-[20px] shadow-sm mb-4 border border-[#E0D0C0]/50">
      {/* Image Container */}
      <View className="relative w-full h-[130px] rounded-[14px] overflow-hidden bg-[#E0D0C0]">
        <Image
          source={{ uri: pie.imageUrl }}
          className="w-full h-full"
          resizeMode="cover"
        />

        {/* Bestseller Badge */}
        {pie.isBestseller && (
          <View className="absolute top-2 left-2 bg-[#FF9F1C] px-2 py-1 rounded">
            <Text className="text-[9px] font-bold text-[#3E2723] uppercase tracking-widest">
              Bestseller
            </Text>
          </View>
        )}

        {/* Add Button Overlapping Image */}
        {/* <TouchableOpacity
          onPress={() => onAddToCart(pie)}
          className="absolute bottom-2 right-2 w-8 h-8 bg-[#3E2723] rounded-full items-center justify-center shadow-md"
        >
          <Feather name="plus" size={16} color="#FFFBF2" />
        </TouchableOpacity> */}
      </View>

      {/* Text Details */}
      <View className="mt-3 px-1">
        <Text
          className="text-[14px] font-bold text-[#3E2723]"
          numberOfLines={1}
        >
          {pie.name}
        </Text>
        <Text className="text-[12px] text-[#8D6E63] mt-0.5" numberOfLines={1}>
          {pie.description}
        </Text>

        {/* Footer: Price & Rating */}
        <View className="flex-row justify-between items-center mt-2.5 mb-1">
          <Text className="text-[16px] font-bold text-[#3E2723]">
            ₱{pie.price}
          </Text>
          <View className="flex-row items-center">
            <FontAwesome name="star" size={12} color="#FF9F1C" />
            <Text className="text-[12px] font-medium text-[#8D6E63] ml-1">
              {pie.rating}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
