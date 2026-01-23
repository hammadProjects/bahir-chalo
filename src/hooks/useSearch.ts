import { useEffect, useState } from "react";

const useSearch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setLoading(true);
    }

    const newTimeoutId = setTimeout(() => {
      setLoading(false);
      setDebouncedQuery(searchQuery);
    }, 2000);

    setTimeoutId(newTimeoutId);

    return () => clearTimeout(newTimeoutId);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return {
    searchLoading: loading,
    searchQuery,
    handleSearchChange,
    debouncedQuery,
  };
};

export default useSearch;
