import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const screenOptions = { headerShown: false };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={screenOptions}
          initialRouteName="HomeScreen"
        >
          <Stack.Screen name="HomeScreen" component={Home} />
          <Stack.Screen
            name="RestaurantDetailScreen"
            component={RestaurantDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
