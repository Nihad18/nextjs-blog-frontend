import axios from "axios";
import { ILoginForm, IRegisterForm } from "@/utils/interfaces/auth";
const url = process.env.API_URL;

interface ApiResponse<T> {
  loading: boolean;
  data: T | null;
  error: string | null;
}

const ApiService = async <T>(
  endpoint: string,
  data: any
): Promise<ApiResponse<T>> => {
  try {
    const response = await axios.post(url + endpoint, data);

    // If the request is successful, return the data
    return { loading: false, data: response.data, error: null };
  } catch (error: any) {
    // If there's an error, return the error
    return {
      loading: false,
      data: null,
      error: error.message || "An error occurred.",
    };
  }
};

export const LoginService = async (data: ILoginForm) => {
  return ApiService("/api/auth/login", data);
};

export const RegisterService = async (data: IRegisterForm) => {
  return ApiService("/api/auth/register", data);
};
