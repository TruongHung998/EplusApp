import React, {memo} from 'react';
import {StackNavigator} from "./index";
import {NAVIGATION_MAIN_APP, ROUTE_LOGIN, ROUTE_SPLASH} from "./routeName";
import MainAppNavigation from "./mainAppNavigation";
import SplashScreen from "../view/screen/splashScreen";
import {LoginRoute} from "../view/screen/login/loginRoute";

const RootNavigation = memo((props) => {

    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen
                name={ROUTE_LOGIN}
                component={LoginRoute}
                options={{headerShown: false}}
            />
            <StackNavigator.Screen
                name={ROUTE_SPLASH}
                component={SplashScreen}
                options={{headerShown: false}}
            />
            <StackNavigator.Screen
                name={NAVIGATION_MAIN_APP}
                component={MainAppNavigation}
                options={{headerShown: false}}
            />
        </StackNavigator.Navigator>
    )
})
export default RootNavigation
