import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItems({ restaurantsData, navigation }) {
  return (
    <View style={{ marginBottom: 30 }}>
      {restaurantsData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate("RestaurantDetailScreen", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              review_count: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
          activeOpacity={1}
          style={{ padding: 15, marginTop: 10, backgroundColor: "white" }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const RestaurantImage = (props) => {
  return (
    <>
      <View>
        <Image
          source={{ uri: props.image }}
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

const RestaurantInfo = ({ name, rating }) => {
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
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{name}</Text>
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
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{rating}</Text>
      </View>
    </View>
  );
};
