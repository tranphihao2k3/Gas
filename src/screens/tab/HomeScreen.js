import React from 'react';
import {View, Text, Button} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text className={"text-primary"}>Home Screen</Text>
            <Button
                title="Xem Chi Tiết Sản Phẩm"
                onPress={() => navigation.navigate('Detailproduct')}
            />
        </View>
    );
}
