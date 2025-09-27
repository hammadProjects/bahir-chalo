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

      const { success, message } = response;
      if (!success) {
        toast.error(response);
        return;
      }
      toast.success(message);
    } catch (error: any) {
      // dynamically handle errors
      // Will be called when server is not working - (todo) - find out one more particualr reason for this to run

      setError("Please Try Again");
      toast.error("Please Try Again");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fn };
};
export default useFetch;
