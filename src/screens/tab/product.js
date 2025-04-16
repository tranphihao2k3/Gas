import {Button, StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Product = ({navigation}) => {
    return (
        <View>
            <Text>Product</Text>
            <Button
                title="Xem Chi Tiết Sản Phẩm"
                onPress={() => navigation.navigate('Detailproduct')}
            />
        </View>
    )
}
export default Product
const styles = StyleSheet.create({})
