import React, {memo} from "react";
import {SafeAreaView, StyleSheet, Text} from "react-native";
import HiddenBackground from "../widget/hiddenBackground";
import _const from "../../constants/common";
import BaseHeaderNavigator from "../widget/baseHeaderNavigator";

const HomePage = memo(() => {
    return <SafeAreaView style={styles.container}>
        <HiddenBackground mode={'stretch'}
                          height={_const.HEIGHT_SCREEN*0.3}
                          resource={require('../../assets/background/SplashBackground.png')}/>
        <BaseHeaderNavigator color={'white'}
                             title={'Ánh Tuyết'}/>
    </SafeAreaView>
})

const styles = StyleSheet.create({
    container: {flex: 1},
})
export default HomePage
