import React, { useState } from 'react';
import style from './Registration.module.css';
import sprite from '../../images/sprite.svg';
import { NavLink } from 'react-router-dom';

const RegistrationUser = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    name: '',
  });

  const onChangeInput = ev => {
    console.log(ev.target.name);
    setState(prevState => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    if (state.password !== state.repeatPassword) {
      alert('Пароль был введен неправильно! Попытайтесь еще раз');
    }
  };

  return (
    <div className={style.registration__main_container}>
      <div className={style.registration__container}>
        <svg className={style.registration__logo} width="24px" height="24px">
          <use xlinkHref={`${sprite}#icon-logo`}></use>
        </svg>
        <form className={style.registration__form} onSubmit={onSubmit}>
          <div className={style.registration__form_container}>
            <svg
              className={style.registration__icons}
              width="24px"
              height="24px"
            >
              <use xlinkHref={`${sprite}#icon-email`}></use>
            </svg>
            <input
              placeholder="E-mail"
              name="email"
              className={style.registration__input}
              onChange={onChangeInput}
            />
          </div>
          <div className={style.registration__form_container}>
            <svg
              className={style.registration__icons}
              width="24px"
              height="24px"
            >
              <use xlinkHref={`${sprite}#icon-lock`}></use>
            </svg>
            <input
              name="password"
              placeholder="Пароль"
              className={style.registration__input}
              onChange={onChangeInput}
            />
          </div>
          <div className={style.registration__form_container}>
            <svg
              className={style.registration__icons}
              width="24px"
              height="24px"
            >
              <use xlinkHref={`${sprite}#icon-lock`}></use>
            </svg>
            <input
              name="repeatPassword"
              placeholder="Подтвердите пароль"
              className={style.registration__input}
              onChange={onChangeInput}
            />
          </div>
          <div className={style.registration__form_container}>
            <svg
              className={style.registration__icons}
              width="24px"
              height="24px"
            >
              <use xlinkHref={`${sprite}#icon-account`}></use>
            </svg>
            <input
              name="name"
              placeholder="Ваше имя"
              className={style.registration__input}
              onChange={onChangeInput}
            />
          </div>
          <button
            type="submit"
            className={style.registration__button_registration}
          >
            Регистрация
          </button>
        </form>

        {/* eslint-disable-next-line no-sequences*/}
        <NavLink to="/login">
          <button className={style.registration__button}>Вход</button>
        </NavLink>
      </div>
    </div>
  );
};

export default RegistrationUser;
