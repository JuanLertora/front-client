import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name="Map"
        component={Home}
        options={{ title: "Mapa" }}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen;
