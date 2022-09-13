import { useState } from "react";

function useHttp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async ({
    url,
    method = "GET",
    body = null,
    headers = {},
  }) => {
    try {
      setLoading(true);

      const response = await fetch(url, { method, body, headers });
      const data = await response.json();

      setLoading(false);

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      return data;
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return { loading, error, request };
}

export default useHttp;
