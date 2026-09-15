import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FloatingFooter } from "../../components/ui/FloatingFooter";
import { HomeHeader } from "../../components/ui/HomeHeader";
import { PieCard } from "../../components/ui/PieCard";
import "../../global.css";
import { usePieRepository } from "../../hooks/usePieRepository";

// This is the Menu List page of the app
export default function MenuList() {
  const { pies } = usePieRepository();

  return (
    <SafeAreaView className="flex-1 bg-[#EFEFEF]">
      {/* Header stays pinned to the top outside the scrollable list */}
      <HomeHeader />

      <FlatList
        data={pies}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 24,
        }}
        // Header for the Menu page
        ListHeaderComponent={
          <View className="pt-6 pb-2">
            <View className="flex-row justify-between items-end px-6 pb-4">
              <Text className="text-[24px] font-bold text-[#3E2723]">
                Our Full Menu
              </Text>
              {/* Optional: Add a filter/sort button here if needed */}
              {/* <Pressable>
                <Text className="text-[14px] font-medium text-[#8D6E63]">
                  Filter
                </Text>
              </Pressable> */}
            </View>

            {/* Note: This is where the Future Category Filter mentioned in Index.tsx could go */}
            {/* Example: <ScrollView horizontal className="px-6 mb-4">...</ScrollView> */}
          </View>
        }
        renderItem={({ item }) => (
          <PieCard
            pie={item}
            onAddToCart={(pie) => console.log("Added to cart:", pie.name)}
          />
        )}
        // Extra padding at the bottom so the FloatingFooter doesn't cover the last row
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* The Floating Footer (with the hamburger menu active) */}
      <FloatingFooter />
    </SafeAreaView>
  );
}
