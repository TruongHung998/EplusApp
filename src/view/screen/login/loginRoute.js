import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import React, {memo} from "react";
import _const from "../../../constants/common"
import {FONT, LAYOUT} from "../../../constants/globalStyles";
import TouchOpacityButton from "../../widget/TouchOpacityButton";
import {PRIMARY_COLOR} from "../../../constants/color";
import {resetStackAction} from "../../../utilities/navigationAction";
import {NAVIGATION_MAIN_APP} from "../../../navigators/routeName";

export const LoginRoute = memo(() => {
    return <TouchableWithoutFeedback style={styles.container} onPress={() => {
        Keyboard.dismiss()
    }}>
        <ImageBackground source={require("../../../assets/background/SplashBackground.png")} resizeMode="cover"
                         style={styles.image}>
            <Image source={require("../../../assets/background/splashIcon.png")} style={{
                width: _const.WIDTH_SCREEN,
                height: _const.HEIGHT_SCREEN * 0.25,
                marginTop: 15
            }} resizeMode={"contain"}/>
            <View style={styles.form}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss()
                }}>
                    <View>
                        <Text style={styles.label}>{"Tên đăng nhập"}</Text>
                        <TextInput style={styles.text_input}/>
                        <View style={{marginTop: 15}}>
                            <Text style={styles.label}>{"Mật khẩu"}</Text>
                            <TextInput style={styles.text_input}/>
                        </View>
                        <TouchOpacityButton style={styles.submit_button} onPress={() => {
                            resetStackAction(NAVIGATION_MAIN_APP)
                        }}>
                            <Text style={{...FONT.normal, color: 'white'}}>Đăng nhập</Text>
                        </TouchOpacityButton>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </ImageBackground>
    </TouchableWithoutFeedback>
})

const styles = StyleSheet.create({
    submit_button: {
        alignSelf: 'center', width: _const.WIDTH_SCREEN * 0.45,
        height: 33,
        backgroundColor: PRIMARY_COLOR,
        alignItems: 'center', justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10
    },
    text_input: {
        width: _const.WIDTH_SCREEN * 0.7,
        borderWidth: 0.8, borderRadius: 5,
        height: 35,
        borderColor: 'gray',
        marginTop: 10,
        alignSelf: 'center'
    },
    label: {
        ...FONT.normal,
        fontSize: 12,
        marginLeft: 15
    },
    container: {flex: 1},
    image: {
        flex: 1,
        alignItems: 'center',
    },
    form: {
        ...LAYOUT.box_shadow_light,
        width: _const.WIDTH_SCREEN * 0.9,
        height: _const.HEIGHT_SCREEN * 0.45,
        borderRadius: 15,
        alignSelf: 'center',
        backgroundColor: 'white',
        paddingTop: 15,
    }
})