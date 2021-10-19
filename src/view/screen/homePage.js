import React, {memo} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import HiddenBackground from "../widget/hiddenBackground";
import _const from "../../constants/common";
import BaseHeaderNavigator from "../widget/baseHeaderNavigator";
import {CauroselRender} from "../widget/bannerCaurosel";

const HomePage = memo(() => {
    return <SafeAreaView style={styles.container}>
        <HiddenBackground mode={'stretch'}
                          height={_const.HEIGHT_SCREEN * 0.3}
                          resource={require('../../assets/background/SplashBackground.png')}/>
        <BaseHeaderNavigator color={'white'}
                             title={'Ánh Tuyết'}/>
        <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
            <View style={{
                width: _const.WIDTH_SCREEN * 0.85,
                alignSelf: 'center',
                overflow: 'hidden',
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 15
            }}>
                <CauroselRender/>
            </View>
        </ScrollView>
    </SafeAreaView>
})

const styles = StyleSheet.create({
    container: {flex: 1},
})
export default HomePage
