import { USER_DATA } from "../models/UserModel.js";

const QueryUserById = (id) => {
    let user;
    USER_DATA.forEach((userData) => {
        if (userData.id == id) {
            user = userData;
        }
    });
    return user;
};

const QueryAllUser = () => {
    return USER_DATA;
};

export { QueryAllUser, QueryUserById };
