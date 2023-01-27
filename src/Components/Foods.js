import React from 'react';
import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native';
import { colors, fonts } from '../StyleGuide/index';

const Foods = ({ item, onPress }) => {

    return (
        <TouchableNativeFeedback style={styles.container} onPress={onPress}>
            <View style={styles.BgImage}>
                <Image source={{ uri: item.img }} resizeMode="cover" style={styles.image} />
                <View style={styles.ContainerText}>
                    <Text style={styles.Text}>{item.name}</Text>
                    <Text style={styles.Text}>{item.model}</Text>
                </View>
                <View style={styles.ContainerPrice}>
                    <Text style={styles.TextPrice}>{item.price}$</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

export default Foods

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    BgImage: {
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: colors.Blue,
        marginVertical: 10,
        borderRadius: 10,
    },
    image: {
        width: 155,
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    ContainerText: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    Text: {
        fontSize: 14,
        fontFamily: fonts.Medium
    },
    ContainerPrice: {
        backgroundColor: colors.GuidePink,
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 30,

    },
    TextPrice: {
        fontSize: 16,
        fontFamily: fonts.NablaRegularVariableFont
    }
})