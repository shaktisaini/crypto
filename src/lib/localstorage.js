export const USER = "user";
export const TOKEN = "token";

export const setNewUser = (user) => {
  localStorage.setItem(USER, JSON.stringify(user));
};

export const getNewUser = () => {
  const user = localStorage.getItem(USER);
  return user ? JSON.parse(user) : null;
};

export const setNewToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

export const getNewToken = () => {
  const token = localStorage.getItem(TOKEN);
  return token ? token : "";
};
