import { User } from "../db/models/User.js";
import jwt from "jsonwebtoken";
import gravatar from "gravatar";
import HttpError from "../helpers/HttpError.js";

export const register = async (req, res, next) => {
	try {
		const { email, name } = req.body;
		const user = await User.findOne({ email });

		if (user) {
			throw HttpError(409, "User already exist");
		}

		const avatarURL = gravatar.url(email);

		const newUser = new User({ ...req.body, avatar: avatarURL });
		await newUser.hashPassword();
		await newUser.save();
		const payload = {
			id: newUser._id,
		};

		const { SECRET_KEY } = process.env;

		const token = jwt.sign(payload, SECRET_KEY);
		await User.findByIdAndUpdate(newUser._id, { token });
		res.status(201).json({
			token,
			user: {
				name,
				email,
				avatarURL,
			},
		});
	} catch (error) {
		next(error);
	}
};
