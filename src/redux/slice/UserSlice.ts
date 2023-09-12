import { createSlice } from '@reduxjs/toolkit';
import {Constant} from "../../config/constant";
import {createUserAPI, deleteUserAPI, getListUserAPI, getUserAPI, updateUserAPI} from "../../api/user";
import {getErrorMessage} from "../../api";
import {RootState} from "../store";
import {ListUserState, UserParams} from "../../types";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchListUser = createAsyncThunk('/user', async (params: null, {dispatch, rejectWithValue}) => {
    try {
        const response = await getListUserAPI();
        const {
            data = [],
            success,
        } = response.data;
        if (success) {
            dispatch(setListUser({users: data}));
            return true;
        }
    } catch (error: any) {
        dispatch(setListUser(error));
        return rejectWithValue(getErrorMessage(error));
    }
    return false;
});

export const createUser = createAsyncThunk(
    '/user/store',
    async (params: UserParams, {dispatch, rejectWithValue}) => {
        try {
            let response = await createUserAPI(params);
            const {data, success} = response.data;
            if (success) {
                dispatch(setNewUser(data));
                return true;
            }
        } catch (error: any) {
            dispatch(setNewUser(error));
            return rejectWithValue(getErrorMessage(error));
        }
    }
);
export const editUser = createAsyncThunk(
    '/user/edit/:id',
    async (params: { id?: number | string }, {dispatch, rejectWithValue}) => {
        try {
            let response = await getUserAPI(params);
            const {data, success} = response.data;
            if (success) {
                dispatch(setEditUser({user: data}));
                return true;
            }
        } catch (error: any) {
            dispatch(setEditUser(error));
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

export const updateUser = createAsyncThunk(
    '/user/:id/update',
    async (params: UserParams, {dispatch, rejectWithValue}) => {
        try {
            let response = await updateUserAPI(params);
            const {data, success} = response.data;
            if (success) {
                dispatch(setUpdateUser(data));
                return true;
            }
        } catch (error: any) {
            dispatch(setUpdateUser(error));
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

export const deleteUser = createAsyncThunk(
    '/user/:id/delete',
    async (id: string | number, {dispatch, rejectWithValue}) => {
        try {
            let response = await deleteUserAPI(id);
            const {data, success} = response.data;
            if (success) {
                dispatch(setListUser(data));
                return true;
            }
        } catch (error: any) {
            dispatch(setListUser(error));
            return rejectWithValue(getErrorMessage(error));
        }
    }
);


export const UserSlice = createSlice({
    name: 'Users',
    initialState: {
        status: Constant.DEFAULT_STATUS,
        listUser: {
            error: false,
            loading: false,
            success: false,
            status: Constant.DEFAULT_STATUS,
            users: [],
        },
        userDetail: {
            error: false,
            loading: false,
            success: false,
            status: Constant.DEFAULT_STATUS,
            user: {} as UserParams,
        }
    } as ListUserState,
    reducers: {
        setListUser: (state: ListUserState, {payload}) => {
            const {users} = payload;
            state.listUser.users = users;
            state.listUser.status = payload?.response?.status;
        },
        setEditUser: (state: ListUserState, {payload}) => {
            const {user} = payload;
            state.userDetail.user = user;
            state.userDetail.status = payload?.response?.status;
        },
        setUpdateUser: (state, action) => {
            state.status = action?.payload?.response?.status;
        },
        setNewUser: (state, action) => {
            state.userDetail = action?.payload?.user ?? [];
            state.status = action?.payload?.response?.status;
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

export const UserSelector = (state: RootState) => state.Users;
export const {setListUser, setEditUser, setUpdateUser, setNewUser} = UserSlice.actions;
