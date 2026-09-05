import { HeroBanner } from "@/components/ui/HeroBanner";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FloatingFooter } from "../components/ui/FloatingFooter";
import { GreetingSection } from "../components/ui/GreetingSection";
import { HomeHeader } from "../components/ui/HomeHeader";
import { OurStoryCard } from "../components/ui/OurStoryCard";
import { PieCard } from "../components/ui/PieCard";
import "../global.css";
import { usePieRepository } from "../hooks/usePieRepository";

export default function Index() {
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
        // Everything above the pies goes into the ListHeaderComponent
        ListHeaderComponent={
          <View>
            <GreetingSection />
            <HeroBanner />
            {/* Future Category Filter will go here */}

            {/* Best Sellers Header */}
            <View className="flex-row justify-between items-end px-6 pt-4 pb-4">
              <Text className="text-[20px] font-bold text-[#3E2723]">
                Best Sellers
              </Text>
              {/* <Pressable>
                <Text className="text-[14px] font-medium text-[#8D6E63]">
                  See all
                </Text>
              </Pressable> */}
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <PieCard
            pie={item}
            onAddToCart={(pie) => console.log("Added to cart:", pie.name)}
          />
        )}
        ListFooterComponent={
          <View className="px-6" style={{ marginBottom: 50 }}>
            <OurStoryCard />
          </View>
        }
        contentContainerStyle={{ paddingBottom: 24 }}
      />

      {/* The Floating Footer */}
      <FloatingFooter />
    </SafeAreaView>
  );
}
