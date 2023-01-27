import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../StyleGuide';
import { AuthContext } from '../../Context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import Foods from '../../Components/Foods';


const ChatScreen = () => {
    const [filterData, setApplictionPost] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const { applictionPost } = useContext(AuthContext);
    const [search, setSearch] = useState("")


    const serchFilter = (text) => {
        if (text) {
            const filterData = masterData.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setApplictionPost(filterData);
            setSearch(text);
        } else {
            setApplictionPost(masterData);
            setSearch(text);
        }
    }

    const ItemView = ({ item }) => {
        return (
            <Foods
                item={item}
                onPress={() => navigation.navigate("DetailsScreen", { itemId: item })}
            />
        )
    }


    return (
        <View style={{ flex: 1, }}>
            <View style={styles.container}>
                <View style={styles.wrapperSearch}>
                    <Icon color={colors.Search} name="search" size={20} style={{ paddingVertical: 10, paddingHorizontal: 5, }} />
                    <TextInput
                        style={{ ...fonts.BungeeSpiceRegular }}
                        placeholder="Happy Bones"
                        placeholderTextColor={{ ...colors.Blue }}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => serchFilter(text)}
                    />
                </View>
                <FlatList
                    data={applictionPost}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    renderItem={ItemView}
                />
            </View>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: "flex"
    },
    wrapperSearch: {
        height: 60,
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: colors.lightGrey_2,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
})