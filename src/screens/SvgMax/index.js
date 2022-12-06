import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { MotiView, AnimatePresence } from 'moti';
import { Easing } from 'react-native-reanimated';

const _color = "#6e01ef"
const _sizes = 100

const index = () => {
    const [visible, toggle] = useReducer((s) => !s, true)
    return (
        <View style={styles.container}>
            <View style={[styles.dot, styles.center]}>
                {[...Array(10).keys()].map((index) => {
                    return (
                        <MotiView
                            from={{ opacity: 0.7, scale: 1 }}
                            animate={{ opacity: 0, scale: 4 }}
                            transition={{
                                type: "timing",
                                duration: 2000,
                                easing: Easing.out(Easing.ease),
                                delay: index * 200,
                                loop: true,
                                repeatReverse: false
                            }}
                            key={index}
                            style={[StyleSheet.absoluteFillObject, styles.dot]}
                        />
                    )
                })}
                <Feather name="phone-outgoing" size={32} color="#fff" />
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    dot: {
        width: _sizes,
        height: _sizes,
        borderRadius: _sizes,
        backgroundColor: _color,
    },
    center: { alignItems: 'center', justifyContent: 'center', }
})