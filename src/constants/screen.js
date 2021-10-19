/**
 * Define screen names as constants here
 */

import {ICON_NAME} from "./iconName";
import {COLOR_GREEN, COLOR_ORANGE, COLOR_RED} from "./color";

const SCREENS = {
    Home: {
        name: 'Home',
        description: 'Trang chủ',
        activeColor: COLOR_RED,
        iconName: ICON_NAME.ICON_HOME
    },
    Appointment: {
        name: 'Appointment',
        description: 'Lịch hẹn',
        activeColor: COLOR_ORANGE,
        iconName: ICON_NAME.CALENDAR_ICON
    },
    Vacxin: {
        name: 'Vacxin',
        description: 'Vắc xin',
        activeColor: COLOR_GREEN,
        iconName: ICON_NAME.SHIELD_ICON
    },
    Profile: {
        name: 'Profile',
        description: 'Hồ sơ sức khỏe',
        activeColor: COLOR_GREEN,
        iconName: ICON_NAME.HEART_ICON
    },
    Personal: {
        name: 'Personal',
        description: 'Cá nhân',
        activeColor: COLOR_GREEN,
        iconName: ICON_NAME.USER_BIN_ICON
    },
};

export {SCREENS};
