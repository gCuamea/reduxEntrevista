import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from './redux/actions';

export const Login = () => {
  const { uid, name } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const handleLoginButton = () => {
    dispatch(loginAction('123123111', 'Alonso'));
  };

  return (
    <div>
      {name} {uid}
      <button onClick={handleLoginButton}>Login</button>
    </div>
  );
};
