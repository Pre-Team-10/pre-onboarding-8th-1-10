export const setAccessToken = (accessToken) => {
  const ACCESS_TOKEN = accessToken;
  localStorage.setItem('ACCESS_TOKEN', ACCESS_TOKEN);
};

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  return accessToken;
};

export const deleteAccessToken = () => {
  localStorage.removeItem('ACCESS_TOKEN');
};
