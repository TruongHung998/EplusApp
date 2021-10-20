import React, {memo} from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import HeaderCalendarRoute from "../../widget/header/headerCanlendarRoute";
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

const CalendarRoute = memo(() => {
    return <SafeAreaView>
        <HeaderCalendarRoute title={"Lịch hẹn dịch vụ"}/>
        <TabView/>
    </SafeAreaView>
})

const TabView = memo(() => {
    return <View style={{height: 400}}>
        <ScrollableTabView
            initialPage={1}
            renderTabBar={() => <DefaultTabBar/>}
        >
            <View tabLabel='Tab #1'><Text>alo</Text></View>
            <View tabLabel='Tab #2'><Text>alo</Text></View>
            <View tabLabel='Tab #3'><Text>alo</Text></View>
        </ScrollableTabView>
    </View>
})

const styles = StyleSheet.create({})
export default CalendarRoute
