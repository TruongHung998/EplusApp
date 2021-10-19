import React, {memo, useEffect, useState} from "react";
import {Image, ImageBackground, LayoutAnimation, SafeAreaView, StyleSheet} from "react-native";
import _const from "../../constants/common";
import {resetStackAction} from "../../utilities/navigationAction";
import MainAppNavigation from "../../navigators/mainAppNavigation";
import {NAVIGATION_MAIN_APP} from "../../navigators/routeName";

const SplashScreen = memo(() => {
    const [showIconEplus, setIconEplus] = useState(false)
    const [showIconBrand, setIconBrand] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            LayoutAnimation.easeInEaseOut()
            setIconEplus(true)
        },1000)
        setTimeout(() => {
            LayoutAnimation.easeInEaseOut()
            setIconBrand(true)
        },2000)
        setTimeout(() => {
            resetStackAction(NAVIGATION_MAIN_APP)
        },2500)
    }, [])

    return <SafeAreaView style={styles.container}>
        <ImageBackground source={require("../../assets/background/SplashBackground.png")} resizeMode="cover"
                         style={styles.image}>
            {showIconEplus && <Image source={require("../../assets/background/splashIcon.png")} style={styles.icon}
                    resizeMode={'contain'}/>}
            {showIconBrand && <Image source={require("../../assets/background/iconBrand.png")} style={styles.iconBrand}
                    resizeMode={'contain'}/>}
        </ImageBackground>
    </SafeAreaView>
})

const styles = StyleSheet.create({
    container: {flex: 1},
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    icon: {
        width: _const.WIDTH_SCREEN,
        height: _const.WIDTH_SCREEN * 0.6,
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
