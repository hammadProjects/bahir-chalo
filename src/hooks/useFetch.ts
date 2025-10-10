"use client";
import { generateError } from "@/lib/utils";
import { UseFetchData } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function useFetch<
  Args extends unknown[],
  Return extends UseFetchData
>(cb: (...args: Args) => Promise<Return>) {
  const [data, setData] = useState<UseFetchData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const fn: (...args: Args) => Promise<void> = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
      // toast.success(response);

      const { success, message, url } = response;
      if (!success) {
        toast.error(message);
      } else {
        toast.success(message);
      }

      if (url) {
        router.push(url);
      }
    } catch (error) {
      // dynamically handle errors
      // Will be called when server is not working - (todo) - find out one more particualr reason for this to run

      const message = generateError(error);
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fn };
}
