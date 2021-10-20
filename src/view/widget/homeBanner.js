import React, {memo} from "react";
import {Image, StyleSheet} from "react-native";
import _const from "../../constants/common";
import TouchOpacityButton from "./TouchOpacityButton";

const HomeBanner = memo(() => {
    return <TouchOpacityButton style={[styles.container]}>
        <Image source={require("../../assets/background/banner_home.png")} style={styles.image}/>
    </TouchOpacityButton>
})

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    image: {
        width: _const.WIDTH_SCREEN * 0.9,
        height: 50,
        alignSelf: 'center'
    }
})
export default HomeBanner
