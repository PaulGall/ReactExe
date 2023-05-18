import { useState } from "react";

export function useGithubUser() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function githubUserFetch(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const responseConvert = await response.json();

      if (response.status !== 200) {
        setError(new Error());
      }
      setData(responseConvert);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, onFetchUser: githubUserFetch };
}
