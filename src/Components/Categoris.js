import React from 'react';
import { StyleSheet, Text, Image, TouchableNativeFeedback, View } from 'react-native';

const Categoris = ({ item, onPress }) => {
    return (
        <TouchableNativeFeedback style={styles.container} onPress={onPress}>
            <View style={styles.View}>
                <Image source={{ uri: item.img }} resizeMode="cover" style={styles.image} />
                <Text>{item.name}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default Categoris

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 155,
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    View: {
        marginHorizontal: 10,
        marginVertical: 10,
    }
})