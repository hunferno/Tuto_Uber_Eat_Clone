import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems from "../components/RestaurantItems";
import Search from "../components/Search";

const restaurants = [
  {
    name: "Beachside bar",
    image_url:
      "https://media.cntraveler.com/photos/5e84a75e4ab09800086faefe/master/pass/KastaweyBeachBarCourtseyFSNevis.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Havana Cafe",
    image_url:
      "https://c8.alamy.com/compfr/hbpjhf/le-havane-cafe-en-bois-de-bologne-paris-france-hbpjhf.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 980,
    rating: 4,
  },
  {
    name: "Beachside bar",
    image_url:
      "https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,g_auto:subject,q_auto,f_auto/restaurant/7de1f912-f00b-4a3d-80b7-06b8e5cc8a22/33e8de4d-d872-45da-8696-ae7374fe4dc3.jpg",
    categories: ["Restaurant", "Bar"],
    price: "$$",
    reviews: 2150,
    rating: 4.7,
  },
];

const YELP_API_KEY =
  "trZNkXnI3X1i-bKccnXiRje8vXEUk8rYG6hYXxemP3VCd47JO6MZ5WcS1zMR_lXurhbZDUuPWwa0QIuY2bntKGrrES1tWxV7UVVnu0qfLr00JzQ7pGHZJcwV7UthYXYx";

export default function Home() {
  const [restaurantsData, setRestaurantsData] = useState(restaurants);

  // Fonction pour acceder a l'API yelp
  const getRestaurantsFromYelp = () => {
    // Adresse pour acceder à yelp API
    const yelpURL =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Paris";

    // Autorisation à yelp API
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((res) => console.log("fetch1 passé"))
      .then((json) => setRestaurantsData(json.businesses))
      .then((res) => console.log("fetch1 passé"));
  };

  useEffect(() => {
    getRestaurantsFromYelp;
  }, []);

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantsData={restaurantsData} />
      </ScrollView>
    </SafeAreaView>
  );
}
