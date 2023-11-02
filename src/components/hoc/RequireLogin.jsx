import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginModalControl } from "../../store/Slices/settingSlice";

const RequireLogin = ({children}) => {
  const currentUser = useSelector(state => state.permSetting.currentUser);
  const {pathname} = useLocation()
  const dispatch = useDispatch();

  if (!currentUser) {
    dispatch(loginModalControl(true))
    return <></>
  }
  return children;
};

export default RequireLogin;