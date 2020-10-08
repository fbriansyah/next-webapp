import { getToken } from "./localStorage";

// checking if user data is present
export function isLogin(): boolean {
  const token = getToken();
  return token !== "";
}
