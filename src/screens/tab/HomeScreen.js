import React, { useState } from 'react';
import Header from '../../components/header';
import { View, Dimensions, Text, TextInput, StyleSheet, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import baner from '../../assets/baner';
const defaultDataWith6Colors = [
    baner.bannerdoigas,
    baner.bannerhetgas
];
import logo from '../../assets/logothuonghieu';
export default function HomeScreen({ navigation }) {
    const [text, setText] = useState('');
    const progress = useSharedValue(0);
    const width = Dimensions.get("window").width;
    const onChangeText = (e) => {
        setText(e);
    };

    return (
        <SafeAreaView className="flex flex-1 pl-4 pr-4">
            <Header />

            <View className="mt-3 min-h-[44px] rounded-xl bg-white flex flex-row items-center">
                <TextInput
                    className="p-3 w-[90%] h-[100%]"
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Tìm kiếm sản phẩm"
                />
                <AntDesign name="search1" size={18} color="black" />
            </View>

            <View className="mt-5">
                <Carousel
                    autoPlayInterval={2000}
                    data={defaultDataWith6Colors}
                    height={200}
                    loop={true}
                    pagingEnabled={true}
                    snapEnabled={true}
                    width={width - 20} // bớt padding 2 bên
                    style={{
                        alignSelf: 'center',
                    }}
                    mode="parallax"
                    modeConfig={{
                        parallaxScrollingScale: 0.9,
                        parallaxScrollingOffset: 50,
                    }}
                    onProgressChange={progress}
                    renderItem={({ index, item }) => (
                        <ImageBackground
                            resizeMode="cover"
                            source={item}
                            style={{
                                width: width - 20,
                                height: 200,
                                borderRadius: 10,
                                overflow: 'hidden',
                            }}
                        />
                    )}
                />
            </View>
            <View className="mt-3">
                <Text className="font-bold text-center text-2xl">
                    Các thương hiệu chúng tôi cung cấp
                </Text>
                <View className="flex flex-row justify-around mt-3">
                    <Image
                        source={logo.Petrolomiex}
                        className="w-[72] h-[72]"
                    />  <Image
                        source={logo.Saigonpetro}
                        className="w-[72] h-[72]"
                    />  <Image
                        source={logo.totalpetro}
                        className="w-[72] h-[72]"
                    />  <Image
                        source={logo.petrovietnam}
                        className="w-[72] h-[72]"
                    /> 
                </View>
            </View>
        </SafeAreaView>
    );
}


