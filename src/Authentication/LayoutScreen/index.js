import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { fonts, colors, image } from '../../StyleGuide'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LayoutScreen = ({ label, children, Sub_label }) => {
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{
                flex: 1,
            }}
        >
            <LinearGradient start={{ x: 5, y: 1 }} end={{ x: 5, y: -2 }} colors={['#CD82DE', '#E5B2CA']} style={styles.linearGradient} />
            <View style={{ alignItems: 'center' }}>
                <Image source={image.ManLogo} resizeMode="contain" style={{ width: 300, height: 300 }} />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{label}</Text>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>{Sub_label}</Text>
            </View>
            {children}
        </KeyboardAwareScrollView >
    )
}

export default LayoutScreen

const styles = StyleSheet.create({
    linearGradient: {
        position: "absolute",
        width: windowWidth,
        height: windowHeight,
    },
})