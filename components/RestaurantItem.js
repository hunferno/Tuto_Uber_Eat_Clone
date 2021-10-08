import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <TouchableOpacity style={{ marginBottom: 30 }} activeOpacity={1}>
      <View style={{ padding: 15, marginTop: 10, backgroundColor: "white" }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}

const RestaurantImage = () => {
  return (
    <>
      <View>
        <Image
          source={{
            uri: "https://portal.restomontreal.ca/zibo-brossard/logo/bigimage.jpg?v=2366",
          }}
          style={{
            width: "100%",
            height: 180,
          }}
        />
        <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const RestaurantInfo = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Farmhouse Kitchen Thaï Cuisine
        </Text>
        <Text style={{ color: "gray", fontSize: 13 }}>30-45 min</Text>
      </View>
      <View
        style={{
          padding: 5,
          backgroundColor: "#eee",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>4.5</Text>
      </View>
    </View>
  );
};
