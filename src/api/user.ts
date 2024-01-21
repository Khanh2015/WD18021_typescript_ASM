import instance from "./instance";

export const list = () => instance.get("/users");
