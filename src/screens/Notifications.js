import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, sizes } from '../StyleGuide/index';

const Notifications = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: colors.GuidePink, fontSize: sizes.titleSize, fontFamily: fonts.NablaRegularVariableFont }}> że nieposzanowanie i nieprzestrzeganie praw człowieka</Text>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})