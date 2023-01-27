import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from '../StyleGuide/Icons';
import { colors } from '../StyleGuide';


const TabBarButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate({ 0: { scale: 0.5, rotate: "0deg" }, 1: { scale: 1.5, rotate: "360deg" } });
        } else {
            viewRef.current.animate({ 0: { scale: 1.5, rotate: "360deg" }, 1: { scale: 1, rotate: "0deg" } });
        }
    }, [focused])

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}>
            <Animatable.View
                animation="zoomIn"
                ref={viewRef}
                duration={1000}
                style={styles.container}
            >
                <Icon type={item.type} name={item.activeIcon} color={focused ? colors.Blue : colors.GuidePink} />
            </Animatable.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})



export default TabBarButton;