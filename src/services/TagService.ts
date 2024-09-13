import { HttpClient } from "@/services/HttpClient";

export default class TagService {
  static getAll(page: number = 1, limit: number = 10) {
    return HttpClient.get<any>("/tags", page, limit);
  }
}
