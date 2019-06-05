export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && localStorage.getItem("User")
    ? JSON.parse(localStorage.getItem("User"))
    : {};

const setUser = user => localStorage.setItem("User", JSON.stringify(user));

export const handleLogin = async ({ email, password }) => {
  setUser({ email });
  return true;
};

export const isLoggedIn = () => {
  const user = getUser();
  if (user.email) {
    return true;
  }
  return false;
};

export const logout = callback => {
  setUser({});
  callback();
};
