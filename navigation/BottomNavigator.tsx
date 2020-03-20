import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import HearingsScreen from "../screens/HearingsScreen";
import LocationsScreen from "../screens/LocationsScreen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function MainMenuNavigator({ navigation, route }) {
  return (
    <BottomTab.Navigator
      initialRouteName="Locations"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Hearings") {
            return (
              <MaterialCommunityIcons
                name={focused ? "bookmark-plus" : "bookmark-plus-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Locations") {
            return (
              <MaterialCommunityIcons
                name={focused ? "map-marker" : "map-marker-outline"}
                size={size}
                color={color}
              />
            );
          }
        }
      })}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Hearings" component={HearingsScreen} />
      <BottomTab.Screen name="Locations" component={LocationsScreen} />
    </BottomTab.Navigator>
  );
}
