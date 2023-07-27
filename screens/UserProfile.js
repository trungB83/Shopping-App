import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../components/database/Database";
import assets from "../components/database/assets";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserProfile = ({ navigation }) => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem("userData");
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    AsyncStorage.setItem(
      "user",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );
    navigation.navigate("LoginScreen");
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
                backgroundColor: COLORS.backgroundLight,
                borderRadius: 12,
                padding: 12,
                overflow: "hidden",
              }}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            My Profile
          </Text>
          <TouchableOpacity>
            <View>
              <Feather
                name="more-vertical"
                style={{
                  fontSize: 18,
                  backgroundColor: COLORS.backgroundLight,
                  borderRadius: 12,
                  padding: 12,
                  overflow: "hidden",
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            padding: 40,
            paddingHorizontal: 16,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                width: 100,
                height: 100,
                left: 10,
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 20,
              }}
            >
              <Image
                source={assets.userprofile}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 100,
                }}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              left: -20,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "500",
                letterSpacing: 0.5,
              }}
            >
              {userDetails?.fullname}
            </Text>
            <Text
              style={{
                opacity: 0.5,
              }}
            >
              Student at EPU
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <Entypo
                name="edit"
                style={{
                  fontSize: 20,
                  left: -10,
                  color: COLORS.backgroundDark,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              left: 15,
              color: COLORS.backgroundDark,
              paddingBottom: 10,
            }}
          >
            Dashboard
          </Text>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: COLORS.green,
                      borderRadius: 20,
                    }}
                  >
                    <View>
                      <Entypo
                        name="wallet"
                        style={{
                          fontSize: 25,
                          color: COLORS.white,
                          padding: 15,
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      position: "relative",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "450",
                        paddingLeft: 15,
                      }}
                    >
                      Payments
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    backgroundColor: "dodgerblue",
                    borderRadius: 20,
                    padding: 7,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                    }}
                  >
                    2 New
                  </Text>
                  <Entypo
                    name="chevron-right"
                    style={{
                      fontSize: 18,
                      color: COLORS.white,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "orange",
                      borderRadius: 20,
                    }}
                  >
                    <View>
                      <Entypo
                        name="shopping-bag"
                        style={{
                          fontSize: 25,
                          color: COLORS.white,
                          padding: 15,
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      position: "relative",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "450",
                        paddingLeft: 15,
                      }}
                    >
                      Orders
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    borderRadius: 20,
                    padding: 5,
                  }}
                >
                  <Entypo
                    name="chevron-right"
                    style={{
                      fontSize: 18,
                      color: COLORS.backgroundDark,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "gray",
                      borderRadius: 20,
                    }}
                  >
                    <View>
                      <Feather
                        name="alert-circle"
                        style={{
                          fontSize: 25,
                          color: COLORS.white,
                          padding: 15,
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      position: "relative",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "450",
                        paddingLeft: 15,
                      }}
                    >
                      Privacy
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    borderRadius: 20,
                    padding: 5,
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      backgroundColor: "#FF4433",
                      borderRadius: 20,
                      padding: 7,
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.white,
                        padding: 5,
                        fontWeight: "450",
                      }}
                    >
                      Action Needed
                    </Text>
                    <Entypo
                      name="chevron-right"
                      style={{
                        fontSize: 18,
                        color: COLORS.white,
                      }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{
              paddingTop: 15,
              paddingLeft: 20,
              fontSize: 15,
              opacity: 0.5,
            }}
          >
            My Account
          </Text>
          <TouchableOpacity
            style={{
              paddingLeft: 20,
              paddingTop: 15,
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: COLORS.blue,
                fontWeight: "500",
              }}
            >
              Switch to Other Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingLeft: 20,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "orange",
                fontWeight: "500",
              }}
              onPress={logout}
            >
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
