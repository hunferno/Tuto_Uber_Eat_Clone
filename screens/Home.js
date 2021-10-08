import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import Search from "../components/Search";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 50,
          padding: 15,
        }}
      >
        <HeaderTabs />
        <Search />
      </View>
        <Categories/>
    </SafeAreaView>
  );
}
