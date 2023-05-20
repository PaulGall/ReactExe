import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function useGithubUser(username) {
  const { data } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );
  return {
    data,
  };
}
