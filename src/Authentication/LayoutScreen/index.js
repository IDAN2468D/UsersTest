import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableNativeFeedback } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Entypo';
import { fonts, colors, image } from '../../StyleGuide';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'



const windowWidth = Dimensions.get('window').width;

const LayoutScreen = ({ label, children, SwipeUp, onPress }) => {
    const navigation = useNavigation();
    return (
        <KeyboardAwareScrollView contentContainerStyle={{ backgroundColor: "#00B3FE" }}>
            <View style={{ alignItems: 'center' }}>
                <Image source={image.Logo_161} resizeMode="contain" style={{ width: 229, height: 74, marginVertical: 50 }} />
                <View style={{ backgroundColor: "white", width: windowWidth, height: 660, borderTopRightRadius: 50 }}>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: "#011947", fontFamily: fonts.ReenieBeanieRegular, }}>{label}</Text>
                    </View>
                    {children}
                    <View style={{
                        width: windowWidth,
                        height: 150,
                        backgroundColor: "#013088",
                        borderTopLeftRadius: 40,
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <View style={{ alignItems: 'center', marginBottom: 10 }}>
                            <Icon name='chevron-up' size={30} color="black" style={{ width: 30, height: 30, borderRadius: 30, backgroundColor: "white" }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableNativeFeedback onPress={onPress}>
                                <Text style={{ color: "white", fontSize: 14, fontWeight: 'bold' }}>{SwipeUp}</Text>
                            </TouchableNativeFeedback>
                            <Text style={{ color: "white", fontSize: 14, marginHorizontal: 5 }}>New User?</Text>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default LayoutScreen

const styles = StyleSheet.create({})