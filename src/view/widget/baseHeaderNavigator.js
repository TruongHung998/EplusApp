import React, {memo, useCallback} from 'react'
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native'
import {useDispatch} from 'react-redux'
import {popAction} from "../../utilities/navigationAction";
import VectorIcon from "../elements/vectorIcon";
import {ICON_NAME} from "../../constants/iconName";
import {FONT} from "../../constants/globalStyles";

const BaseHeaderNavigator = memo((props) => {
    const {
        color,
        title
    } = props

    const _onPressBack = useCallback(() => {
    }, [])

    return (
        <SafeAreaView>
            <View style={[styles.container]}>
                <TouchableOpacity
                    onPress={_onPressBack}
                    style={[styles.contain_btn_back]}>
                    <VectorIcon
                        name={ICON_NAME.BELL_ICON}
                        size={22}
                        color={color}
                    />
                </TouchableOpacity>
                <View style={{flexDirection: "row", alignItems: 'center'}}>
                    <View style={{width: 35, height: 35, borderRadius: 40, backgroundColor: 'gray', marginRight: 5}}/>
                    <View>
                        <Text style={{
                            ...FONT.normal,
                            color: color,
                            fontSize: 12,
                            lineHeight: 20,
                            fontWeight: '500'
                        }}>Chào buổi sáng</Text>
                        <Text style={[{
                            ...FONT.bold,
                            color: color,
                            fontSize: 12,
                            lineHeight: 20,
                            textAlign: 'center'
                        }]}>{title || ''}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{
                        ...FONT.normal,
                        marginRight: 5, color: 'white', fontSize: 11
                    }}>
                        TP.HCM
                    </Text>
                    <TouchableOpacity
                        onPress={_onPressBack}
                        style={[styles.contain_btn_back]}>
                        <VectorIcon
                            name={ICON_NAME.LOCATION_ICON}
                            size={22}
                            color={color}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 17,
        justifyContent: 'space-between',
    },
    contain_btn_back: {
        justifyContent: 'center',
    }
})

export default BaseHeaderNavigator
