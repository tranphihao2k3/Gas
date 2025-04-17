import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {StackNavigator} from "./StackNavigator";
import Search from "../screens/tab/search";
import product from "../screens/tab/product";
import Cart from "../screens/tab/cart";
import profile from "../screens/tab/profile";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native";


const Tab = createBottomTabNavigator();
import {colors} from "../constants/colors";
import {Text, TouchableOpacity, View} from "react-native";

const BottomTabNavigator = () => {
    const navigation = useNavigation()
    return (<Tab.Navigator

        screenOptions={{
            tabBarShowLabel: false, tabBarLabelStyle: {
                color: "#9DB2CE",  // Thay đổi màu cho title
            }, tabBarStyle: {
                height: 75,

            },

        }}
    >
        <Tab.Screen

            options={{
                headerShown: false, title: "Trang Chủ", headerTitleAlign: 'left', headerTitleStyle: {
                    fontWeight: 'bold', fontSize: 20,

                }, tabBarIcon: ({focused}) => (<View
                    className={"flex flex-col w-full min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"}>
                    <AntDesign name="home" size={24} color={focused ? colors.primary : "#9DB2CE"}/>
                    <Text
                        className={focused ? "text-primary mt-1" : "color-[#9DB2CE] mt-1"}
                    >Trang Chủ</Text>
                </View>)
            }}
            name="Home" component={StackNavigator}/>
        <Tab.Screen
            options={{
                title: 'Tìm kiếm', tabBarIcon: ({focused}) => (<View
                    className={"flex flex-col w-full min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"}>
                    <AntDesign name="search1" size={24} color={focused ? colors.primary : "#9DB2CE"}/>
                    <Text
                        className={focused ? "text-primary mt-1" : "color-[#9DB2CE] mt-1"}
                    >Tìm kiếm</Text>
                </View>)
            }}
            name="Search" component={Search}/>
        <Tab.Screen
            options={{

                title: 'Sản phẩm', tabBarIcon: ({focused}) => (<View
                    className={"flex flex-col w-full min-w-[112px] min-h-14  justify-center items-center rounded-full "}>
                    <View className={"bg-white p-3 absolute -top-12 rounded-full"}>
                        <View
                            className={"bg-primary min-h-[66px]   justify-center items-center rounded-full min-w-[66px]"}
                        >

                            <Ionicons name="storefront-outline" size={24}
                                      color={"white"}/>
                        </View>
                        <Text
                            className={focused ? "text-primary mt-3" : "color-[#9DB2CE] mt-3"}
                        >Sản phẩm</Text>
                    </View>


                </View>)
            }}
            name="product" component={product}/>

        <Tab.Screen
            options={{

                title: 'Giỏ hàng', tabBarIcon: ({focused}) => (<View
                    className={"flex flex-col w-full min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"}>
                    <AntDesign name="shoppingcart" size={24}
                               color={focused ? colors.primary : "#9DB2CE"}/>
                    <Text
                        className={focused ? "text-primary mt-1" : "color-[#9DB2CE] mt-1"}
                    >Giỏ hàng</Text>
                </View>)
            }}
            name="cart" component={Cart}/>
        <Tab.Screen
            options={{

                title: 'Cá nhân', tabBarIcon: ({focused}) => (<View
                    className={"flex flex-col w-full min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"}>
                    <Ionicons name="person-outline" size={24}
                              color={focused ? colors.primary : "#9DB2CE"}/>
                    <Text
                        className={focused ? "text-primary mt-1" : "color-[#9DB2CE] mt-1"}
                    >Cá nhân</Text>
                </View>)
            }}
            name="profile" component={profile}/>
    </Tab.Navigator>);
};

export default BottomTabNavigator;