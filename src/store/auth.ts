"use client"
import { create } from "zustand";
import { useRouter } from "next/router";
import { LoginService } from "@/services/auth-service";

const router = useRouter();

interface AuthState {
  token: string;
  setToken: (token: string) => void;
}

export const adminStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token") || "",
  setToken: (token) => set({ token }),
}));

export const loginAction = async (data: any) => {
  try {
    const response: any = await LoginService(data);
    const accessToken = response.data.access_token;

    adminStore.getState().setToken(accessToken);
    localStorage.setItem("token", accessToken);
    router.push("/");
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const logOut = () => {
  adminStore.getState().setToken("");
  localStorage.removeItem("token");
  router.push("/login");
};
