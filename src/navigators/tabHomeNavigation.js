import React, {memo} from "react";
import {StackNavigator} from "./index";
import {ROUTE_EDIT_PASSWORD, ROUTE_HOME} from "./routeName";

import {LAYOUT} from "../constants/globalStyles";
import HomePage from "../view/screen/homePage/homePage";
import {EditPasswordRoute} from "../view/screen/editPassword";

export default memo(() => {
    return (
        <StackNavigator.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerTintColor: 'black',
                headerTitleAlign: 'left',
                headerLeftContainerStyle: LAYOUT.headerLeftContainerStyle
            }}
        >
            <StackNavigator.Screen
                name={ROUTE_HOME}
                component={HomePage}
                options={{headerShown: false}}
            />
            <StackNavigator.Screen
                name={ROUTE_EDIT_PASSWORD}
                component={EditPasswordRoute}
                options={{headerShown: false}}
            />
        </StackNavigator.Navigator>
    )
})
