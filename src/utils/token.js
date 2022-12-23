export const setToken = (response) => {
  const accessToken = response.data.access_token;
  localStorage.setItem('access_token', accessToken);
};
