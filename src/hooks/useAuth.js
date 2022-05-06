import { useSelector } from "react-redux";

export const useAuth = () => {
  const { token } = useSelector((state) => state.auth);
  const { email, id } = useSelector((state) => state.auth.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
