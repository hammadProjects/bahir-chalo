"use client";
import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(null); // change type
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
      // toast.success(response);

      console.log("response from usefetch", response);
    } catch (error: any) {
      // dynamically handle errors
      console.log(
        "usefetch error message",
        error,
        "error.message",
        error.message
      );
      setError("Please Try Again");
      toast.error("Please Try Again");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fn };
};
export default useFetch;
