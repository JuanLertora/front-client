import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import LoginForm from "./Login/LoginForm";
import HomeScreen from "../Home/Home";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Layout() {
  const loginStatus = useSelector((state) => state.loginStatus.isLogged);

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Login">
        {loginStatus ? (
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              header: () => null,
              headerLeft: () => null,
              gestureEnabled: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginForm}
            options={{ header: () => null }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Layout;
