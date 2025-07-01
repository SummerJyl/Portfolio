# 🧩 Custom React Hooks

A collection of reusable logic patterns to help reduce duplication, improve readability, and enhance testability in React components.

---

## 🪝 1. useLocalStorage

Persist state to local storage.

```js
import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

🌐 useFetch
Generic data fetcher hook.
import { useEffect, useState } from "react";

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        if (isMounted) setData(json);
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

📏 usePrevious
Track the previous value of a prop or state.
import { useEffect, useRef } from "react";

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

🔐 useAuth (Template)
Basic pattern for token-based auth logic.
import { useState, useEffect } from "react";

export function useAuth() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (newToken) => {
    localStorage.setItem("authToken", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  return { token, login, logout };
}

🧪 Tips
✅ Always prefix custom hooks with use.

⚠️ Avoid side effects inside return.

🔁 Memoize callbacks if dependencies are stable.