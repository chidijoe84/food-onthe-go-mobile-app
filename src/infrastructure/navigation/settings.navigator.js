import React, { useEffect } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
// import { CameraScreen } from "../../features/settings/screens/camera.screen";

const settingsStack = createStackNavigator();
export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <settingsStack.Navigator
      headerMode='screen'
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <settingsStack.Screen
        options={{
          header: () => null,
        }}
        name='Settings'
        component={SettingsScreen}
      />

      <settingsStack.Screen
        options={{
          header: () => null,
        }}
        name='Favourites'
        component={FavouritesScreen}
      />

      <settingsStack.Screen
        options={{
          header: () => null,
        }}
        name='Camera'
        component={CameraScreen}
      />
    </settingsStack.Navigator>
  );
};
