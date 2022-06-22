import style from './DeleteBtn.module.css';
import {ReactComponent as DeleteIcon} from '../img/delete.svg';

export const DeleteBtn = () => (
  <button className={style.delete} aria-label='Удалить/скрыть'>
    <DeleteIcon width={15} height={15}/>
  </button>
);

