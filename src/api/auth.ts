import { User } from "../types/User";
import instance from "./instance";

export const signup = (user: User) => instance.post("/auth/signup", user);

export const signin = (user: User) => instance.post("/auth/signin", user);
