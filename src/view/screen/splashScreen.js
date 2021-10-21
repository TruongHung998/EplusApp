import React, {memo, useEffect, useState} from "react";
import {Image, ImageBackground, LayoutAnimation, SafeAreaView, StyleSheet, Text} from "react-native";
import _const from "../../constants/common";
import {resetStackAction} from "../../utilities/navigationAction";
import MainAppNavigation from "../../navigators/mainAppNavigation";
import {NAVIGATION_MAIN_APP, ROUTE_LOGIN} from "../../navigators/routeName";
import {FONT} from "../../constants/globalStyles";
import {useSelector} from "react-redux";
import {selectUserName} from "../../shared/redux/selector/authSelector";

const SplashScreen = memo(() => {
    const [showIconEplus, setIconEplus] = useState(false)
    const [showIconBrand, setIconBrand] = useState(false)
    const info = useSelector(selectUserName)

    useEffect(() => {
        setTimeout(() => {
            LayoutAnimation.easeInEaseOut()
            setIconEplus(true)
        }, 1000)
        setTimeout(() => {
            LayoutAnimation.easeInEaseOut()
            setIconBrand(true)
        }, 2000)
        setTimeout(() => {
            if (info === '')
                resetStackAction(ROUTE_LOGIN)
            else resetStackAction(NAVIGATION_MAIN_APP)
        }, 2500)
    }, [info])

    return <SafeAreaView style={styles.container}>
        <ImageBackground source={require("../../assets/background/SplashBackground.png")} resizeMode="cover"
                         style={styles.image}>
            {showIconEplus && <Image source={require("../../assets/background/splashIcon.png")} style={styles.icon}
                                     resizeMode={'cover'}/>}
            {showIconBrand && <>
                <Text style={styles.text}>VÌ SỨC KHỎE &</Text>
                <Text style={styles.text}>CHẤT LƯỢNG CUỘC SỐNG</Text>
            </>}
            {showIconBrand && <Image source={require("../../assets/background/iconBrand.png")} style={styles.iconBrand}
                                     resizeMode={'contain'}/>}
        </ImageBackground>
    </SafeAreaView>
})

const styles = StyleSheet.create({
    text: {
        ...FONT.bold,
        fontSize: 12,
        textAlign: 'center',
        color: 'white'
    },
    container: {flex: 1},
    image: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        width: _const.WIDTH_SCREEN * 0.5,
        height: _const.WIDTH_SCREEN * 0.5,
        marginTop: _const.HEIGHT_SCREEN * 0.2
    },
    iconBrand: {
        width: _const.WIDTH_SCREEN * 0.9,
        height: _const.WIDTH_SCREEN * 0.2,
        position: "absolute",
        bottom: 20,
        left: "5%",
    }
})
export default SplashScreen
