import {getAxiosClientWithToken} from "./index";
import {handleFormData} from "../lib/utils";
import {UserParams} from "../types";

export const getListUserAPI = () => {
    return getAxiosClientWithToken().get(`user`);
};

export const getUserAPI = (id: { id?: number | string }) => {
    return getAxiosClientWithToken().get(`user/${id}`);
};

// export const createUser = (params: UserParams) => {
//     const restClient = getAxiosClientWithToken();
//     const formData = handleFormData(params);
//     return restClient.post(`/user`, formData);
// };
export const createUserAPI = (params: UserParams) => {
    const formData = handleFormData(params);
    return getAxiosClientWithToken().post(`/user`, formData);
};

// export const updateUser = (params: UserParams, id: string | number) => {
//     const restClient = getAxiosClientWithToken();
//     const formData = handleFormData(params);
//     return restClient.put(`/user/${id}`, formData);
// };
export const updateUserAPI = (params: UserParams) => {
    const formData = handleFormData(params);
    return getAxiosClientWithToken().put(`/user/${params.id}`, formData);
};

export const deleteUserAPI = (id: string | number) => {
    return getAxiosClientWithToken().delete(`user/${id}`);
};

