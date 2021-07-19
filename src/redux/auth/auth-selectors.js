const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.user.email;

const getIsRefreshed = state => state.auth.isRefreshed;

const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsRefreshed,
  getToken,
};

export default authSelectors;
