import { getToken } from "./localStorage";

// checking if user data is present
export function isLogin() {
  const token = getToken();
  return token !== "";
}
