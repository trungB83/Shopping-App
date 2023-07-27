import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";

import Button from "../components/UI/Button";
import Inputs from "../components/UI/Inputs";
import Loader from "../components/UI/Loader";
import { COLORS } from "../components/database/Database";

const RegistrationScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Vui lòng nhập email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Vui lòng nhập một email hợp lệ", "email");
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError("Vui lòng nhập họ và tên", "fullname");
      isValid = false;
    }

    if (!inputs.phone) {
      handleError("Vui lòng nhập số điện thoại", "phone");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("Vui lòng nhập mật khẩu", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("Độ dài mật khẩu tối thiểu là 5", "password");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem("userData", JSON.stringify(inputs));
        navigation.navigate("LoginScreen");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
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
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}>
          Đăng ký
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          Nhập thông tin chi tiết của bạn để đăng ký
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
            onChangeText={(text) => handleOnchange(text, "fullname")}
            onFocus={() => handleError(null, "fullname")}
            iconName="account-outline"
            label="Họ và tên"
            placeholder="Nhập tên đầy đủ của bạn"
            error={errors.fullname}
          />

          <Inputs
            keyboardType="numeric"
            onChangeText={(text) => handleOnchange(text, "phone")}
            onFocus={() => handleError(null, "phone")}
            iconName="phone-outline"
            label="Số điện thoại"
            placeholder="Nhập số điện thoại của bạn"
            error={errors.phone}
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
          <Button title="Đăng ký" onPress={validate} />
          <Text
            onPress={() => navigation.navigate("LoginScreen")}
            style={{
              color: COLORS.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Đã có tài khoản ? Đăng nhập
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
