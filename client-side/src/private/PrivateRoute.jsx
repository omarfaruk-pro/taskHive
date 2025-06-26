import { useContext } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import Loading from "../component/Loading";
import { Navigate, useLocation } from "react-router";

export default function PrivateRoute({children}) {
  const {user, loading} = useContext(AuthContext);
  const {pathname} = useLocation();
  if(loading){
    return <Loading></Loading>
  }
  if(!user){
    return <Navigate state={pathname} to={'/login'}></Navigate>
  }
  return children;
}
