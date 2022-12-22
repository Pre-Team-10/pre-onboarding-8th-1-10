export const saveTokenInLocalStorage = (accessToken) => {
  localStorage.setItem('access_token', accessToken);
};

export const getTokenInLocalStorage = () => {
  return localStorage.getItem('access_token');
};

export const removeTokenInLocalStorage = () => {
  localStorage.removeItem('access_token');
};
