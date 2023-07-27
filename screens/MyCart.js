import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS, Items } from "../components/database/Database";
import { useState } from "react";
import { useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

const MyCart = ({ navigation }) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from local DB by ID
  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem("cartItems");
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      Items.forEach((data) => {
        if (items.includes(data.id)) {
          productData.push(data);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };

  const getTotal = (productData) => {
    let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice;
      total = total + productPrice;
    }
    setTotal(total);
  };

  const removeItemFromCart = async (id) => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] == id) {
          array.splice(index, 1);
        }
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        getDataFromDB();
      }
    }
  };

  const renderProducts = (data, index) => {
    return (
      <TouchableOpacity
        key={data.key}
        onPress={() =>
          navigation.navigate("ProductInfo", { productID: data.id })
        }
        style={{
          flexDirection: "row",
          widht: "100%",
          height: 100,
          marginVertical: 6,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "35%",
            height: 100,
            padding: 14,
            backgroundColor: COLORS.backgroundLight,
            borderRadius: 20,
            marginRight: 22,
          }}
        >
          <Image
            source={data.productImage}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
        <View
          style={{ flex: 1, height: "100%", justifyContent: "space-around" }}
        >
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "600",
                maxWidth: "100%",
                letterSpacing: 1,
              }}
            >
              {data.productName}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  marginRight: 4,
                  color: COLORS.backgroundDark,
                }}
              >
                {data.productPrice} &#8363;
              </Text>
              <Text
                style={{
                  color: COLORS.backgroundDark,
                }}
                onPress={() => {}}
              >
                (~{data.productPrice + data.productPrice / 20}&#8363;)
              </Text>
            </View>
          </View>
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
              <View
                style={{
                  borderColor: COLORS.backgroundMedium,
                  borderRadius: 100,
                  opacity: 0.5,
                  marginRight: 20,
                  padding: 4,
                  borderWidth: 1,
                }}
              >
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="minus"
                    style={{ fontSize: 16, color: COLORS.backgroundDark }}
                  />
                </TouchableOpacity>
              </View>
              <Text>1</Text>
              <View
                style={{
                  borderColor: COLORS.backgroundMedium,
                  borderRadius: 100,
                  opacity: 0.5,
                  marginLeft: 20,
                  padding: 4,
                  borderWidth: 1,
                }}
              >
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="plus"
                    style={{ fontSize: 16, color: COLORS.backgroundDark }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize: 16,
                  color: COLORS.backgroundDark,
                  backgroundColor: COLORS.backgroundLight,
                  borderRadius: 100,
                  padding: 8,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem("cartItems");
    } catch (error) {
      return error;
    }
    ToastAndroid.show(
      "Items will be shipped and delivered soon",
      ToastAndroid.SHORT
    );
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        width: "100%",
        height: "100%",
      }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 18,
                padding: 12,
                backgroundColor: COLORS.backgroundLight,
                borderRadius: 12,
                overflow: "hidden",
              }}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "450",
              paddingRight: 30,
              letterSpacing: 0.5,
            }}
          >
            Chi tiết đơn đặt hàng
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            paddingTop: 20,
            paddingLeft: 20,
            fontSize: 25,
            fontWeight: "500",
          }}
        >
          Giở hàng
        </Text>
        <View
          style={{
            paddingHorizontal: 20,
          }}
        >
          {product ? product.map(renderProducts) : null}
        </View>
        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              Địa điểm giao hàng
            </Text>
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
                  width: "80%",
                }}
              >
                <View
                  style={{
                    backgroundColor: COLORS.backgroundLight,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                    marginRight: 18,
                  }}
                >
                  <Entypo
                    name="location"
                    style={{
                      fontSize: 18,
                      color: COLORS.blue,
                    }}
                  />
                </View>
                <View>
                  <Text style={{ fontSize: 14, fontWeight: "500" }}>
                    Hà Nội, Việt Nam
                  </Text>
                  <Text
                    style={{
                      lineHeight: 20,
                      opacity: 0.5,
                    }}
                  >
                    Hoàng Quốc Việt
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{
                  fontSize: 22,
                }}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              Phương thức thanh toán
            </Text>
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
                  width: "80%",
                }}
              >
                <View
                  style={{
                    backgroundColor: COLORS.backgroundLight,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                    marginRight: 18,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "900",
                      color: COLORS.blue,
                      letterSpacing: 1,
                    }}
                  >
                    VISA
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 14, fontWeight: "500" }}>
                    VISA Classic
                  </Text>
                  <Text
                    style={{
                      lineHeight: 20,
                      opacity: 0.5,
                    }}
                  >
                    ****-0921
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{
                  fontSize: 22,
                }}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                letterSpacing: 1,
                marginBottom: 20,
              }}
            >
              Thông tin đặt hàng
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  maxWidth: "80%",
                  opacity: 0.5,
                }}
              >
                Tạm tính
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  maxWidth: "80%",
                  opacity: 0.5,
                }}
              >
                {total}&#8363;
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  maxWidth: "80%",
                  opacity: 0.5,
                }}
              >
                Giá vận chuyển
              </Text>
              {total > 1500 ? (
                <Text>Miễn phí</Text>
              ) : (
                <Text
                  style={{
                    fontWeight: "400",
                    maxWidth: "80%",
                    opacity: 0.5,
                  }}
                >
                  {total / 20}&#8363;
                </Text>
              )}
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  maxWidth: "80%",
                  opacity: 0.5,
                }}
              >
                Tổng tiền
              </Text>
              {total < 1500 ? (
                <Text
                  style={{
                    fontWeight: "400",
                    maxWidth: "80%",
                    opacity: 0.5,
                  }}
                >
                  {total / 20 + total}&#8363;
                </Text>
              ) : (
                <Text
                  style={{
                    fontWeight: "400",
                    maxWidth: "80%",
                    opacity: 0.5,
                  }}
                >
                  {total}&#8363;
                </Text>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          bottom: 10,
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          height: "8%",
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={() => (total != 0 ? checkOut() : null)}
          style={{
            backgroundColor: COLORS.blue,
            width: "85%",
            height: "90%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              letterSpacing: 1,
              fontSize: 15,
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            THANH TOÁN ({total + total / 20}&#8363;)
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyCart;
