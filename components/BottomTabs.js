import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
      <BottomTab text="Home" icon="home" />
      <BottomTab text="Browse" icon="search" />
      <BottomTab text="Grocery" icon="card" />
      <BottomTab text="Orders" icon="receipt" />
      <BottomTab text="Account" icon="person-outline" />
    </View>
  );
}

const BottomTab = (props) => (
  <TouchableOpacity>
    <Ionicons
      name={props.icon}
      size={25}
      style={{
        alignSelf: "center",
        marginBottom: 5,
      }}
    />
    <Text>{props.text}</Text>
  </TouchableOpacity>
);
