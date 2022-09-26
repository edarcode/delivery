import { User } from "../models/users.js";

export const deleteUser = async query => {
	const { id } = query;
	const user = User.findOneAndUpdate(id, { deleted: true });
	return user;
};
