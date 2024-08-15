import axios from "axios";
import useSWR from "swr";

const url = "http://localhost:8000";

const fetcher = (url: string) => axios.get(url).then((res: any) => res.data);

export const GetBlogs = () => {
  const { data, error, isLoading } = useSWR("/lastblogs", () =>
    fetcher(`${url}/blogs`)
  );

  return {
    data,
    error,
    isLoading,
  };
};
export const GetTags = () => {
  const { data, error, isLoading } = useSWR("/api/tags", () =>
    fetcher(`${url}/tags`)
  );

  return {
    data,
    error,
    isLoading,
  };
};
