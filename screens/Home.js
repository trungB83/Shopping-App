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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useEffect } from "react";
import UiCategoryButton from "../components/UI/CategoryButton";

const Home = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [novels, setNovels] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });
    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = () => {
    let bookList = [];
    let novelList = [];
    let storyList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 1) {
        bookList.push(Items[index]);
      } else if (Items[index].category == 2) {
        novelList.push(Items[index]);
      } else if (Items[index].category == 3) {
        storyList.push(Items[index]);
      }
    }
    setBooks(bookList);
    setNovels(novelList);
    setStories(storyList);
  };

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
        {data.category == 2 ? (
          data.isAvailable ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLORS.green,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.green,
                }}
              >
                Sẵn hàng
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLORS.red,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.red,
                }}
              >
                Chưa có hàng
              </Text>
            </View>
          )
        ) : null}
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
          <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
            <Entypo
              name="user"
              style={{
                fontSize: 18,
                color: COLORS.backgroundMedium,
                padding: 12,
                borderRadius: 12,
                backgroundColor: COLORS.backgroundLight,
                overflow: "hidden",
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
                    categoryId: data.id,
                    categoryName: data.name,
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
                Sách
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLORS.blue,
                fontWeight: "400",
              }}
            >
              {books?.length}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {books.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                }}
              >
                Tiểu thuyết
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLORS.blue,
                fontWeight: "400",
              }}
            >
              {novels?.length}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {novels.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                }}
              >
                Truyện
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLORS.blue,
                fontWeight: "400",
              }}
            >
              {stories?.length}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {stories.map((data) => {
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

export default Home;
