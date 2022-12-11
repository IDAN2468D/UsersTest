import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native'
import CategoryText from '../../Components/CategoryText';

const DetailsScreen_2 = ({ route }) => {
    const { itemId } = route.params;
    const [state, setState] = useState(null);

    useEffect(() => {
        setState(itemId)
    }, [])

    return (
        <View>
            <FlatList
                data={state?.imageDetails}
                keyExtractor={item => `${item._id}`}
                keyboardDismissMode="on-drag"
                renderItem={({ item }) => {
                    return (
                        <CategoryText item={item} />
                    )
                }}
            />

        </View>
    )
}

export default DetailsScreen_2

const styles = StyleSheet.create({})