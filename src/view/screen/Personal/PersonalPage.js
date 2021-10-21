import React, {memo, useEffect} from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import HiddenBackground from "../../widget/hiddenBackground";
import _const from "../../../constants/common";
import {loginAction} from "../../../shared/redux/actions/authAction";
import {useDispatch, useSelector} from "react-redux";
import {useSetLoading, useShowAlert} from "../../../context/appContext";
import {selectUserName} from "../../../shared/redux/selector/authSelector";
import {FONT, LAYOUT} from "../../../constants/globalStyles";
import TouchOpacityButton from "../../widget/TouchOpacityButton";
import {closeDrawer, navigateAction, pushAction} from "../../../utilities/navigationAction";
import {ROUTE_EDIT_PASSWORD} from "../../../navigators/routeName";
import VectorIcon from "../../elements/vectorIcon";
import {ICON_NAME} from "../../../constants/iconName";

const PersonalPage = memo(() => {
    const dispatch = useDispatch()
    const setLoading = useSetLoading()
    const useAlert = useShowAlert()
    const name = useSelector(selectUserName)

    useEffect(() => {
        // dispatch(loginAction({
        //     username: "minhhuy",
        //     password: "localhost"
        // }, () => {
        //     setLoading(false)
        // }, (error) => {
        //     setLoading(false)
        // }))
    }, [])
    return <SafeAreaView style={styles.container}>
        <HiddenBackground mode={'stretch'}
                          height={_const.HEIGHT_SCREEN * 0.3}
        />
        <View style={{marginTop: _const.HEIGHT_SCREEN * 0.05}}>
            <View style={{width: 80, height: 80, borderRadius: 40, backgroundColor: 'gray'}}/>
            <Text style={styles.name}>{name?.toUpperCase()}</Text>
        </View>
        <View style={styles.box}>
            <TouchOpacityButton style={styles.button} onPress={() => {
                navigateAction(ROUTE_EDIT_PASSWORD)
            }}>
                <Text>Đổi mật khẩu</Text>
                <VectorIcon name={ICON_NAME.ARROW_BACK_ICON} size={12}/>
            </TouchOpacityButton>
            <TouchOpacityButton style={styles.button} onPress={() => {
                pushAction(ROUTE_EDIT_PASSWORD)
            }}>
                <Text>Đổi mật khẩu</Text>
                <VectorIcon name={ICON_NAME.ARROW_BACK_ICON} size={12}/>
            </TouchOpacityButton>
        </View>

    </SafeAreaView>
})

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: _const.WIDTH_SCREEN * 0.85,
        height: 40,
        paddingHorizontal: 25,
        borderBottomWidth: 0.5,
        borderColor: 'black'
    },
    box: {
        width: _const.WIDTH_SCREEN * 0.85,
        height: _const.HEIGHT_SCREEN * 0.5,
        backgroundColor: 'white', ...LAYOUT.box_shadow_light,
        borderRadius: 5,
        marginTop: 15
    },
    container: {flex: 1, backgroundColor: 'white', alignItems: 'center'},
    name: {...FONT.normal, color: 'white', textAlign: 'center', marginTop: 10}
})
export default PersonalPage
