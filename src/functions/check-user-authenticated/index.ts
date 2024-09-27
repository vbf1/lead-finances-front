const checkUserAuthenticated = () => {
  const userToken = localStorage.getItem("userAuthenticated");

  if (!userToken) return false;

  const userAuthenticated = JSON.parse(userToken!);

  const token = userAuthenticated.userAuthenticated.token;

  if (!token) return false;

  return true;
};

export { checkUserAuthenticated };
