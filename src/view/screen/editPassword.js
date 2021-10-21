import {
    Alert,
    ImageBackground,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import React, {memo, useCallback, useState} from "react";
import _const from "../../constants/common"
import {useDispatch, useSelector} from "react-redux";
import {useSetLoading, useShowAlert} from "../../context/appContext";
import TouchOpacityButton from "../widget/TouchOpacityButton";
import {FONT, LAYOUT} from "../../constants/globalStyles";
import {PRIMARY_COLOR} from "../../constants/color";
import {changePassAction, loginAction} from "../../shared/redux/actions/authAction";
import {resetStackAction} from "../../utilities/navigationAction";
import {NAVIGATION_MAIN_APP} from "../../navigators/routeName";
import {selectAccessToken} from "../../shared/redux/selector/authSelector";

export const EditPasswordRoute = memo(() => {
    const [formInput, setFormInput] = useState({
        oldPassword: "localhost",
        newPassword: "localhost",
        reNewPassword: "localhost"
    })
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const setLoading = useSetLoading()
    const useAlert = useShowAlert()
    const token = useSelector(selectAccessToken)

    const onChangeInput = useCallback((text, slug) => {
        switch (slug) {
            case "oldPass":
                setFormInput({...formInput, oldPassword: text})
                break;
            case "newPass":
                setFormInput({...formInput, newPassword: text})
                break;
            case "renewPass":
                setFormInput({...formInput, reNewPassword: text})
                break;
        }
    }, [formInput])

    const _onRepass = useCallback(async () => {
        if (formInput.oldPassword && formInput.newPassword && formInput.reNewPassword) {
            setLoading(true)
            // dispatch(loginAction({
            //     username: "minhhuy",
            //     password: "localhost"
            // }, () => {
            //     setLoading(false)
            //     setError("")
            // }, (error) => {
            //     setError('Sai tên đăng nhập hoặc mật khẩu')
            //     setLoading(false)
            // }))
            dispatch(changePassAction({
                oldPassword: formInput.oldPassword,
                newPassword: formInput.newPassword,
                reNewPassword: formInput.reNewPassword
            }, (res) => {
                setLoading(false)
                if (res?.message) {
                    useAlert({
                        dismissTouchOutSide: true,
                        contentTitle: "Không thành công",
                        message: res?.message
                    })
                } else useAlert({
                    dismissTouchOutSide: true,
                    contentTitle: "Thành công",
                    message: "Đổi mật khẩu thành công"
                })
            }, (error) => {
                setError('Sai tên đăng nhập hoặc mật khẩu')
                setLoading(false)
            }))
        } else setError("Điền đủ thông tin")
    }, [formInput])

    return <TouchableWithoutFeedback style={styles.container} onPress={() => {
        Keyboard.dismiss()
    }}>
        <ImageBackground source={require("../../assets/background/SplashBackground.png")} resizeMode="cover"
                         style={styles.image}>
            <Text style={styles.title}>ĐỔI MẬT KHẨU</Text>
            {/*<WebView source={{uri: 'https://app.e-plus.vn/login'}} style={{width: _const.WIDTH_SCREEN, height: 500}}/>*/}
            <View style={styles.form}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss()
                }}>
                    <View>
                        <Text style={styles.label}>{"Nhập mật khẩu cũ"}</Text>
                        <TextInput style={styles.text_input} onChangeText={(text) => onChangeInput(text, 'oldPass')}/>
                        <View style={{marginTop: 10}}>
                            <Text style={styles.label}>{"Nhập mật khẩu mới"}</Text>
                            <TextInput style={styles.text_input}
                                       onChangeText={(text) => onChangeInput(text, 'newPass')}/>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text style={styles.label}>{"Nhập lại mật khẩu mới"}</Text>
                            <TextInput style={styles.text_input}
                                       onChangeText={(text) => onChangeInput(text, 'renewPass')}/>
                        </View>
                        {error !== '' && <Text style={{
                            ...FONT.normal,
                            fontSize: 12,
                            color: 'red',
                            textAlign: 'center',
                            marginTop: 10,
                            marginBottom: -10
                        }}>{error}</Text>}
                        <TouchOpacityButton style={styles.submit_button} onPress={_onRepass}>
                            <Text style={{...FONT.normal, color: 'white'}}>Cập nhật</Text>
                        </TouchOpacityButton>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </ImageBackground>
    </TouchableWithoutFeedback>
})

const styles = StyleSheet.create({
    title: {
        ...FONT.bold,
        color: 'white',
        marginTop: _const.HEIGHT_SCREEN * 0.1,
        fontSize: 20,
        marginBottom: _const.HEIGHT_SCREEN * 0.05
    },
    image: {
        flex: 1,
        alignItems: 'center',
    },
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