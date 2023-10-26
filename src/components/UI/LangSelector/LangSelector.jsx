import { useEffect, useState } from 'react';
import style from './style.module.css';
import UaImg from './UA.svg';
import EnImg from './US.svg';
import LangSelectorList from './LangSelectorList';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../../store';


export const LangSelector = () => {
  const langs = [
    {icon: UaImg, title: 'Українська', langS: 'ua'},
    {icon: EnImg, title: 'English', langS: 'en' },
  ];

  const currentStoreLang = useSelector(state => {console.log('state', state);return state.permSetting.selectLanguage});

  const [open, setOpen] = useState(false);

  const currentLang = langs.filter(el => el.langS === currentStoreLang)[0];

  const dispatch = useDispatch();

  const changeCurrentLang = newLang => {
    console.log(newLang);
    // setCurrentLang(newLang);
    dispatch(changeLanguage(newLang.langS));
  }

  const clickHandler = () => {
    setOpen(!open)
  }

  const blurHandler = () => {
    setTimeout(() => setOpen(false), 300);
  }

  // useEffect(() => {
  //   setCurrentLang(langs.filter(el => el.langS === currentStoreLang)[0]);
  // }, [])

  const {wrapper, button, buttonContent, imgLangContain, buttonContentText} = style;
  return (
    <div className={wrapper} onBlur={blurHandler}>
      {
        open 
        ? <LangSelectorList list={langs} changeLang={changeCurrentLang}></LangSelectorList>
        : ''
      }
      
      <button className={button} data-active={open? 'true' : 'false'} onClick={clickHandler}>
        <div className={buttonContent}>
          <span className={imgLangContain}>
            <img src={currentLang.icon} alt="" />
          </span>
          <span className={buttonContentText}>
            {currentLang.title}
          </span>
          <span>
            {
              open
              ? <i className="fa-solid fa-caret-up"></i>
              : <i className="fa-solid fa-caret-down"></i>
            }
          </span>

        </div>
      </button>
    </div>
  );
};
