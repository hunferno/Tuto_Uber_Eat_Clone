import React from "react";
import { View, Text, Image } from "react-native";

const image =
  "https://www.sortiraparis.com/images/80/91874/582754-photos-le-cafe-de-l-homme.jpg";
const title = "Farmhouse Kitchen Thaï Cuisine";
const description = `Thaï - Confort - Food - $$ - 4 :star (2913+)`;

export default function About() {
  return (
    <View>
      {/* restaurantImage */}
      <RestaurantImage image={image} />
      {/* restaurantTitle */}
      <RestaurantTitle title={title} />
      {/* restaurantDescription */}
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);
const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 30,
      fontWeight: "600",
      marginHorizontal: 15,
      marginVertical: 10,
    }}
  >
    {props.title}
  </Text>
);
const RestaurantDescription = (props) => (
  <Text style={{ fontSize: 15, marginHorizontal: 15 }}>
    {props.description}
  </Text>
);
