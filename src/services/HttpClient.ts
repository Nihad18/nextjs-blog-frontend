import axios, { AxiosResponse } from "axios";

export class HttpClient {
  static baseURL = "http://localhost:8000/api";

  static async get<T>(
    path: string,
    page: number,
    limit: number
  ): Promise<AxiosResponse<T>> {
    return axios.get<T>(`${this.baseURL}${path}?page=${page}&limit=${limit}`);
  }

  static async post<T>(path: string, data: T): Promise<AxiosResponse<T>> {
    try {
      const response = await axios.post<T>(`${this.baseURL}${path}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (error) {
      console.error("Error in POST request:", error);
      throw error;
    }
  }
}
