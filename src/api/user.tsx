import { getAxiosClientWithToken } from 'api';
import { actionUser } from '../redux/slice/detailUserSlice';
import { ListUserRequest } from '../../../../Desktop/user-manager/src/redux/slice/listUserSlice';

export const getUser = (id: string | number) => {
    return getAxiosClientWithToken().get(`admin/user/${id}`);
};

export const updateStatusUser = (action: actionUser) => {
    return getAxiosClientWithToken().post(`admin/user/${action.id}/${action.action}`);
};

export const deleteUser = (id: string | number) => {
    return getAxiosClientWithToken().delete(`admin/user/${id}`);
};

export const getListUser = (params: ListUserRequest) => {
    return getAxiosClientWithToken().get(`admin/user`, { params });
};

export const getUserStatus = () => {
    return getAxiosClientWithToken().get('admin/user/statuses');
};

export const getUserStatistic = () => {
    return getAxiosClientWithToken().get('admin/user/statistic');
};
