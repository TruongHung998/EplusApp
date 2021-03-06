import React, {memo} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import HiddenBackground from "../../widget/hiddenBackground";
import _const from "../../../constants/common";
import BaseHeaderNavigator from "../../widget/header/baseHeaderNavigator";
import {CauroselRender} from "../../widget/bannerCaurosel";
import ButtonNotify from "./buttonNotify";
import Group3Button from "./group3Button";
import {FONT} from "../../../constants/globalStyles";
import HomeDashboard from "./homeDashboard";
import HomeBanner from "../../widget/homeBanner";
import HomeNews from "./homeNews";
import {useSelector} from "react-redux";
import {selectUserName} from "../../../shared/redux/selector/authSelector";

const HomePage = memo(() => {
    const name = useSelector(selectUserName)

    return <SafeAreaView style={styles.container}>
        <HiddenBackground mode={'stretch'}
                          height={_const.HEIGHT_SCREEN * 0.3}
        />
        <BaseHeaderNavigator color={'white'}
                             title={name}/>
        <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
            {/*<CauroselRender/>*/}
            {/*<ButtonNotify/>*/}
            {/*<Group3Button/>*/}
            {/*<HomeDashboard/>*/}
            {/*<HomeBanner/>*/}
            {/*<HomeNews/>*/}
            <View style={{height: 100}}/>
        </ScrollView>
    </SafeAreaView>
})

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'white'},
})
export default HomePage
