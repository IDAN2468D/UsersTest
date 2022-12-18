import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Categoris from '../../Components/Categoris';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';


const SaleYellowScreen = () => {

    const { foods } = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <FlatList
                data={foods}
                keyExtractor={item => item._id}
                showsHorizontalScrollIndicator={false}
                keyboardDismissMode="on-drag"
                renderItem={({ item, index }) => {
                    return (
                        <View
                            item={index}
                            style={styles.View}>
                            <Categoris
                                item={item}
                                onPress={() => navigation.navigate("DetailsScreen", { itemId: item })}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default SaleYellowScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderTopLeftRadius: 35,
    }
})