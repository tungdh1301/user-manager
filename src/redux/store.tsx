import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authSlice } from 'redux/slice/authSlice';
import { loginSlice } from 'redux/slice/loginSlice';
import { successModalSlice } from './slice/successSlice';
import { listPlaceSlice } from './slice/listPlaceSlice';
import { placeSlice } from './slice/placeSlice';
import { chargerSlice } from './slice/chargeSlice';
import { listUserSlice } from './slice/listUserSlice';
import { detailUserSlice } from './slice/detailUserSlice';
import { listChargerHistorySlice } from './slice/listChargerHistory';
import { chargerHistorySlice } from './slice/ChargerHistorySlice';
import { accountSlice } from './slice/accountSlice';
import {categorySlice} from "./slice/categorySlice";
import {notificationSlice} from "./slice/notificationSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [''],
    blacklist: [''],
};

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['email', 'name', 'id', 'token', 'role', 'place_id'],
};

const reducers = combineReducers({
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    login: loginSlice.reducer,
    places: placeSlice.reducer,
    listPlaces: listPlaceSlice.reducer,
    listChargerHistory: listChargerHistorySlice.reducer,
    chargers: chargerSlice.reducer,
    listUsers: listUserSlice.reducer,
    successModal: successModalSlice.reducer,
    listSearchPlaceCharger: chargerSlice.reducer,
    users: detailUserSlice.reducer,
    chargerHistory: chargerHistorySlice.reducer,
    account: accountSlice.reducer,
    categories: categorySlice.reducer,
    notification: notificationSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
