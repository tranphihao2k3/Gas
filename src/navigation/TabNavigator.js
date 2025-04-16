// ./navigation/TabNavigator.js

import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {StackNavigator} from "./StackNavigator";
import Search from "../screens/tab/search";
import product from "../screens/tab/product";
import Cart from "../screens/tab/cart";
import profile from "../screens/tab/profile";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
import {colors} from "../constants/colors";

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator

        >
            <Tab.Screen
                options={{
                    title: "Trang Chủ",
                    tabBarIcon: ({ focused }) => (<AntDesign name="home" size={24} color={colors.primary} />)
                }}
                name="Home" component={StackNavigator}/>
            <Tab.Screen
                options={{
                    title: 'Tìm kiếm',
                    tabBarIcon: ({ focused }) => (<AntDesign name="search1" size={24} color={colors.primary} />)
                }}
                name="Search" component={Search}/>
            <Tab.Screen
                options={{

                    title: 'Sản phẩm',
                    tabBarIcon: ({ focused }) => (<Ionicons name="storefront-outline" size={24} color={colors.primary} />)
                }}
                name="product" component={product}/>

            <Tab.Screen
                options={{

                    title: 'Giỏ hàng',
                    tabBarIcon: ({ focused }) => (<AntDesign name="shoppingcart" size={24} color={colors.primary} />)
                }}
                name="cart" component={Cart}/>
            <Tab.Screen
                options={{

                    title: 'Cá nhân',
                    tabBarIcon: ({ focused }) => (<Ionicons name="person-outline" size={24} color={colors.primary} />)
                }}
                name="profile" component={profile}/>
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
