import style from './MainPage.module.css';

export const MainPage = () => {
  console.log(style);
  return (
    <>
      <h2>Стартовая страница</h2>
      <p className={style.text}>Добро пожаловать!</p>
      <p className={style.text}>Выберите категорию</p>
    </>
  );
};
