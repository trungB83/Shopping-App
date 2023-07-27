import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { CATEGORIES, COLORS, Items } from "../components/database/Database";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useEffect } from "react";
import UiCategoryButton from "../components/UI/CategoryButton";

const Category = ({ navigation, route }) => {
  const { categoryId, categoryName } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getDataFromDB = () => {
      let productList = [];
      for (let index = 0; index < Items.length; index++) {
        if (Items[index].category == categoryId) {
          productList.push(Items[index]);
        }
      }
      setProducts(productList);
    };

    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation, categoryId]);

  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductInfo", { productID: data.id })
        }
        style={{
          width: "48%",
          marginVertical: 14,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 100,
            borderRadius: 10,
            backgroundColor: COLORS.backgroundLight,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          {data.isOff ? (
            <View
              style={{
                position: "absolute",
                width: "20%",
                height: "24%",
                backgroundColor: COLORS.green,
                top: 0,
                left: 0,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
              >
                {data.offPercentage}%
              </Text>
            </View>
          ) : null}
          <Image
            source={data.productImage}
            style={{
              width: "80%",
              height: "80%",
              resizeMode: "contain",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLORS.black,
            fontWeight: "600",
            marginBottom: 2,
          }}
        >
          {data.productName}
        </Text>

        <Text>{data.productPrice}&#8363;</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            widht: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack("Home")}>
            <Entypo
              name="chevron-left"
              style={{
                fontSize: 18,
                color: COLORS.backgroundDark,
                padding: 12,
                backgroundColor: COLORS.white,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 18,
                color: COLORS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLORS.backgroundLight,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.content}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style
          >
            {CATEGORIES.map((data) => (
              <UiCategoryButton
                style={{ backgroundColor: data.color, ...Styles.button }}
                key={data.id}
                data={data}
                textStyle={Styles.btnText}
                onPress={() =>
                  navigation.navigate("Category", {
                    categoryName: data.name,
                    categoryId: data.id,
                  })
                }
              />
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                }}
              >
                {categoryName}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {products.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  content: {
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  btnText: {
    fontSize: 17,
  },
});

export default Category;
