import style from './style.module.css';

const LangSelectorList = ({ list, changeLang }) => {



  const { langList, imgLangContain, buttonContentText, langListItem, langListButton } = style;
  return (
    <div className={langList} style={{ '--top-expand': -list.length * 30 - 20 + 'px' }}>
      <ul>
        {
          list.map(lang => (
            <li className={langListItem} key={lang.title}>
              <button className={langListButton} onClick={() => changeLang(lang)}>
                <span className={imgLangContain}>
                  <img src={lang.icon} alt="" />
                </span>
                <span className={buttonContentText}>
                  {lang.title}
                </span>
              </button>
            </li>
          )
          )}
      </ul>
    </div>
  );
};

export default LangSelectorList;