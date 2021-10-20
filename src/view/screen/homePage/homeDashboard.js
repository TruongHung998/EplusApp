import React, {memo, useCallback} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import HiddenBackground from "../../widget/hiddenBackground";
import _const from "../../../constants/common";
import BaseHeaderNavigator from "../../widget/header/baseHeaderNavigator";
import {CauroselRender} from "../../widget/bannerCaurosel";
import TouchOpacityButton from "../../widget/TouchOpacityButton";
import {COLOR_PAPER, COLOR_PAPER_1, PRIMARY_COLOR} from "../../../constants/color";
import VectorIcon from "../../elements/vectorIcon";
import {ICON_NAME} from "../../../constants/iconName";
import {FONT, LAYOUT} from "../../../constants/globalStyles";

const dummyData = [
    {
        name: "Khai báo Y tế",
        iconName: ICON_NAME.HEALTH_ICON,
    },
    {
        name: "Xét nghiệm COVID-19",
        iconName: ICON_NAME.VIRUS_ICON,
        fontScale: true
    },
    {
        name: "Kết quả xét nghiệm",
        iconName: ICON_NAME.TEST_TUBE_ICON,
        fontScale: true,
    },
    {
        name: "Đặt lịch khám",
        iconName: ICON_NAME.STETHOSCOPE_ICON,
    },
    {
        name: "Đặt mua Vắc xin",
        iconName: ICON_NAME.SYRINGE_ICON,
    },
    {
        name: "Danh mục Vắc xin",
        iconName: ICON_NAME.GRID_ICON,
    },
    {
        name: "Số tiêm chủng",
        iconName: ICON_NAME.BOOKMARK_ICON,
    },
    {
        name: "Số tiêm chủng",
        iconName: "",
        commingSoon: true
    },
]


const HomeDashboard = memo(() => {

    const renderButton = useCallback(() => {
        return dummyData.map((item, index) => {
            return <TouchOpacityButton style={{
                width: _const.WIDTH_SCREEN * 0.15,
                alignItems: 'center', justifyContent: 'center',
                marginLeft: (index === 0 || index === 4) ? 0 : 15,
                marginTop: index < 4 ? _const.HEIGHT_SCREEN * 0.04 : _const.HEIGHT_SCREEN * 0.01
            }}>
                <View style={[styles.button, {
                    backgroundColor: item.commingSoon ? COLOR_PAPER_1 : PRIMARY_COLOR,
                }]}>
                    {item.commingSoon ? <View>
                        <Text style={styles.text1}>SẮP RA MẮT</Text>
                    </View> : <VectorIcon name={item.iconName} size={25}/>}
                </View>
                <Text style={[styles.text, {
                    fontSize: item.fontScale ? 9 : 10,
                }]} numberOfLines={2}>{item.name}</Text>
            </TouchOpacityButton>
        })
    }, [])

    return <View style={styles.container}>
        {renderButton()}
    </View>
})

const styles = StyleSheet.create({
    text1: {
        ...FONT.bold,
        fontSize: 9,
        textAlign: 'center',
        color: 'white'
    },
    text: {
        ...FONT.normal,
        textAlign: 'center',
        marginTop: 5
    },
    button: {
        width: _const.WIDTH_SCREEN * 0.14,
        height: _const.WIDTH_SCREEN * 0.14,
        borderRadius: 10,
        ...LAYOUT.box_shadow_light,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: COLOR_PAPER,
        height: _const.HEIGHT_SCREEN * 0.37,
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 15,
        width: _const.WIDTH_SCREEN * 0.9,
        alignSelf: 'center',
        borderRadius: 5
    },
})
export default HomeDashboard
