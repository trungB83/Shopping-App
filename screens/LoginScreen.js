import React from "react";
import { View, Text, SafeAreaView, Keyboard, Alert } from "react-native";
import Inputs from "../components/UI/Inputs";
import Button from "../components/UI/Button";
import Loader from "../components/UI/Loader";
import { COLORS } from "../components/database/Database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({ email: "", password: "" });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("vui lòng nhập email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("vui lòng nhập mật khẩu", "password");
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem("userData");
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email == userData.email &&
          inputs.password == userData.password
        ) {
          navigation.navigate("Home");
          AsyncStorage.setItem(
            "userData",
            JSON.stringify({ ...userData, loggedIn: true })
          );
        } else {
          Alert.alert("Error", "Invalid Details");
        }
      } else {
        Alert.alert("Error", "Người dùng chưa đăng ký");
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}>
          Đăng nhập
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Nhập thông tin tài khoản của bạn để đăng nhập
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Inputs
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="Nhập địa chỉ email của bạn"
            error={errors.email}
          />
          <Inputs
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
            error={errors.password}
            password
          />
          <Button title="Đăng nhập" onPress={validate} />
          <Text
            onPress={() => navigation.navigate("RegisterScreen")}
            style={{
              color: COLORS.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Không có tài khoản ? Đăng ký
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
