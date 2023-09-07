import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'redux/store';
import type { To } from 'history';
import { ReactNode } from 'react';

export type SuccessModalState = {
    isShow?: boolean;
    title?: string;
    message?: string | ReactNode;
    messageClassname?: string;
    modalClassname?: string;
    withButton: boolean;
    centered?: boolean;
    image?: string;
    buttonLink?: To | number;
    buttonTitle?: string;
    origin?: string;
    onCancel?: () => void;
    onButtonPress?: () => void;
    maskTransitionName?: string;
    transitionName?: string;
};

export const successModalSlice = createSlice({
    name: 'successModal',
    initialState: {
        image: '',
        title: '',
        message: '',
        messageClassname: '',
        modalClassname: '',
        withButton: false,
        centered: true,
        buttonLink: '',
        buttonTitle: '',
        origin: '',
        maskTransitionNam: '',
        transitionName: '',
    } as SuccessModalState,
    reducers: {
        setPage: () => {

        },
        setSuccessState: (state: SuccessModalState, action: PayloadAction<SuccessModalState>) => {
            state.title = action.payload.title;
            state.message = action.payload.message;
            state.centered = action.payload.centered;
            state.withButton = action.payload.withButton;
            state.image = action.payload.image;
            state.buttonLink = action.payload.buttonLink;
            state.buttonTitle = action.payload.buttonTitle;
            state.isShow = action.payload.isShow;
            state.origin = action.payload.origin;
            state.onCancel = action.payload.onCancel;
            state.onButtonPress = action.payload.onButtonPress;
            state.messageClassname = action.payload.messageClassname;
            state.modalClassname = action.payload.modalClassname;
            state.maskTransitionName = '';
            state.transitionName = '';
        },
        reset: (state: SuccessModalState) => {
            state.image = '';
            state.title = '';
            state.message = '';
            state.messageClassname = '';
            state.withButton = false;
            state.buttonLink = '';
            state.buttonTitle = '';
            state.isShow = undefined;
            state.origin = '';
            state.onCancel = undefined;
            state.centered = false;
            state.onButtonPress = undefined;
            state.modalClassname = undefined;
            state.maskTransitionName = '';
            state.transitionName = '';
        },
        closeSuccessModal: (state: SuccessModalState) => {
            state.image = '';
            state.title = '';
            state.message = '';
            state.messageClassname = '';
            state.withButton = false;
            state.buttonLink = '';
            state.buttonTitle = '';
            state.isShow = false;
            state.origin = '';
            state.onCancel = undefined;
            state.centered = true;
            state.onButtonPress = undefined;
            state.modalClassname = undefined;
            state.maskTransitionName = '';
            state.transitionName = '';
        },
    },
});

export const successModalSelector = (state: RootState) => state.successModal;
export const { setSuccessState, reset, closeSuccessModal } = successModalSlice.actions;
