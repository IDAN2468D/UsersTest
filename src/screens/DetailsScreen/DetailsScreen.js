import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import CategoryText from '../../Components/CategoryText';
import { colors, fonts, sizes } from '../../StyleGuide';

const widthScreen = Dimensions.get('window').width;


const DetailsScreen = ({ route }) => {

    const { itemId } = route.params;
    const [state, setState] = useState(null);

    useEffect(() => {
        setState(itemId)
    }, [])



    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: itemId.img }} resizeMode="cover" style={styles.image} />
            </View>
            <Text style={styles.TextItem}>{itemId.name}</Text>
            <Text>{itemId.cal}</Text>
            <FlatList
                data={state?.Details}
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

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TextItem: {
        fontSize: sizes.textSizes,
        fontFamily: fonts.BungeeSpiceRegular,
        color: colors.GuidePink,
    },
    image: {
        width: widthScreen,
        height: 300,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    Text: {
        fontSize: 30,
    }
})