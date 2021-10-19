import React, {memo} from "react";
import {LayoutAnimation, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import _const from '../../constants/common'
import VectorIcon from "./vectorIcon";
import {FONT} from "../../constants/globalStyles";

interface BottomTabBarProps {
    state: any,
    descriptors: any,
    navigation: any
}

export const RoundTopCornerTabBar = (props: any) => {
    const {descriptors, state} = props
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) {
        LayoutAnimation.easeInEaseOut()
        return null;
    }
    return (
        <View>
            <View
                style={{
                    width: _const.WIDTH_SCREEN,
                    height: _const.HEIGHT_SCREEN * 0.12,
                    backgroundColor: 'white',
                }}
            >
                <BottomTabBar {...props} />
            </View>
        </View>
    )
}

const BottomTabBar = memo(({state, descriptors, navigation}: BottomTabBarProps): JSX.Element | null => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) {
        return null;
    }
    return (
        <View style={styles.container}>
            {state.routes.map((route: any, index: any) => {
                const {options} = descriptors[route.key];
                const visible = options?.tabBarVisible
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                const iconName = options?.iconName
                const activeColor = options?.activeColor
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[styles.main_button]}
                        key={index + ''}
                    >
                        <VectorIcon name={iconName} style={styles.icon_view}
                                    color={isFocused ? 'blue' : '#B0B0B0'} size={20}/>
                        <Text style={[{
                            color: isFocused ? 'blue' : '#B0B0B0',
                            fontWeight: isFocused ? 'bold' : '400',
                            textAlign: 'center',
                            fontSize:  label == "Hồ sơ sức khỏe" ? 9 : 12,
                        }, styles.label_style]}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>

    );
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -7,
        paddingBottom: 7,
        marginRight: 3,
        justifyContent: 'center'
    },
    main_button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 65,
        width: _const.WIDTH_SCREEN * 0.19,
    },
    icon_view: {
        marginBottom: 5
    },
    label_style: {
        ...FONT.normal,
        textTransform: 'none',
    },
})

