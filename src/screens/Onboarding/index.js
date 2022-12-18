import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { image } from '../../StyleGuide';

const windowWidth = Dimensions.get('window').width;

function Dots({ selected }) {
    let backgroundColor;

    backgroundColor = selected ? '#3D003E' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 12,
                height: 12,
                borderRadius: 30,
                marginHorizontal: 6,
                backgroundColor
            }}
        />
    )
}

function Skip({ ...props }) {
    return (
        <TouchableOpacity style={{ marginHorizontal: 20 }} {...props}>
            <Text style={{ fontSize: 16, color: "black" }}>Skip</Text>
        </TouchableOpacity>
    )
}

function Next({ ...props }) {
    return (
        <TouchableOpacity style={{ marginHorizontal: 20 }} {...props}>
            <Text style={{ fontSize: 16, color: "black", fontWeight: 'bold' }}>Next</Text>
        </TouchableOpacity>
    )
}

function Done({ ...props }) {
    return (
        <TouchableOpacity style={{ marginHorizontal: 20 }} {...props}>
            <Text style={{ fontSize: 16, color: "black", fontWeight: 'bold' }}>Done</Text>
        </TouchableOpacity>
    )
}

const Onboarding_1 = ({ navigation }) => {
    return (
        <Onboarding
            bottomBarHeight={60}
            bottomBarHighlight={false}
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            onSkip={() => navigation.navigate("Login")}
            onDone={() => navigation.navigate("Login")}
            DotComponent={Dots}
            pages={[
                {
                    backgroundColor: "#fff",
                    image: <Image source={image.Locate} style={{ width: windowWidth, height: 400, }} />,
                    title: 'Locate',
                    subtitle: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
                    titleStyles: {
                        fontSize: 32,
                        color: "#3D003E",
                        fontWeight: 'bold',
                    },
                    subTitleStyles: {
                        fontSize: 21,
                        maxWidth: 290,
                        color: "#3D003E",
                    }

                },
                {
                    backgroundColor: "#fff",
                    image: <Image source={image.Unlock} style={{ width: windowWidth, height: 400, }} />,
                    title: 'Unlock',
                    subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    titleStyles: {
                        fontSize: 32,
                        color: "#3D003E",
                        fontWeight: 'bold',
                    },
                    subTitleStyles: {
                        fontSize: 21,
                        maxWidth: 250,
                        color: "#3D003E",
                    },
                },
                {
                    backgroundColor: "#fff",
                    image: <Image source={image.Ride} style={{ width: windowWidth, height: 400, }} />,
                    title: 'Ride',
                    subtitle: 'Culpa qui officia deserunt mollit anim id est laborum.',
                    titleStyles: {
                        fontSize: 32,
                        color: "#3D003E",
                        fontWeight: 'bold',
                    },
                    subTitleStyles: {
                        fontSize: 21,
                        maxWidth: 270,
                        color: "#3D003E",
                    }
                }
            ]}

        />
    )
}

export default Onboarding_1

const styles = StyleSheet.create({})