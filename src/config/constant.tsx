export const SIDEBAR_WIDTH = 265;

export const ROLE_ADMIN = 2;
export const ROLE_SUPER_ADMIN = 1;
export const ROLE_VIEWER = 3;
export const SUPER_ADMIN = 'super-admin';
export const ADMIN = 'admin';
export const VIEWER = 'viewer';
export const MIN_LENGTH = 1;
export const MAX_LENGTH = 10;
export const regExpDeviceCode = new RegExp(/^([a-zA-Z0-9]+)$/);
export const regExpSymbol = new RegExp(/^([a-zA-Z0-9-]+)$/);
export const regExpPasswordCode = new RegExp(/[`~,.<>;':"#$&¥!%/[\]|{}()=_+-]/);
export const regExpUrl = new RegExp(
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
);
export const regExpSpace = new RegExp(/[^\s+]/);
export const regUrlTwoByte = new RegExp(/[\uFF10-\uFF19]/g);

export const PLACE_TYPE = [
    '分譲マンション',
    '賃貸マンション',
    '分譲アパート',
    '賃貸アパート',
    '商業施設',
    '宿泊施設',
    '道の駅',
    'SA・PA',
    'コンビニ',
    '自動車ディーラー',
    '公共駐車場',
    '月極駐車場',
    'コインパーキング',
];

export const Constant = {
    DEFAULT_PAGE: 1,
    PAGE_SIZE: 10,
    PAGE_SIZE_NEW: 20,
    DEFAULT_STATUS: 0,
    STATUS_USER_ON_LOGIN: '利用中(ログイン中)',
    STATUS_ID_USER_ON_LOGIN: 1,
    STATUS_CHARGER_OPEN: 1,
    STATUS_STOP_PLACE: 0,
    STATUS_OPEN_PLACE: 1,
    STATUS_CHARGER_STROP: 0,
    STATUS_USER_ON_LOGOUT: '利用中(ログアウト)',
    STATUS_ID_USER_ON_LOGOUT: 2,
    STATUS_USER_STOP: '利用停止',
    BUTTON_ON: '利用中',
    CONFIRM_ON: '再開',
    BUTTON_STOP: '停止中',
    CONFIRM_STOP: '停止',
    BUTTON_DELETE: '停止中',
    MASTER_EXIST: '既に登録されているマスターは存在しています。',
    ADDRESS_ALL_USER: '全体',
    ADDRESS_USER_PLACE: '設備',
    STATUS_NOTIFICATION_POSTING: '掲載中',
    STATUS_NOTIFICATION_POSTING_STOP: '掲載期間終了',
    CHARGER_BRAND_NITTO: 2,
    CHARGER_MAKER_NITTO: 21,
    CHARGING_STATUS_TYPE_NITTO: 1,
    DEFAULT_LIST_CHARGING_STATUS: 1,
    DISPLAY_STATUS_EDIT_NOTIFICATION: 2,
    ADDRESS_STATUS_ALL_USER: 0,
    ADDRESS_STATUS_USER: 1,
    RESUME: '停止中',
    STOP: '停止中',
    CHARGER_OPEN: '営業中',
    CHARGER_STOP: '停止中',
};

export const Master_slave = {
    MASTER: 0,
    SLAVE: 1,
};
export const Message = {
    ON_USER: 'このユーザーを再開しますか？',
    STOP_USER: 'このユーザーを停止しますか？',
    DELETE_USER: 'このユーザーを削除しますか？',
    STOP_CHARGER: 'この充電器を停止しますか？',
    ON_CHARGER: 'この充電器を再開しますか？',
    OPEN_PLACE: 'この施設を再開しますか？',
    STOP_PLACE: 'この施設を停止しますか？',
};

export const holiday = [
    { label: '月', value: 'monday' },
    { label: '火', value: 'tuesday' },
    { label: '水', value: 'wednesday' },
    { label: '木', value: 'thursday' },
    { label: '金', value: 'friday' },
    { label: '土', value: 'saturday' },
    { label: '日', value: 'sunday' },
];
export const charger_type_id = [
    { id: 1, value: 1, name: '100V EVコンセント' },
    { id: 2, value: 2, name: '200V EVコンセント' },
    { id: 3, value: 3, name: '100V 普通充電器' },
    { id: 4, value: 4, name: '200V 普通充電器' },
    { id: 5, value: 5, name: '急速充電器' },
];
export const charger_maker_id = [
    { id: 1, value: 1, name: 'Panasonic' },
    { id: 2, value: 2, name: '日東工業' },
    { id: 3, value: 3, name: 'ジゴワッツ' },
    { id: 4, value: 4, name: 'フェイフォンジャパン' },
    { id: 5, value: 5, name: '新電元' },
];
export const charger_used = [
    { id: 1, value: 1, name: '15日以内に使用' },
    { id: 2, value: 2, name: '30日以内に使用' },
    { id: 3, value: 3, name: '60日以内に使用' },
    { id: 4, value: 4, name: '半年以上未使用' },
];
export const charger_operation_status = [
    { id: 1, value: 1, name: '利用中' },
    { id: 2, value: 2, name: '利用可能' },
    { id: 3, value: 3, name: '利用停止' },
    { id: 4, value: 4, name: '利用不可' },
];

export const idling_time = [
    { id: 0 },
    { id: 5 },
    { id: 10 },
    { id: 15 },
    { id: 20 },
    { id: 25 },
    { id: 30 },
    { id: 35 },
    { id: 40 },
    { id: 45 },
    { id: 50 },
    { id: 55 },
    { id: 60 },
];

export const minute = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
];

export const idling_time_validator = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

export const hour = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
];

export const facility_status = [''];

export const Day_Options = ['月', '火', '水', '木', '金', '土', '日'];
export const Options_Return = ['繰り返ししない', '毎日', '毎週'];
export const DEFAULT_REPEAT = 1;
export const REPEAT_ALL_DAY = 3;

export type HolidayType = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export const CalendarFormat = 'YYYY-MM-DD HH:mm:ss';
export const YearFormat = 'YYYY/MM/DD';
export const HourFormat = 'HH';
export const MinuteFormat = 'mm';

export const TERRAMOTOR_MAP = { lat: 35.665783144962724, lng: 139.75547006576627 };
export const GoogleApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY as string;
