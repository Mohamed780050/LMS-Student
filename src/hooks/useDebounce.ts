import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay?: number) {
  const [Dvalue, setDVale] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDVale(value);
    }, delay || 500);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return Dvalue;
}
