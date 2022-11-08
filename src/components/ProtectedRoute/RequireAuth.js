import { Outlet, Navigate } from "react-router-dom";
import { getNewToken, getNewUser } from "../../lib/localstorage";

const RequireAuth = () => {
  const token = getNewToken();
  const user = getNewUser();
  if (!user || !token) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default RequireAuth;
