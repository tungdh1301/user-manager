import {UserParams} from "../api/user";
import {Constant} from "../config/constant";

export type ListUserState = {
    status: Constant.DEFAULT_STATUS,
    listUser: {
        error: boolean;
        loading: boolean;
        success: boolean;
        users: UserParams[];
        status: number;
    };
    userDetail: {
        error: false,
        loading: false,
        success: false,
        status: number,
        user: UserParams;
    }
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type UserParams = {
    id: number | string;
    first_name: string;
    last_name: string;
    email: string;
    status: number | string;
}