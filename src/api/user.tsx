import {getAxiosClientWithToken} from "./index";

export const getUser = (id: string | number) => {
    return getAxiosClientWithToken().get(`user/${id}`);
};

// export const updateUser = (action: actionUser) => {
//     return getAxiosClientWithToken().post(`user/${action.id}/${action.action}`);
// };

export const deleteUser = (id: string | number) => {
    return getAxiosClientWithToken().delete(`user/${id}`);
};

export const getListUser = () => {
    return getAxiosClientWithToken().get(`users`);
};
