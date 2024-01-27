import { User } from "../db/models/User";
import HttpError from "../helpers/HttpError";

const register = async (req, res,next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            throw HttpError(409,"User already exist")
        }
    }
    catch (error) {
        next(error)
    }
}