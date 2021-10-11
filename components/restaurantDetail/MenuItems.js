import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.galbani.fr/wp-content/uploads/2017/07/shutterstock_142426168-800x600.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with chicken",
    price: "$19.20",
    image:
      "https://www.simplyrecipes.com/thmb/RApX19MbIABUG-fVjjPOVRZctBw=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
    price: "$14.50",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/FOOD_Chilaquiles_1.jpg",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.galbani.fr/wp-content/uploads/2017/07/shutterstock_142426168-800x600.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with chicken",
    price: "$19.20",
    image:
      "https://www.simplyrecipes.com/thmb/RApX19MbIABUG-fVjjPOVRZctBw=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
    price: "$14.50",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/FOOD_Chilaquiles_1.jpg",
  },
];

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View
            style={{
              margin: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* MenuDescription */}
            <MenuDescription
              title={food.title}
              description={food.description}
              price={food.price}
            />
            {/* MenuImage */}
            <MenuImage image={food.image} />
          </View>
          <Divider width={0.5} />
        </View>
      ))}
    </ScrollView>
  );
}

const MenuDescription = (props) => (
  <View
    style={{
      width: 240,
      marginRight: 15,
      justifyContent: "space-evenly",
    }}
  >
    {/* Title */}
    <Text style={styles.title}>{props.title}</Text>
    {/* Description */}
    <Text style={styles.description}>{props.description}</Text>
    {/* Price */}
    <Text style={styles.price}>{props.price}</Text>
  </View>
);

const MenuImage = (props) => (
  <Image
    source={{ uri: props.image ? props.image : null }}
    style={styles.image}
  />
);

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
  },
  price: {
    fontSize: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
