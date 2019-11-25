export const TOKEN_KEY = "TOKEN";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem("USER");
};

export const userSession = user => {
  localStorage.setItem("USER", JSON.stringify(user));
};

export const getUser = () => JSON.parse(localStorage.getItem("USER"));
