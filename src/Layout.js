import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "./LoginForm";
import HomeScreen from "./Home";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Layout() {
  const loginStatus = useSelector((state) => state.loginStatus.isLogged);

  useEffect(() => {
    console.log(loginStatus);
  }, [loginStatus]);

  return (
    <NavigationContainer>
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
