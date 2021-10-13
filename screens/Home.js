import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems from "../components/home/RestaurantItems";
import Search from "../components/home/Search";

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
  "r_B9vOZzQH2Mr38jvulxClH-157mImnGef8qF_ak8tDXGULiJBJO4EaKMkmwBksiHB5HYGFctMiUO-f_mr6-6yVCCIxgvwprRLcSRKAIWFgBHwp9RSanjdiTxfxhYXYx";

export default function Home({ navigation }) {
  const [restaurantsData, setRestaurantsData] = useState(restaurants);
  const [city, setCity] = useState("SanDiego");
  const [activeTab, setActiveTab] = useState("Delivery");

  // Fonction pour acceder a l'API yelp
  const getRestaurantsFromYelp = () => {
    // Adresse pour acceder à yelp API
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    // Autorisation à yelp API
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantsData(
          json.businesses.filter((businness) =>
            businness.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 50,
          padding: 15,
        }}
      >
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Search setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantsData={restaurantsData}
          navigation={navigation}
        />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}
