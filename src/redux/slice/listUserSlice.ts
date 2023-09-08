import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {Constant} from "../../config/constant";
import {getListUser} from "../../api/user";
import {getErrorMessage} from "../../api";
import {RootState} from "../store";

export type ListUserState = {
    listUser: {
        error: boolean;
        loading: boolean;
        success: boolean;
        users: UserData[];
        pagination: Pagination;
        status: number;
    };
};
type Pagination = {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
};

export type UserData = {
    id: number;
    name: string;
    status: string;
    status_id: number;
};

export const fetchListUser = createAsyncThunk('admin/user', async (params: null, { dispatch, rejectWithValue }) => {
    try {
        const response = await getListUser();
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
    } as ListUserState,
    reducers: {
        setListUser: (state: ListUserState, { payload }) => {
            const { users, pagination } = payload;
            state.listUser.users = users;
            state.listUser.pagination = pagination;
            state.listUser.status = payload?.response?.status;
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

    },
});

export const listUserSelector = (state: RootState) => state.listUsers;
export const { setListUser} = listUserSlice.actions;
