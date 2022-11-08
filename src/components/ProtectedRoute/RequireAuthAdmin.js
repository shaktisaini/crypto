import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./../../context/user-context";
const RequireAuthAdmin = () => {
  const auth = useContext(UserContext);
  if (!auth?.user?.is_super_admin) {
    return <Navigate to="/Dashboard" />;
  }
  return <Outlet />;
};

export default RequireAuthAdmin;
