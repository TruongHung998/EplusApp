import React, {memo, useCallback} from 'react'
import _const from '../../constants/common'
import {Image} from 'react-native'

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

    const _onLayoutView = useCallback((_event) => {
        var { height } = _event.nativeEvent.layout;
        onLayout && onLayout(height)
    }, [])

    return (
        <Image
            onLayout={(event) => {
                _onLayoutView(event)
            }}
            resizeMode={mode}
            style={[{ position: 'absolute', top: top, left: left, width: width, height: height }, containerStyle]}
            source={resource}
        />
    )
})

HiddenBackground.propTypes = {
}

HiddenBackground.defaultProps = {
    mode: 'cover',
    width: _const.WIDTH_SCREEN,
    height: _const.WIDTH_SCREEN / 5 * 3.19,
    top: 0,
    left: 0
}

export default HiddenBackground
