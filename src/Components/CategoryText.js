import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CategoryText = ({ item }) => {
    return (
        <View>
            <Text>{item.home}</Text>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100, }} />
        </View>
    )
}

export default CategoryText

const styles = StyleSheet.create({})