import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...Platform.select({
          ios: TransitionPresets.ModalPresentationIOS,
          android: {}, // No specific Android transition preset
        }),
      }}
    >
      <RestaurantStack.Screen
        name='Restaurants'
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      />
      <RestaurantStack.Screen
        name='RestaurantDetail'
        component={RestaurantDetailScreen}
        options={{ headerShown: false }}
      />
    </RestaurantStack.Navigator>
  );
};
