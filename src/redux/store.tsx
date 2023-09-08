import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {listUserSlice} from "./slice/listUserSlice";

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
    listUsers: listUserSlice.reducer,
    // successModal: successModalSlice.reducer,
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
