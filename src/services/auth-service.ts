import axios from "axios";
import { IActivateAccount, ILoginForm, IRegisterForm } from "@/utils/interfaces/auth";
const url = process.env.NEXT_PUBLIC_API_URL;

interface ApiResponse<T> {
  loading: boolean;
  error: string | null;
  data: T | null;
}

const ApiService = async <T>(
  endpoint: string,
  data: any
): Promise<ApiResponse<T>> => {
  try {
    const response = await axios.post(`${url}${endpoint}`, data);

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
  return ApiService("/auth/login", data);
};

export const RegisterService = async (data: IRegisterForm) => {
  return ApiService("/auth/register", data);
};

export const ActivateAccountService = async (data: IUserCredentials) => {
  return ApiService("/auth/activate-account", data);
};

export const CheckOtpService = async (data: IUserCredentials) => {
  return ApiService("/auth/check-otp", data);
};

export const SendOtpService = async (data: IUserCredentials) => {
  return ApiService("/auth/send-otp", data);
};



