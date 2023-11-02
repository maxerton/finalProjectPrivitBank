import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import { loginModalControl } from '../../store/Slices/settingSlice';
import { logIn } from '../../store/Slices/permSettingSlice';
import { addUser } from '../../store/Slices/usersSlice';

const Login = () => {
  const loginData = useSelector(state => state.settings.loginModal);
  const usersData = useSelector(state => state.users.users);

  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [unInput, setunInput] = useState('');
  const [loginRegister, setLoginRegister] = useState(false);

  const [correctForm, setCorrectForm] = useState(false);

  const dispatch = useDispatch();
  const closeModal = (ev) => {
    ev.target === ev.currentTarget && dispatch(loginModalControl(false));
  }

  const authLogin = () => {
    const user = usersData.filter(el => el.login === loginInput && el.password === atob(passwordInput));
    if (user.length === 1) {
      dispatch(logIn({user: user[0]}));
      dispatch(loginModalControl(false));
      setLoginInput('');
      setPasswordInput('');
    } else {
      dispatch(addUser({
        login: loginInput,
        password: atob(passwordInput),
        name: unInput,
        cb: (user) => {
          dispatch(logIn({user: user}));
          dispatch(loginModalControl(false));
        }
      }));
    }
  }

  useEffect(() => {
    const usLogin = usersData.filter(el => el.login === loginInput);
    setCorrectForm(false);
    if (loginInput.length > 0) {
      setLoginRegister(usLogin.length !== 0);
    }
    if (loginInput.length > 0 && passwordInput.length > 0) {
      if (usLogin.length === 1 && btoa(usLogin[0].password) === passwordInput) {
        setCorrectForm(true);
      } else if (passwordInput.length >= 8) {
        setCorrectForm(true);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginInput, passwordInput]);


  return (
    <Transition
      in={loginData.open}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      {
        state => (
          <div className={`login-wrapper ${state}`} onClick={closeModal}>
            <div className="login-container">
              <div className="container-fluid">
                <div className="d-flex justify-content-end">
                  <button className="btn-close" onClick={closeModal}></button>
                </div>
                <h3 className='text-center'>Вхід / Реєстрація</h3>
                <div className="modal-form-container mt-4">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" value={loginInput} onChange={ev => setLoginInput(ev.target.value)} placeholder="Логін" />
                    <label for="floatingPassword">Логін</label>
                  </div>
                  <Transition
                  in={!loginRegister}
                  unmountOnExit
                  mountOnEnter
                  timeout={500}
                  >
                    {state => (
                      <div className={"form-floating mb-3 " + state}>
                      <input type="text" className="form-control" value={unInput} onChange={ev => setunInput(ev.target.value)} placeholder="Ім'я" />
                      <label for="floatingPassword">Ім'я</label>
                    </div>
                    )}
                  </Transition>
                  <div className="form-floating">
                    <input type="password" className="form-control" value={passwordInput} onChange={ev => setPasswordInput(ev.target.value)} placeholder="Пароль" />
                    <label for="floatingPassword">Пароль</label>
                  </div>
                  <div className="mt-5 text-center">
                    <button onClick={authLogin} className={`btn btn-success btn-lg ${correctForm ? '': 'disabled'}`}>{loginRegister ? 'Увійти' : 'Реєстрація'}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </Transition>
  );
};

export default Login;