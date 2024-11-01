// src/components/Modal.tsx
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { useCallback } from 'react';
import { onToggleInfoModal } from 'store/reducers/weather';



const Modal = () => {
  const dispatch = useDispatch()
  const onClose = useCallback(() => {
    dispatch(onToggleInfoModal(false))
  }, [dispatch])

  return (
    <div className={styles.modalOverlay} onClick={onClose} onKeyDown={onClose} tabIndex={0}>
      <div className={styles.modalContent}>
        <div className={styles.modalBody}>
        по этому запросу ничего не найдено
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.closeButton} onClick={onClose} >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
