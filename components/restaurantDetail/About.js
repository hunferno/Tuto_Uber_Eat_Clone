import React from "react";
import { View, Text, Image } from "react-native";

// const yelpRestaurantInfo = {
//   name: "Farmhouse Kitchen Thaï Cuisine",
//   image:
//     "https://www.sortiraparis.com/images/80/91874/582754-photos-le-cafe-de-l-homme.jpg",
//   price: "$$",
//   reviews: "1500",
//   rating: 4.5,
//   categories: [{ title: "Thaï" }, { title: "Confort Food" }],
// };

export default function About({ route }) {
  const { name, image, price, review_count, rating, categories } = route;

  const formattedCategories = categories.map((cat) => cat.title).join(" - ");

  const description = `${formattedCategories} ${
    price ? " - " + price : ""
  } - 🎟 - ${rating + "⭐"} - ${review_count ? "(" + review_count + "+)" : ""}`;

  return (
    <View>
      {/* restaurantImage */}
      <RestaurantImage image={image} />
      {/* restaurantTitle */}
      <RestaurantTitle title={name} />
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
