import { useState, type ReactNode } from "react";
import { IsOn } from "./CommonContext";

const IsOnProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState(false);
  const tokenSwitch = () => setToken((prev) => !prev);
  return (
    <IsOn.Provider value={{ token, tokenSwitch }}>{children}</IsOn.Provider>
  );
};

export default IsOnProvider;
