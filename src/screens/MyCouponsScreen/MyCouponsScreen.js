import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigation } from '@react-navigation/native'
import Categoris from '../../Components/Categoris';


const windowWidth = Dimensions.get("window").width;

const MyCouponsScreen = () => {
    const { applictionPost, userInfo } = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <FlatList
                data={applictionPost}
                keyExtractor={item => item._id}
                showsHorizontalScrollIndicator={false}
                keyboardDismissMode="on-drag"
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen_2", { itemId: item })}>
                            <View item={index}>
                                <Image source={{ uri: item.image }} resizeMode="cover" style={{ width: windowWidth, height: 400, }} />
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default MyCouponsScreen

const styles = StyleSheet.create({})