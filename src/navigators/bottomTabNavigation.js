import React, {memo} from "react";
import {StackNavigator, TabNavigator} from "./index";
import {RoundTopCornerTabBar} from '../view/elements/bottomTabBar';
import {
    NAVIGATION_TAB_APPOINTMENT,
    NAVIGATION_TAB_EXAMPLE1,
    NAVIGATION_TAB_EXAMPLE2,
    NAVIGATION_TAB_HOME, NAVIGATION_TAB_PERSONAL,
    NAVIGATION_TAB_PROFILE, NAVIGATION_TAB_VACXIN
} from "./routeName";
import TabHomeNavigation from "./tabHomeNavigation";
import TabExample1Navigation from "./tabExample1Navigation";
import TabExample2Navigation from "./tabExample2Navigation";

import {SCREENS} from "../constants/screen";
import CalendarRoute from "../view/screen/CalendarPage/CalendarRoute";


const BottomTabNavigation = memo(() => {
    return (
        <TabNavigator.Navigator
            tabBar={RoundTopCornerTabBar}
        >
            <StackNavigator.Screen
                name={NAVIGATION_TAB_HOME}
                component={TabHomeNavigation}
                options={({route}) => {
                    return {
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarLabel: SCREENS.Home.description,
                        iconName: SCREENS.Home.iconName,
                        activeColor: SCREENS.Home.activeColor,
                        headerShown: false
                    }
                }}
            />
            <StackNavigator.Screen
                name={NAVIGATION_TAB_APPOINTMENT}
                component={CalendarRoute}
                options={({route}) => {
                    return {
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarLabel: SCREENS.Appointment.description,
                        iconName: SCREENS.Appointment.iconName,
                        headerShown: false
                    }
                }}
            />
            <StackNavigator.Screen
                name={NAVIGATION_TAB_VACXIN}
                component={TabExample2Navigation}
                options={({route}) => {
                    return {
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarLabel: SCREENS.Vacxin.description,
                        iconName: SCREENS.Vacxin.iconName,
                        headerShown: false
                    }
                }}
            />
            <StackNavigator.Screen
                name={NAVIGATION_TAB_PROFILE}
                component={TabExample2Navigation}
                options={({route}) => {
                    return {
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarLabel: SCREENS.Profile.description,
                        iconName: SCREENS.Profile.iconName,
                        headerShown: false
                    }
                }}
            />
            <StackNavigator.Screen
                name={NAVIGATION_TAB_PERSONAL}
                component={TabExample2Navigation}
                options={({route}) => {
                    return {
                        tabBarVisible: getTabBarVisibility(route),
                        tabBarLabel: SCREENS.Personal.description,
                        iconName: SCREENS.Personal.iconName,
                        headerShown: false
                    }
                }}
            />
        </TabNavigator.Navigator>
    )
})
const getTabBarVisibility = (route) => {
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : '';
    if (
        routeName === 'ROUTE_EXAMPLE4'
    ) {
        return false;
    }
    return true;
}
export default BottomTabNavigation
