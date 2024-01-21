import { isAuthenticate } from "../helper/utilities";
import { ProductType } from "../types/Product";
import instance from "./instance";

const userInfo = isAuthenticate();

export const list = () => instance.get("/products");

export const read = (_id: string) => instance.get(`/products/${_id}`);

export const remove = (_id: string) =>
  instance.delete(`/products/${_id}`, {
    headers: {
      Authorization: `Bearer ${userInfo.accessToken}`,
    },
  });

export const add = (product: ProductType) =>
  instance.post(`/products`, product, {
    headers: {
      Authorization: `Bearer ${userInfo.accessToken}`,
    },
  });

export const edit = (_id: string, product: ProductType) =>
  instance.put(`/products/${_id}`, product, {
    headers: {
      Authorization: `Bearer ${userInfo.accessToken}`,
    },
  });
