import {
    Image,
    ImageBackground,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import React, {memo, useCallback, useState} from "react";
import _const from "../../../constants/common"
import {FONT, LAYOUT} from "../../../constants/globalStyles";
import TouchOpacityButton from "../../widget/TouchOpacityButton";
import {PRIMARY_COLOR} from "../../../constants/color";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../../../shared/redux/actions/authAction";
import {useSetLoading} from "../../../context/appContext";
import WebView from "react-native-webview";
import {selectAccessToken} from "../../../shared/redux/selector/authSelector";
import {resetStackAction} from "../../../utilities/navigationAction";
import {NAVIGATION_MAIN_APP} from "../../../navigators/routeName";

export const LoginRoute = memo(() => {
    const [formInput, setFormInput] = useState({username: "gia", password: "866081"})
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const setLoading = useSetLoading()
    const info = useSelector(selectAccessToken)

    const onChangeInput = useCallback((text, slug) => {
        if (slug === "user")
            setFormInput({...formInput, username: text})
        else setFormInput({...formInput, password: text})
    }, [formInput])

    const _onLogin = useCallback(async () => {
        if (formInput.username && formInput.password) {
            setLoading(true)
            dispatch(loginAction({
                username: formInput.username,
                password: formInput.password
            }, () => {
                setLoading(false)
                resetStackAction(NAVIGATION_MAIN_APP)
            }, (error) => {
                setError('Sai tên đăng nhập hoặc mật khẩu')
                setLoading(false)
            }))
        } else setError("Điền đủ thông tin")
    }, [formInput])

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
            {/*<WebView source={{uri: 'https://app.e-plus.vn/login'}} style={{width: _const.WIDTH_SCREEN, height: 500}}/>*/}
            <View style={styles.form}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss()
                }}>
                    <View>
                        <Text style={styles.label}>{"Tên đăng nhập"}</Text>
                        <TextInput style={styles.text_input} onChangeText={(text) => onChangeInput(text, 'user')}/>
                        <View style={{marginTop: 15}}>
                            <Text style={styles.label}>{"Mật khẩu"}</Text>
                            <TextInput style={styles.text_input} secureTextEntry={true}
                                       onChangeText={(text) => onChangeInput(text, 'pass')}/>
                        </View>
                        {error !== '' && <Text style={{
                            ...FONT.normal,
                            fontSize: 12,
                            color: 'red',
                            textAlign: 'center',
                            marginTop: 10,
                            marginBottom: -10
                        }}>{error}</Text>}
                        <TouchOpacityButton style={styles.submit_button} onPress={_onLogin}>
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
        alignSelf: 'center',
        ...FONT.normal,
        paddingLeft: 10,
        fontSize: 12
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