import React, {memo, useCallback, useState} from "react";
import {LayoutAnimation, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import HiddenBackground from "../../widget/hiddenBackground";
import _const from "../../../constants/common";
import BaseHeaderNavigator from "../../widget/header/baseHeaderNavigator";
import {CauroselRender} from "../../widget/bannerCaurosel";
import TouchOpacityButton from "../../widget/TouchOpacityButton";
import {COLOR_PAPER, PRIMARY_COLOR} from "../../../constants/color";
import VectorIcon from "../../elements/vectorIcon";
import {ICON_NAME} from "../../../constants/iconName";
import {FONT, LAYOUT} from "../../../constants/globalStyles";
import LazyFastImage from "../../widget/lazy_fast_image/lazy_fast_image";

const dummyData = [
    {
        name: "Nổi bật",
        content: [
            {
                title: "name",
                image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=547&q=80"
            },
            {
                title: "name",
                image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=547&q=80"
            },
            {
                title: "name",
                image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=547&q=80"
            }
        ]
    },
    {
        name: "Tiêm chủng",
        content: []
    },
    {
        name: "Vắc xin",
        content: []
    },
    {
        name: "Vắc xin",
        content: []
    },
    {
        name: "Vắc xin",
        content: []
    },
    {
        name: "Vắc xin",
        content: []
    }
]

const HomeNews = memo(() => {
    const [contentData, setContentData] = useState(dummyData[0].content)
    const [selectHeader, setSelectHeader] = useState(0)

    const _onPressHeader = useCallback((data) => {
        LayoutAnimation.easeInEaseOut()
        setSelectHeader(data)
    }, [])

    const renderHeader = useCallback(() => {
        return dummyData.map((item, index) => {
                return <TouchOpacityButton style={[styles.header, {
                    marginRight: index === dummyData.length - 1 ? 15 : 0,
                    backgroundColor: selectHeader === index ? PRIMARY_COLOR : 'white',
                    marginBottom: 5
                }]}
                                           data={index} onPress={_onPressHeader}>
                    < Text style={[styles.text, {color: selectHeader === index ? 'white' : 'black'}]}>{item.name}</Text>
                </TouchOpacityButton>
            }
        )
    }, [selectHeader])

    const renderContent = useCallback(() => {
        if (contentData.length === 0) return
        return contentData.map((item, index) => {
            return <View style={styles.content_box}>
                <LazyFastImage source={{uri: item.image}} style={styles.image} resizeMode={'cover'}/>
                <View style={{marginLeft: 5}}>
                    <Text style={styles.text1} numberOfLines={2}>BVĐK Tâm Anh triển khai dịch vụ Xét nghiệm
                        RT-PCR</Text>
                    <Text>
                        <Text style={styles.text2}>Tin tức - </Text>
                        <Text style={styles.text2}>3 giờ trước</Text>
                    </Text>
                </View>
            </View>
        })
    }, [contentData])

    return <View style={{marginTop: 15}}>
        <Text style={styles.text_title}>Tin tức & Kiến thức</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderHeader()}
        </ScrollView>
        <View style={{marginTop: 15}}/>
        {renderContent()}
        <TouchOpacityButton
            style={styles.button_more}>
            <Text style={styles.text3}>Đọc thêm...</Text>
        </TouchOpacityButton>
    </View>
})

const styles = StyleSheet.create({
    text3: {
        ...FONT.normal,
        fontSize: 12
    },
    button_more: {
        alignSelf: 'center',
        width: 100,
        backgroundColor: 'white', ...LAYOUT.box_shadow_light,
        alignItems: 'center',
        height: 25,
        borderRadius: 5, marginTop: 5,
        justifyContent: 'center'
    },
    text1: {
        ...FONT.bold,
        fontSize: 12,
        width: _const.WIDTH_SCREEN * 0.65
    },
    text2: {
        ...FONT.normal_500,
        fontSize: 12,
    },
    image: {
        width: _const.WIDTH_SCREEN * 0.25,
        height: _const.HEIGHT_SCREEN * 0.1,
        borderRadius: 10
    },
    content_box: {
        width: _const.WIDTH_SCREEN * 0.95,
        height: _const.HEIGHT_SCREEN * 0.13,
        marginBottom: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        ...LAYOUT.box_shadow_light,
        borderRadius: 5,
        paddingLeft: 5
    },
    text_title: {
        ...FONT.bold,
        fontSize: 15,
        marginLeft: 15,
        marginBottom: 15
    },
    text: {
        ...FONT.normal,
        fontSize: 12,
        alignSelf: 'center'
    },
    header: {
        borderRadius: 5,
        marginLeft: 15,
        paddingHorizontal: 8,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        ...LAYOUT.box_shadow_light
    },
    container: {}
})
export default HomeNews
