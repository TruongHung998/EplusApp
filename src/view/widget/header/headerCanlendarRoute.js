import React, {memo, useCallback} from 'react'
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import VectorIcon from "../../elements/vectorIcon";
import {ICON_NAME} from "../../../constants/iconName";
import {FONT} from "../../../constants/globalStyles";
import {PRIMARY_COLOR} from "../../../constants/color";

const HeaderCalendarRoute = memo((props) => {
    const {
        color = 'white',
        title
    } = props

    const _onPressBack = useCallback(() => {
    }, [])

    return (
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
                <Text style={[{
                    ...FONT.bold,
                    color: color,
                    fontSize: 12,
                    lineHeight: 20,
                    textAlign: 'center',
                }]}>{title || ''}</Text>
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
    )
})

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 17,
        justifyContent: 'space-between',
        backgroundColor: PRIMARY_COLOR
    },
    contain_btn_back: {
        justifyContent: 'center',
    }
})

export default HeaderCalendarRoute
