import {hexAToRGBA} from "../../utilities/helper";
import _const from "../../constants/common"
import TouchOpacityButton from "./TouchOpacityButton";
import LazyFastImage from "./lazy_fast_image/lazy_fast_image";
import React, {memo, useCallback, useState} from "react";
import {LayoutAnimation, View, StyleSheet} from "react-native";
import Carousel, {Pagination} from "react-native-snap-carousel";
import {PRIMARY_COLOR} from "../../constants/color";

const dummyData = [
    {
        id: 0,
        url: 'https://images.unsplash.com/photo-1514416205405-075ab2f15964?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
    }
]

export const CauroselRender = memo(({
                                        theme = PRIMARY_COLOR,
                                        data = dummyData,
                                        ...restProps
                                    }) => {
    const [activeSlide, setActiveSlide] = useState(0)

    const onPressImage = useCallback((item) => {

    }, [])

    const renderImage = useCallback((item, index) => {
        const _data = item?.item || {}
        return (
            <TouchOpacityButton key={_data.id + ''} onPress={onPressImage} data={_data}>
                <LazyFastImage source={{uri: _data?.url}}
                               style={[styles.image, {marginBottom: data.length === 1 ? 20 : 0}]} resizeMode={"cover"}/>
            </TouchOpacityButton>
        )
    }, [onPressImage, data])
    const _onChangePage = useCallback((_index) => {
        LayoutAnimation.easeInEaseOut()
        setActiveSlide(_index)
    }, [activeSlide])
    return <View {...restProps}>
        <Carousel
            // loop={true}
            data={data}
            renderItem={renderImage}
            sliderWidth={_const.WIDTH_SCREEN}
            itemWidth={_const.WIDTH_SCREEN * 0.9}
            autoplay={true}
            autoplayDelay={4000}
            autoplayInterval={2500}
            layout={'default'}
            onSnapToItem={_onChangePage}
            firstItem={0}
            swipeThreshold={10}
            layoutCardOffset={9}
        />
        <Pagination
            containerStyle={styles.container_padding}
            dotsLength={data.length}
            activeDotIndex={activeSlide}
            dotStyle={{
                width: 25,
                height: 3,
                borderRadius: 10,
                marginHorizontal: 0,
                backgroundColor: theme,
            }}
            inactiveDotStyle={{
                width: 20,
                height: 2,
                borderRadius: 10,
                backgroundColor: 'gray',
            }}
            dotContainerStyle={{marginHorizontal: 3}}
            inactiveDotOpacity={1.0}
            inactiveDotScale={0.8}
        />
    </View>
})

const styles = StyleSheet.create({
    container_padding: {
        position: 'absolute',
        bottom: -20,
        left: "38%"
    },
    image: {
        width: _const.WIDTH_SCREEN * 0.9,
        height: _const.HEIGHT_SCREEN * 0.35,
        borderRadius: 10
    },
    emptyView: {
        height: _const.HEIGHT_SCREEN * 0.3
    }
})