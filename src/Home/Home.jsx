import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ViewScreen from "../components/ViewScreen/ViewScreen";
import Map from "../components/Map/Map";

const Tab = createBottomTabNavigator();

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
        component={ViewScreen}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          title: "Mapa", header: () => null,
          headerLeft: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen;
