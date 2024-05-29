import { useRef } from "react";

const useDebounce = () => {
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const debounce = (func: Function, delay: number) => {
    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => {
        func();
        debounceTimeout.current = null;
      }, delay);
    };
  };

  return { debounce, debounceTimeout };
};

export default useDebounce;
