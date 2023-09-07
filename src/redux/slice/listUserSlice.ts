import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { Constant } from 'config/constant';
import { getListUser, getUserStatistic, getUserStatus } from 'api/user';
import { getErrorMessage } from 'api';

export type ListUserState = {
    listUser: {
        error: boolean;
        loading: boolean;
        success: boolean;
        users: UserData[];
        pagination: Pagination;
        status: number;
    };
    statusUser: {
        error: boolean;
        success: boolean;
        loading: boolean;
        message: string;
        data: UserStatus[];
    };
    userStatistic: {
        error: boolean;
        success: boolean;
        loading: boolean;
        message: string;
        data: UserStatistic;
    };
};

type UserStatistic = {
    total: number;
    logged_user: number;
    active_user: number;
    new_user: number;
};

type UserStatus = {
    id: number;
    name: string;
};

type Pagination = {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
};

export type ChargerData = {
    code: string;
    place_id: number;
    place_name: string;
    name: string;
};
export type UserData = {
    id: number;
    name: string;
    status: string;
    status_id: number;
    charger: ChargerData[];
};

export type ListUserRequest = {
    place_id?: string[];
    user_name?: string;
    phone?: string | number;
    email?: string;
    status_user_id?: string[];
    user_code?: string;
    charger_code?: string;
    page?: number;
};

export const fetchListUser = createAsyncThunk('admin/user', async (params: ListUserRequest, { dispatch, rejectWithValue }) => {
    try {
        const response = await getListUser(params);
        const {
            data = [],
            total = 0,
            perPage = Constant.PAGE_SIZE,
            currentPage = Constant.DEFAULT_PAGE,
            lastPage = Constant.DEFAULT_PAGE,
            success,
        } = response.data;

        if (success) {
            dispatch(setListUser({ users: data, pagination: { total, perPage, currentPage, lastPage } }));
            return true;
        }
    } catch (error: any) {
        dispatch(setListUser(error));
        return rejectWithValue(getErrorMessage(error));
    }
    return false;
});

export const fetchUserStatus = createAsyncThunk('admin/user/status', async (_, { dispatch, rejectWithValue }) => {
    try {
        const response = await getUserStatus();
        const { data, success } = response.data;
        if (success) {
            dispatch(setStatus(data));
        }
    } catch (error: any) {
        return rejectWithValue(getErrorMessage(error));
    }
});

export const fetchUserStatistic = createAsyncThunk('admin/user/statistic', async (_, { dispatch, rejectWithValue }) => {
    try {
        const response = await getUserStatistic();
        const { data, success } = response.data;
        dispatch(setUserStatistic(data));
    } catch (error: any) {
        return rejectWithValue(getErrorMessage(error));
    }
});

export const listUserSlice = createSlice({
    name: 'listUser',
    initialState: {
        listUser: {
            error: false,
            loading: false,
            success: false,
            status: Constant.DEFAULT_STATUS,
            users: [],
            pagination: {
                total: 0,
                perPage: Constant.PAGE_SIZE,
                currentPage: Constant.DEFAULT_PAGE,
                lastPage: Constant.DEFAULT_PAGE,
            },
        },
        statusUser: {
            error: false,
            loading: false,
            success: false,
            message: '',
            data: [],
        },
        userStatistic: {
            error: false,
            loading: false,
            success: false,
            message: '',
            data: {} as UserStatistic,
        },
    } as ListUserState,
    reducers: {
        setListUser: (state: ListUserState, { payload }) => {
            const { users, pagination } = payload;
            state.listUser.users = users;
            state.listUser.pagination = pagination;
            state.listUser.status = payload?.response?.status;
        },
        setStatus: (state: ListUserState, { payload }) => {
            state.statusUser.data = payload;
        },
        setUserStatistic: (state: ListUserState, { payload }) => {
            state.userStatistic.data = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchListUser.pending, (state: ListUserState) => {
                state.listUser.loading = true;
            })
            .addCase(fetchListUser.rejected, (state: ListUserState) => {
                state.listUser.loading = false;
                state.listUser.success = false;
                state.listUser.error = true;
            })
            .addCase(fetchListUser.fulfilled, (state: ListUserState) => {
                state.listUser.loading = false;
                state.listUser.success = true;
                state.listUser.error = false;
            })
            .addCase(fetchUserStatus.pending, (state: ListUserState) => {
                state.statusUser.loading = true;
            })
            .addCase(fetchUserStatus.rejected, (state: ListUserState) => {
                state.statusUser.loading = false;
                state.statusUser.success = false;
                state.statusUser.error = true;
            })
            .addCase(fetchUserStatus.fulfilled, (state: ListUserState) => {
                state.statusUser.loading = false;
                state.statusUser.success = true;
                state.statusUser.error = false;
            })
            .addCase(fetchUserStatistic.pending, (state: ListUserState) => {
                state.userStatistic.loading = true;
            })
            .addCase(fetchUserStatistic.rejected, (state: ListUserState) => {
                state.userStatistic.loading = false;
                state.userStatistic.success = false;
                state.userStatistic.error = true;
            })
            .addCase(fetchUserStatistic.fulfilled, (state: ListUserState) => {
                state.userStatistic.loading = false;
                state.userStatistic.success = true;
                state.userStatistic.error = false;
            });
    },
});

export const listUserSelector = (state: RootState) => state.listUsers;
export const { setListUser, setStatus, setUserStatistic } = listUserSlice.actions;
