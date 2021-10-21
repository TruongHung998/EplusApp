import Config from '../config'
import DeviceInfo from 'react-native-device-info';

export default Object.freeze({
    getDomain: function () {
        switch (Config.ENV) {
            case 'ALPHA':
                return 'https://app.e-plus.vn/api/';
            case 'BETA':
                return 'http://192.168.20.202:3002/';
            case 'PRODUCTION':
                return 'https://app.e-plus.vn/api/';
            default:
                return '';
        }
    },
    getPrefixVersionAPI: function () {
        const {VERSION_API, SUB_VERSION_API} = Config
        return `v${VERSION_API}.${SUB_VERSION_API}/`;
    },
    isBunnyEarDevice: function () {
        let modelStr = DeviceInfo.getModel();
        if (Platform.OS == 'ios') {
            return modelStr && (modelStr.includes('X') || modelStr.includes('Max') || modelStr.includes('Pro') || modelStr.includes('11') || modelStr.includes('12') || modelStr.includes('13'))
        }
        return false
    },
})
