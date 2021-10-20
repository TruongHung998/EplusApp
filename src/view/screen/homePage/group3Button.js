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
import {FONT, LAYOUT} from "../../../constants/globalStyles";

const Group3Button = memo(() => {
    return <View style={styles.container}>
        <View style={styles.container2}>
            <VectorIcon name={ICON_NAME.STOPWATCH_ICON}/>
            <Text>
                <Text style={[{...FONT.bold, color: PRIMARY_COLOR}]}>3</Text>
                <Text style={styles.text1}> theo dõi</Text>
            </Text>
            <Text style={styles.text1}>24 giờ</Text>
        </View>
        <View style={styles.line}/>
        <View style={styles.container2}>
            <VectorIcon name={ICON_NAME.CART_ICON}/>
            <Text>
                <Text style={[{...FONT.bold, color: PRIMARY_COLOR}]}>3</Text>
                <Text style={styles.text1}> sản phẩm</Text>
            </Text>
            <Text style={styles.text1}>trong giỏ hàng</Text>
        </View>
        <View style={styles.line}/>
        <View style={styles.container2}>
            <VectorIcon name={ICON_NAME.LOADER_ICON}/>
            <Text>
                <Text style={[{...FONT.bold, color: PRIMARY_COLOR}]}>3</Text>
                <Text style={styles.text1}> đặt hẹn</Text>
            </Text>
            <Text style={styles.text1}>chưa hoàn tất</Text>
        </View>
    </View>
})

const styles = StyleSheet.create({
    container2: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: COLOR_PAPER,
        height: _const.HEIGHT_SCREEN * 0.15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginTop: 15,
        width: _const.WIDTH_SCREEN * 0.9,
        alignSelf: 'center',
        borderRadius: 5
    },
    text1: {
        ...FONT.normal,
        fontSize: 10,
    },
    line: {
        height: _const.HEIGHT_SCREEN * 0.1,
        width: 0.5, backgroundColor: 'gray'
    }
})
export default Group3Button
