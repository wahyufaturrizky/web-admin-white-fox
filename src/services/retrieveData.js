import { RequestPublic } from "./headerRequest";
/**
 * @author wahyu fatur rizki (https://www.linkedin.com/in/wahyu-fatur-rizky/)
 * @return { obj }
 */

export const postLogin = (data) => {
  const response = RequestPublic().post("/api/v1/login", data);
  return response;
};
