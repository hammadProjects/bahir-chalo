"use client";
import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb: (...args: any[]) => Promise<any>) => {
  const [data, setData] = useState(null); // change type
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fn = async (...args: unknown[]) => {
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
    } catch (error) {
      // dynamically handle errors
      // Will be called when server is not working - (todo) - find out one more particualr reason for this to run

      let message = "Something Went Wrong";

      if (error && typeof error === "object" && "response" in error) {
        const err = error as { response?: { data?: { message?: string } } };
        message = err.response?.data?.message || message;
      }

      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fn };
};
export default useFetch;
