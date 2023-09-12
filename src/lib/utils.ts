import {FormInstance} from 'antd';
import {NamePath} from 'antd/lib/form/interface';
import {first, get, isArray, isEmpty, isNumber, isObject, isString, keysIn} from 'lodash';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from "../redux/hooks";


export function useFormValidate<S = undefined>(
    form: FormInstance,
    keyMultiple?: string[]
): [S | undefined, Dispatch<SetStateAction<S | undefined>>] {
    const [messageErrors, setMessageErrors] = useState<S>();

    useEffect(() => {
        if (!isEmpty(messageErrors) && isObject(messageErrors)) {
            const firstKeyError = first(keysIn(messageErrors));
            isString(firstKeyError) && form.scrollToField(firstKeyError.replace(/\.[0-9]/g, ''), {behavior: 'smooth'});
            form.setFields(
                keysIn(messageErrors).map((key) => {
                    let name: NamePath = first(key?.split(/\.+/g)) ?? key.replace(/\.\d/g, '');
                    if (keyMultiple?.includes(name) && key.split(/\.+/g)?.length > 0) {
                        name = key.split(/\.+/g)?.map((val) => (/\d+/g.test(val) ? Number(val) : val));
                    }
                    return {
                        name,
                        errors: get(messageErrors, key),
                        touched: true,
                    };
                })
            );
        }
    }, [form, messageErrors]);

    return [messageErrors, setMessageErrors];
}

export const mbTrim = (value?: any) => {
    if (isNumber(value) || (!isEmpty(value) && !isString(value))) {
        return value;
    }
    if (isEmpty(value)) {
        return '';
    }
    return value.replace(/^[\s　]+/u, '').replace(/[\s　]+$/u, '');
};

export const handleFormData = (params: object) => {
    const formData = new FormData();
    Object.keys(params).forEach((key) => {
        const value = get(params, key);
        if (isArray(value)) {
            [...value].forEach((val, number) => {
                if (isObject(val)) {
                    Object.keys(val).forEach((item) => {
                        if (!isEmpty(get(val, item))) {
                            formData.append(`${key}[${number}][${item}]`, mbTrim(get(val, item)));
                        }
                    });
                } else {
                    formData.append(`${key}[]`, mbTrim(val));
                }
            });
        } else {
            formData.append(key, mbTrim(value));
        }
        if (value === undefined) {
            formData.delete(key);
        }
    });
    return formData;
};

export function useRedirectStatusError(value?: number, action?: any) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        switch (value) {
            case 500:
                navigate('/internal-sever', {replace: true});
                break;
            case 429:
                navigate('/internal-sever', {replace: true});
                break;
            case 404:
                navigate('/404', {replace: true});
                dispatch(action);
                break;
            case 403:
                navigate('/forbidden', {replace: true});
                dispatch(action);
                break;
            // case 400:
            //     navigate('/400', { replace: true });
            //     dispatch(action);
            //     break;
            default:
                break;
        }
    }, [navigate, value, dispatch, action]);
}
