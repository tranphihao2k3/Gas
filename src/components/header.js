
import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dropdown } from 'react-native-element-dropdown';
const data = [
    { label: 'Cần Thơ', value: 'can_tho' },
    { label: 'Vĩnh Long', value: 'vinh_long' },
    { label: 'Hậu Giang', value: 'hau_giang' },
    { label: 'An Giang', value: 'an_giang' },
    { label: 'Kiên Giang', value: 'kien_giang' },
    { label: 'Đồng Tháp', value: 'dong_thap' },
    { label: 'Sóc Trăng', value: 'soc_trang' },
    { label: 'Trà Vinh', value: 'tra_vinh' },
];
const Header = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>

                </Text>
            );
        }
        return null;
    };
    return (



        <View className="flex flex-row" >
            <Text
                className={"text-3xl font-bold"}
            >Trang Chủ</Text>

            <SafeAreaProvider>
                <SafeAreaView style={styles.centeredView}>
                    <Modal

                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text className="font-bold mb-3">Vui lòng chọn khu vực của bạn</Text>
                                <View style={styles.container} className="w-[300px]">
                                    {renderLabel()}
                                    <Dropdown
                                        style={[stylesdropdown.dropdown, isFocus && { borderColor: 'blue' }]}
                                        className="w-72"
                                        placeholderStyle={stylesdropdown.placeholderStyle}
                                        selectedTextStyle={stylesdropdown.selectedTextStyle}
                                        inputSearchStyle={stylesdropdown.inputSearchStyle}
                                        iconStyle={stylesdropdown.iconStyle}
                                        data={data}
                                        search
                                        // maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocus ? 'Chọn khu vực' : '...'}
                                        searchPlaceholder="Tìm kim..."
                                        value={value}
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => setIsFocus(false)}
                                        onChange={item => {
                                            setValue(item.value);
                                            setIsFocus(false);
                                        }}

                                    />
                                </View>
                                <Pressable
                                    className="bg-primary p-4 rounded-lg mt-3 w-[300px]"
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Xác nhận</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        className={"bg-[#EDEDED] flex-row  min-h-[31px] min-w-[112px] flex justify-center items-center rounded-full"}
                        onPress={() => setModalVisible(true)}>
                        <Entypo name="location-pin" size={20} color={colors.primary} />
                        <Text className={"text-[18px] font-bold text-primary"}>Cần thơ</Text>
                    </Pressable>
                </SafeAreaView>
            </SafeAreaProvider>
            <View>
                <AntDesign name="shoppingcart" size={24} color="black" />
            </View>
        </View>



    )
}

export default Header

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})
const stylesdropdown = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});