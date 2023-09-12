export const SIDEBAR_WIDTH = 265;
export const MAX_LENGTH = 10;
export const regExpDeviceCode = new RegExp(/^([a-zA-Z0-9]+)$/);
export const regExpSymbol = new RegExp(/^([a-zA-Z0-9-]+)$/);
export const regExpPasswordCode = new RegExp(/[`~,.<>;':"#$&¥!%/[\]|{}()=_+-]/);
export const regExpUrl = new RegExp(
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
);
export const regExpSpace = new RegExp(/[^\s+]/);
export const regUrlTwoByte = new RegExp(/[\uFF10-\uFF19]/g);

export const Constant = {
    DEFAULT_STATUS: 200,
};

export const facility_status = [''];

export const DEFAULT_REPEAT = 1;
export const REPEAT_ALL_DAY = 3;

export type HolidayType = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export const CalendarFormat = 'YYYY-MM-DD HH:mm:ss';
export const YearFormat = 'YYYY/MM/DD';
export const HourFormat = 'HH';
export const MinuteFormat = 'mm';
