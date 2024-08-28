import axios from "axios";
import useSWR from "swr";

const url = "https://menuu.online";

const fetcher = (url: string) => axios.get(url).then((res: any) => res.data);

export const GetBlogs = () => {
  const { data, error, isLoading } = useSWR("/api/blogs", () =>
    fetcher(`${url}/api/blogs`)
  );

  return {
    data,
    error,
    isLoading,
  };
};
export const GetTags = () => {
  const { data, error, isLoading } = useSWR("/api/tags", () =>
    fetcher(`${url}/api/tags`)
  );

  return {
    data,
    error,
    isLoading,
  };
};
