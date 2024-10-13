import { QueryAllUser, QueryUserById } from "../services/UserService.js";

const getAllUser = (req, res) => {
    const users = QueryAllUser();
    return res.render("Users", { users });
};

const GetUser = (req, res) => {
    const userId = req.params.id;
    const userData = QueryUserById(userId);
    return res.render("User", { userData });
}

export { getAllUser, GetUser };
