import axios from "axios";
import useSWR from "swr";

const url = process.env.NEXT_PUBLIC_API_URL;

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
