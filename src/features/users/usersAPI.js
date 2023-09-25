import axios from "axios"
import { BASE_URL } from "../../utils/constants"

export const createUser = async (name, email, password) => {
        try {
                const { data } = await axios.post(`${BASE_URL}/auth/signup`, { name, email, password });
                return data;
        } catch (error) {
                console.log({ createUserError: error });
                return alert(error.response.data.errors[0].msg);
        }
}

export const loginUser = async (email, password) => {
        try {
                const { data } = await axios.post(`${BASE_URL}/auth/login`, { email, password });
                return data;
        } catch (error) {
                console.log({ loginUserError: error });
                return alert(error.response.data.errors[0].msg);
        }
}