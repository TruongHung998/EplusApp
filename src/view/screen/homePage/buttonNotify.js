import React, {memo} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import HiddenBackground from "../../widget/hiddenBackground";
import _const from "../../../constants/common";
import BaseHeaderNavigator from "../../widget/baseHeaderNavigator";
import {CauroselRender} from "../../widget/bannerCaurosel";
import TouchOpacityButton from "../../widget/TouchOpacityButton";
import {COLOR_PAPER, PRIMARY_COLOR} from "../../../constants/color";
import VectorIcon from "../../elements/vectorIcon";
import {ICON_NAME} from "../../../constants/iconName";
import {FONT} from "../../../constants/globalStyles";

const ButtonNotify = memo(() => {
    return <TouchOpacityButton style={styles.container}>
        <View style={{flexDirection: "row", alignItems: 'center'}}>
            <VectorIcon name={ICON_NAME.CALENDAR_ICON} color={PRIMARY_COLOR}/>
            <Text numberOfLines={1} style={{marginLeft: 5}}>
                <Text style={styles.font_text}>{"Bạn có "}</Text>
                <Text style={styles.font_bold}>{"3 lịch hẹn"}</Text>
                <Text style={styles.font_text}>{" sắp tới"}</Text>
            </Text>
        </View>
        <VectorIcon name={ICON_NAME.ARROW_BACK_ICON} size={10}/>
    </TouchOpacityButton>
})

const styles = StyleSheet.create({
    font_bold: {
        ...FONT.bold,
        color: PRIMARY_COLOR,
        fontSize: 12
    },
    font_text: {
        ...FONT.normal,
        fontSize: 12
    },
    container: {
        paddingHorizontal: 10,
        width: _const.WIDTH_SCREEN * 0.9,
        backgroundColor: COLOR_PAPER,
        height: 40,
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})
export default ButtonNotify
