"use client";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Text } from "@/components/ui/text";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center min-h-screen">
      <Text className="text-red-600">hello world</Text>
    </SafeAreaView>
  );
}
