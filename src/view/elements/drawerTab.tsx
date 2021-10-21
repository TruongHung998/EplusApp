import React, {memo} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {FONT} from "../../constants/globalStyles";
import {SafeAreaBottom} from "../../constants/dimension";
import Config from "../../config";
import VersionNumber from 'react-native-version-number';
import TouchOpacityButton from "../widget/TouchOpacityButton";
import VectorIcon from "./vectorIcon";
import {ICON_NAME} from "../../constants/iconName";
import _const from "../../constants/common";
import {closeDrawer, pushAction} from "../../utilities/navigationAction";
import {ROUTE_EDIT_PASSWORD} from "../../navigators/routeName";


interface DrawerTabProps {
}

const DrawerTab = memo(({}: DrawerTabProps): JSX.Element => {

    const buildVersion = (Config.ENV !== 'PRODUCTION') ? ' (' + VersionNumber.buildVersion + ')' : ''
    const fullVersion = VersionNumber.appVersion + buildVersion


    return (
        <View style={styles.container}>
            <SafeAreaView/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scroll_view_style}
            >
                <View style={{marginTop: 25}}>
                    <TouchOpacityButton style={styles.button} onPress={() => {
                        closeDrawer()
                        pushAction(ROUTE_EDIT_PASSWORD)
                    }}>
                        <Text>Đổi mật khẩu</Text>
                        <VectorIcon name={ICON_NAME.ARROW_BACK_ICON} size={12}/>
                    </TouchOpacityButton>
                </View>
                <Text style={styles.version}>
                    {'Version: ' + fullVersion} {Config.ENV !== 'PRODUCTION' && ' (TEST ENV)'}
                </Text>
            </ScrollView>
        </View>
    )
})

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: _const.WIDTH_SCREEN * 0.45
    },
    container: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    scroll_view_style: {
        paddingHorizontal: 30,
        marginLeft: 20,
        marginBottom: SafeAreaBottom - 50
    },
    version: {
        ...FONT.normal,
        fontSize: 12,
        textAlign: 'center',
        marginTop: 20
    }
})
export default DrawerTab
