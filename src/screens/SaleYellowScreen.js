import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Categoris from '../Components/Categoris';
import { useNavigation } from '@react-navigation/native'


const SaleYellowScreen = () => {

    const [foods, setFoods] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        fetchPost()
    }, [])
    const fetchPost = () => {
        const apiUrl = "https://app-progect-1.herokuapp.com/foods"
        fetch(apiUrl)
            .then((response) => response.json())
            .then((response) => {
                setFoods(response);
            }).catch((error) => {
                console.error(error);
            })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={foods}
                numColumns={2}
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