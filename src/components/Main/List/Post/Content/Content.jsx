import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';
import {useState} from 'react';
import Modal from '../../../../Modal';
export const Content = ({title, author, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClose = () => setIsModalOpen(false);
  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a'
          size={18}
          tsize={24}
          className={style.linkPost}
          href='#post'
          onClick={() => {
            setIsModalOpen(true);
          }}>
          {title}
        </Text>
      </Text>
      <Text As='a'
        size={12}
        tsize={14}
        color='orange'
        bold
        className={style.linkAuthor}
        href='#author'>
        {author}
      </Text>
      {isModalOpen &&
            <Modal id={id}
              onClose={onClose} isModalOpen={isModalOpen}
            />};

    </div>
  );
};
Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};


