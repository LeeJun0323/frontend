// 1. Context로 사용할 객체 생성

import { createContext, useContext } from "react";

export type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

// 실습 2
type CountContextType = {
  count: number;
  increaseCount: () => void;
};

export const CountContext = createContext<CountContextType | null>(null);

// Context null 체크를 커스텀 hook으로 생성
export function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("CountContext null");
  }
  return context;
}

// 실습 3
type IsOnType = {
  token: boolean;
  tokenSwitch: () => void;
};
export const IsOn = createContext<IsOnType | null>(null);
