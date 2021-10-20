import React, {memo, useCallback} from 'react'
import _const from '../../constants/common'
import {Image, View} from 'react-native'
import {PRIMARY_COLOR} from "../../constants/color";

const HiddenBackground = memo((props) => {

    const {
        onLayout,
        resource,
        mode,
        width,
        height,
        top,
        left,
        containerStyle
    } = props

    return (
        <View
            style={[{
                position: 'absolute',
                top: top,
                left: left,
                width: width,
                height: height,
                backgroundColor: PRIMARY_COLOR
            }, containerStyle]}
        />
    )
})

HiddenBackground.propTypes = {}

HiddenBackground.defaultProps = {
    mode: 'cover',
    width: _const.WIDTH_SCREEN,
    height: _const.WIDTH_SCREEN / 5 * 3.19,
    top: 0,
    left: 0
}

export default HiddenBackground
