import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Button, StyleSheet } from "react-native";
import { loggedAction } from "./store/reducers/LoginReducers";
import FancyText from "./common/FancyText";
import FancyTextInput from "./common/FancyTextInput";

const LoginForm = ({ navigation }) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para autenticar al usuario
    const params = {
        username,
        password
    }
    dispatch(loggedAction(params))
    navigation.navigate('HomeScreen')
  };

  return (
    <View style={styles.container}>
      <FancyText isBlue>Inicio de Sesión</FancyText>
      <FancyTextInput
        isBordered
        placeholder="Nombre de Usuario"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <FancyTextInput
        isBordered
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
