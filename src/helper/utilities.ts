import { User } from "../types/User";

export function formatVND(value: number): string {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return formatter.format(value);
}

export const authenticate = (user: User, next: () => void) => {
  try {
    localStorage.setItem("user", JSON.stringify(user) as string);
    next();
  } catch (error) {
    console.log(error);
  }
};

export const isAuthenticate = () => {
  if (!localStorage.getItem("user")) {
    localStorage.setItem("user", JSON.stringify(""));
  }
  return JSON.parse(localStorage.getItem("user") as string);
};
